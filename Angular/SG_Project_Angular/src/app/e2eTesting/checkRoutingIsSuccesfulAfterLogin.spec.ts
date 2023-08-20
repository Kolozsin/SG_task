import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { loggedInReducer } from '../store/login.reducer';
import { HomeComponent } from '../home/home.component';
import { LoginServiceMockedImpl } from '../ServiceImp/loginServiceImpl/loginServiceMockedImpl';
import { RandomNumberGeneratorServiceImpl } from '../ServiceImp/rngServiceImpl/random-number-generator.service.IMPL';
import { User } from '../Model/user';
import { By } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let loginService: LoginServiceMockedImpl;
  let router : Router;

  let userListMimicked: User[] = [
    { id: 0, userName: 'User1' },
    { id: 1, userName: 'User2' },
    { id: 2, userName: 'User3' },
    { id: 3, userName: 'User4' },
    { id: 4, userName: 'User5' },
    { id: 5, userName: 'User6' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterModule, StoreModule.forRoot({ appState: loggedInReducer })],
      declarations: [HomeComponent],
      providers: [
        {provide : 'LoginService', useClass : LoginServiceMockedImpl},
        RandomNumberGeneratorServiceImpl, Router
      ],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loginService = TestBed.inject(LoginServiceMockedImpl);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should be the same length for the loaded list", () => {
    loginService.loadAllAccountNames();
    expect(component.userNameList.length).toEqual(userListMimicked.length);
  });


  it('should have input', () => fakeAsync(() => {
    const navigateSpy = spyOn(router, 'navigate').and.callThrough();
    let inputAccount: HTMLInputElement = fixture.debugElement.query(By.css('.account')).nativeElement;
    let inputPassword: HTMLInputElement = fixture.debugElement.query(By.css('.password')).nativeElement;
    inputAccount.value = "User1";
    inputPassword.value = "test";
    inputAccount.dispatchEvent(new Event('input'));
    inputPassword.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    component.login();

    tick(); // Advance time for any pending asynchronous operations

    fixture.detectChanges();

    expect(navigateSpy).toHaveBeenCalledWith(['/game']);
  }));




});
