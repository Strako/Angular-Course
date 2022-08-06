import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* components */
import { AppComponent } from './components/app/app.component';
import { UserComponent } from './components/user/user.component';
//import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
//    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
