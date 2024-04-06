import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabComponent } from './shared/components/tab/tab.component';
import { TabForComponent } from './shared/components/tab-for/tab-for.component';
import { TabSwitchComponent } from './shared/components/tab-switch/tab-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TabForComponent,
    TabSwitchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
