import { BehaviorSubject } from 'rxjs/BehaviorSubject'; 
import { State } from './state.interface';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/pluck';
import { Observable } from 'rxjs/Observable';

//behavioursubjects takes an intial state so lets create one
//with only subject we can not apply a initial state so we used initial subject.
// behaviour subject also pass the last value to any new subscriber 
// we can put data using .next

const state: State ={
playlist:undefined
}

export class StoreProvider {
    private subject = new BehaviorSubject<State>(state);
    private store = this.subject.asObservable().distinctUntilChanged();

    get  current_value(){
    return this.subject.value;
    }

    select<T>(name:string): Observable<T>{
        return this.store.pluck(name)
    }

    set (name : string , new_state_value : any){
        this.subject.next({
            ...this.current_value,[name]:new_state_value
        });
    }
}