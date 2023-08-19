import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { LoginServiceMockedImpl } from './ServiceImp/loginServiceMockedImpl';
import { GameComponent } from './game/game.component';
import { StoreModule } from '@ngrx/store';
import { loggedInReducer } from './store/login.reducer';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(({ loggedInState: loggedInReducer }))
  ],
  providers: [{provide: 'LoginService', useClass:LoginServiceMockedImpl}],
  bootstrap: [AppComponent]
})
export class AppModule { }
