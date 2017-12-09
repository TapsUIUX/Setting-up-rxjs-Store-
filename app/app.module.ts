import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SongModule } from './songs/songs.module';

import { AppComponent } from './app.component';
import { StoreProvider } from './store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SongModule
  ],
  providers: [StoreProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
