import { Injectable, ApplicationRef, Inject } from '@angular/core';
import { Store, schemeGen, ProtoStore, Effect, Action, Event } from 'foxstore';
import { of } from 'rxjs';

export const initState = {
  rows: 10,
  columns: 10,
  data: null,
  status: 'statusChange',
};

const statusChangeReducer = () => ({ status: 'COMPLETED' });

export const eventSheme = schemeGen({ // Important that no type setted!
  storeInited: {
    effects: [{eventName: 'storeInited', effect: console.log}]
  },
  statusChange: {
    reducers: [
      { eventName: 'statusChange', reducer: statusChangeReducer },
      { eventName: 'statusChange', reducer: statusChangeReducer },
      { eventName: 'statusChange', reducer: statusChangeReducer },
      { eventName: 'statusChange', reducer: statusChangeReducer },
    ]
  },
});
@Injectable({
  providedIn: 'root'
})
export class StoreService
  extends ProtoStore<typeof initState> {
  constructor(private app: ApplicationRef) {
    super(initState, null, null, eventSheme);
    console.log('hall', this.app);
    this.select('status').subscribe(console.warn);
   }

   @Action('storeInited')
   log() {
     console.log('statusChangen');
     return new Event('statusChange', of({}), true)
   }

   @Effect('statusChange')
   logger() {
     console.log('statusChangen');
   }
}
