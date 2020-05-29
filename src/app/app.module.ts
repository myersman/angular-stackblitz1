import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { NavigationComponent } from './navigation/navigation.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
  RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'help', component: HelpComponent}
  ]) ],
  declarations: [ AppComponent, HelloComponent, NavigationComponent, HomeComponent, AboutComponent, HelpComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
