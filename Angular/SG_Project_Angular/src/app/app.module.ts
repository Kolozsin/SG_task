import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { LoginServiceMockedImpl } from './ServiceImp/loginServiceImpl/loginServiceMockedImpl';
import { GameComponent } from './game/game.component';
import { StoreModule } from '@ngrx/store';
import { loggedInReducer } from './store/login.reducer';
import { TicketComponent } from './ticket/ticket.component';
import { RandomNumberGeneratorServiceImpl } from './ServiceImp/rngServiceImpl/random-number-generator.service.IMPL';
import { UserBackendServiceImpl } from './ServiceImp/userBackendServiceImpl/UserBackendServiceImpl';
import { LoginServiceRealImpl } from './ServiceImp/loginServiceImpl/loginServiceRealImpl';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(({ appState: loggedInReducer }))
  ],
  providers: [
    {provide: 'BackendService', useClass:UserBackendServiceImpl},
    {provide: 'LoginService', useClass:LoginServiceRealImpl},
    {provide: 'RandomGeneratorService', useClass:RandomNumberGeneratorServiceImpl}],
  bootstrap: [AppComponent]
})
export class AppModule { }
