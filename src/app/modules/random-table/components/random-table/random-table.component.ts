import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProtoStore, createStore, EventSchemeType, schemeGen } from 'foxstore';

const initState = {
  rows: 10,
  columns: 10,
  data: null,
};


const eventSheme = schemeGen({ // Important that no type setted!
  storeInited: {
    effects: [{eventName: 'storeInited', effect: console.log}]
  }
});
@Component({
  selector: 'app-random-table',
  templateUrl: './random-table.component.html',
  styleUrls: ['./random-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RandomTableComponent
  // extends ProtoStore<{
  //   rows: number;
  //   columns: number;
  //   data: number[][];
  // }>
    implements OnInit {

  store = createStore<typeof initState, typeof eventSheme>(initState, null, null, eventSheme);

  constructor() {
    // super();
   }

  ngOnInit() {
    this.store.dispatch<void>('storeInited');
    this.store.select().subscribe(console.log);
  }

  generateData({rows, columns}: {rows: string, columns: string}): void {
    this.store.patch({
      rows: Number(rows),
      columns: Number(columns),
      data: rows && columns && (new Array(Number(rows)))
        .fill((new Array(Number(columns)))
          .fill(0)
          .map(Math.random)
          ),
    })
  }
}
