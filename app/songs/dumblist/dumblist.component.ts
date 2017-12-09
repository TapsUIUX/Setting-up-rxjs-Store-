import { Component ,Input,ChangeDetectionStrategy,EventEmitter,Output} from '@angular/core';
 

 

@Component({
  selector: 'dumb-list',
  changeDetection:ChangeDetectionStrategy.OnPush,
  template: `
    <ul class='list-group'>
    <li class='list-group-item list-group-item-success'> <ng-content></ng-content> </li>  
    <li class='list-group-item' *ngFor='let item of items ; index as i'>
    {{item.id}}{{item.song}}
    <i class='fa fa-heart pull-right' [class.active]='item.fav' (click)='onToggle(i,"fav")'></i>
    <i class='fa fa-thumbs-up pull-right' [class.active]='item.like' (click)='onToggle(i,"like")'></i>
     </li>
    </ul>
    ` 
    ,
    styles: [`.active { color : red }`]
    
})
export class DumbListComponent  {
 
 @Input() items:any[];
 @Output() toggle_e = new EventEmitter();  

constructor( ){    
  }

  onToggle(index:number,prop:string){
    const track = this.items[index];
    this.toggle_e.emit({
      track:{...track,[prop]:!track[prop]}
    })

  }


  // ngOnInit(){     
  // }

  // ngOnDestroy(){
  
  // }


}
