import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { IndexComponent } from './index/index.component';
import { LeftSlideComponent } from './index/left-slide/left-slide.component';
import { RightSlideComponent } from './index/right-slide/right-slide.component';
import { NavBarComponent } from './index/nav-bar/nav-bar.component';
import { MainComponent } from './index/main/main.component' ;



@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    IndexComponent,
    LeftSlideComponent,
    NavBarComponent,
    RightSlideComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
