import { Injectable, ApplicationRef, Inject } from '@angular/core';
import { Store, schemeGen, ProtoStore, Effect, Action, Event, Reducer } from 'foxstore';

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
type State = {
  rows: number;
  columns: number;
  data: number[][];
};

@Injectable({
  providedIn: 'root'
})
export class StoreService
  extends ProtoStore<State> {
  constructor(private app: ApplicationRef) {
    super(initState, {
      logOn: true,
      logOptions: {
        events: true,
      },
    }, null, eventSheme);
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

   @Reducer('RowsNumberChanged')
   setRows(rows: number): Partial<State> {
     return { rows }
   }

   @Reducer('ColsNumberChanged')
   setCols(columns: number): Partial<State> {
     return { columns }
   }

   @Reducer('DataChanged', { requiredEvents: {
     mode: 'once',
     eventNames: [
       'RowsNumberChanged',
       'ColsNumberChanged',
     ],
   }})
   changeData(payload: Partial<State>) {
     console.warn('reducer');

     return payload;
   }
}
