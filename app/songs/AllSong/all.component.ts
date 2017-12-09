import { Component , OnInit, OnDestroy} from '@angular/core';
import { StoreProvider } from '../../store';
import { SongService } from '../../services/song.service';
import {Observable} from 'rxjs/Observable';
import {Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'all-songs',
  template: `
        <dumb-list [items]='All$ | async' (toggle_e)='onToggle($event)'>
        All Songs
        </dumb-list>
    ` ,
    styles: [`.active { color : red }`]
    
})
export class AllComponent implements OnInit , OnDestroy{
 
 
    All$:Observable<any[]>;  
  subscription : Subscription ;

  constructor( private _store: StoreProvider , private _songservice : SongService){
    
  }

  ngOnInit(){
      this.All$  = this._store.select('playlist');
      this.subscription =this._songservice.getPlaylist$.subscribe();
  }

  ngOnDestroy(){
      this.subscription.unsubscribe();
  }

  onToggle(event){
      console.log(event);
      this._songservice.toggleValue(event)
  }

}
