import { Component } from '@angular/core';
import { StoreProvider } from './store';

@Component({
  selector: 'app-root',
  template: `
   
  <div class='container'>
  <div class='col-xs-4'>
  <all-songs></all-songs>
  </div>
  <div class='col-xs-4'>
  <fav-songs></fav-songs>
  </div>
  <div class='col-xs-4'>
  <liked-songs></liked-songs>
  </div>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StroeApp';
  //No call backs every thing is reactive cause we are 
  //subscribing to the values which returning a onservable list$
  list$ = this._store.select<any[]>('names');

  constructor( private _store: StoreProvider ){
    //console.log(this._store);
    this._store.set('names',[{id:1,name:'taps'},{id:2,name:'new taps'}])
   // console.log(this._store);
  }


}
