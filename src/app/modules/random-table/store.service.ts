import { Injectable } from '@angular/core';
import { asapScheduler } from 'rxjs';

import { Action, createHandlers, Effect, Event, ProtoStore, Reducer } from '../../../../../foxstore/src/core';
import { LocalStorageSaver } from '../../../../../foxstore/src/saving/LocalStorageSaver';

type State = {
  rows: number;
  columns: number;
  data: number[][];
};

export const initState: State = {
  rows: 10,
  columns: 10,
  data: null,
};

export const eventSheme = { // Important that no type setted!
  storeInited: {
    effects: [{ eventName: 'storeInited', handler: console.log }]
  },
  RowsNumberChanged: createHandlers<State, number>({
    reducers: [
      [rows => ({ rows }), {}],
    ]
  })('RowsNumberChanged'),
  ColsNumberChanged: createHandlers<State, number>({
    reducers: [
      [columns => ({ columns }), {}],
    ]
  })('ColsNumberChanged')
};


@Injectable({
  providedIn: 'root'
})
export class StoreService
  extends ProtoStore<State, typeof eventSheme> {
  constructor() {
    super(initState, eventSheme, {
      storeName: 'TableStore',
      logOptions: {
        logOn: true,
        events: true,
        reducers: true,
        actions: true,
        effects: true,
        state: true,
        logger: console.log,
      },
      dispatcher: {
        scheduler: asapScheduler,
      },
      saving: {
        saver: LocalStorageSaver,
        keysToSave: ['data'],
      },
    });

    window['Store'] = this;
   }

   @Action('storeInited')
   logg() {
     console.log('huinya');
     return new Event('hui')
   }

   @Effect('hui')
   loger() {
     console.log('huinya takaya');
   }

  //  @Reducer('RowsNumberChanged')
  //  setRows(rows: number): Partial<State> {
  //    return { rows }
  //  }

  //  @Reducer('ColsNumberChanged')
  //  setCols(columns: number): Partial<State> {
  //    return { columns }
  //  }

   @Reducer('DataChanged', { requiredEvents: {
     always: true,
     eventNames: [
       'RowsNumberChanged',
       'ColsNumberChanged',
      //  'UpdateData'
     ],
   }})
   changeData(
     payload: Partial<State>,
     { rows, columns }: Partial<State>,
   ) {
    console.warn('Once required');

     return {
         data: rows && columns && (new Array(Number(rows)))
          .fill((new Array(Number(columns)))
            .fill(0)
            .map(Math.random)
            ),
     };
   }

  @Effect('Third', {
    requiredEvents: {
      always: true,
      eventNames: ['First', 'Second']
  }})
  required(): void {
    console.warn('Third Event handler!')
  }
}
