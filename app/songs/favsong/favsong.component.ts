import { Component , OnInit, OnDestroy} from '@angular/core';
import { StoreProvider } from '../../store';
import { SongService } from '../../services/song.service';
import {Observable} from 'rxjs/Observable';
import {Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'fav-songs',
  template: `
  <dumb-list [items]='favs$ | async' (toggle_e)='onToggle($event)'>
  Fav Songs
  </dumb-list>
    ` 
    ,
    styles: [`.active { color : red }`]
    
})
export class FavComponent implements OnInit , OnDestroy{
 
 
  favs$:Observable<any[]>;  
  

  constructor( private _store: StoreProvider , private _songservice :SongService){
    
  }

  ngOnInit(){
      this.favs$ = this._store.select('playlist') 
      .filter(Boolean)
      .map(playlist=>playlist.filter(song=>song.fav))
  }
  onToggle(event){
    console.log(event);
    this._songservice.toggleValue(event)
}

  ngOnDestroy(){
  
  }


}
