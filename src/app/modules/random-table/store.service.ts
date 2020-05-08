import { Injectable } from '@angular/core';
import { Store, schemeGen, ProtoStore } from 'foxstore';

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
@Store(initState, null, eventSheme)
export class StoreService
  extends ProtoStore<{
    rows: number;
    columns: number;
    data: number[][];
  }> {

  constructor() {
    super(initState);
    console.log('hallo');
   }
}
