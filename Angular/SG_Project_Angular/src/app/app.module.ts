import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { LoginServiceMockedImpl } from './ServiceImp/loginServiceMockedImpl';
import { GameComponent } from './game/game.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{provide: 'LoginService', useClass:LoginServiceMockedImpl}],
  bootstrap: [AppComponent]
})
export class AppModule { }
