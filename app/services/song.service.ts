import { Injectable  } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { StoreProvider} from '../store';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class SongService {

    getPlaylist$ = this._http.get('http://localhost:3000/playlist').do(next=>this._store.set('playlist',next))

    toggleValue(event){
        this._http.put(`http://localhost:3000/playlist/${event.track.id}`,event.track)
        .subscribe((track:any)=>{
            const current_value = this._store.current_value.playlist;
            const playlist = current_value.map((song:any)=>{
                if(event.track.id===song.id){
                    return {...song,...event.track}
                }else{
                    return song ;
                }
            })
        this._store.set('playlist',playlist);
        })

    }

    constructor( private _http : HttpClient , private _store:StoreProvider){}

}