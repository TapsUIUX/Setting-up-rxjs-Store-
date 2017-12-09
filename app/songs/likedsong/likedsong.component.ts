import { Component } from '@angular/core';
import { StoreProvider } from '../../store';
import {Observable} from 'rxjs/Observable';
import { SongService } from '../../services/song.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'liked-songs',
  
  template: `
  <dumb-list [items]='liked$ | async' (toggle_e)='onToggle($event)'>
  Liked Songs
  </dumb-list>
    ` 
    ,
    styles: [`.active { color : red }`]
})
export class LikedComponent {
 
 
  liked$ :Observable<any[]>;  
  

  constructor( private _store: StoreProvider , private _songservice : SongService){
    
  }

  ngOnInit(){
       this.liked$ = this._store.select('playlist')
      .filter(Boolean)//checks if value present B capital
      .map(playlist=> playlist.filter(song=>song.like))      
  }

  ngOnDestroy(){
  
  }
  onToggle(event){
    console.log(event);
    this._songservice.toggleValue(event)
  }


}
