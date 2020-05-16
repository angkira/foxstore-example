import { Injectable, ApplicationRef, Inject } from '@angular/core';
import { Store, schemeGen, ProtoStore, Effect, Action, Event } from 'foxstore';

export const initState = {
  rows: 10,
  columns: 10,
  data: null,
};

export const eventSheme = schemeGen({ // Important that no type setted!
  storeInited: {
    effects: [{eventName: 'storeInited', effect: console.log}]
  }
});
@Injectable({
  providedIn: 'root'
})
// @Store()
export class StoreService
  extends ProtoStore<{
    rows: number;
    columns: number;
    data: number[][];
  }> {
  constructor(private app: ApplicationRef) {
    super(initState, null, null, eventSheme);
    console.log('hall', this.app);
   }

   @Action('storeInited')
   log() {
     console.log('huinya');
     return new Event('hui')
   }

   @Effect('hui')
   loger() {
     console.log('huinya takaya');
   }
}
