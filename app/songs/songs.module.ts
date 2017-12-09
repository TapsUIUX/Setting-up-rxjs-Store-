import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { StoreProvider } from '../store';
import { HttpClientModule } from '@angular/common/http';
import { FavComponent } from './favsong/favsong.component';
import { LikedComponent } from  './likedsong/likedsong.component';
import { AllComponent } from  './AllSong/all.component';
import { SongService } from '../services/song.service';
import { DumbListComponent } from '../songs/dumblist/dumblist.component';
@NgModule({
  declarations: [ 
    FavComponent,
    LikedComponent,
    AllComponent,
    DumbListComponent
            
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[FavComponent,LikedComponent,AllComponent],
  providers: [StoreProvider,SongService]
 
})
export class SongModule { }
