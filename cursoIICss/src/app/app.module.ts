import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

//services
import { AboutExperienceService } from './about-experience.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { PokeAPIComponent } from './components/poke-api/poke-api.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
{ path: '', component: HomeComponent, pathMatch: 'full' },
{ path: 'pokeapi', component: PokeAPIComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'notfound', component: NotfoundComponent },
{ path: '**', redirectTo: "notfound" }
]; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    PokeAPIComponent,
    AboutComponent,
    HomeComponent,
    NotfoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgbModule
    
  ],
  providers: [AboutExperienceService],
  bootstrap: [AppComponent],
})
export class AppModule { }
