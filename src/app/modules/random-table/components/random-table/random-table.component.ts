import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProtoStore, createStore, EventSchemeType, schemeGen } from 'foxstore';
import { initState, eventSheme, StoreService } from '../../store.service';
import { Observable } from 'rxjs';

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

  // store = createStore<typeof initState, typeof eventSheme>(initState, null, null, eventSheme);

  rows$: Observable<number>;
  columns$: Observable<number>;
  data$: Observable<number[][]>;

  constructor(private store: StoreService) {
    // super();
   }

  ngOnInit() {
    this.store.dispatch<void>('storeInited');

    this.rows$ = this.store.select('rows') as Observable<number>;

    this.columns$ = this.store.select('columns') as Observable<number>;

    this.data$ = this.store.select('data') as Observable<number[][]>;
  }

  generateData({rows, columns}: {rows: string, columns: string}): void {
    // this.store.dispatch('RowsNumberChanged', Number(rows));
    this.store.dispatch('ColsNumberChanged', Number(columns));

    this.store.dispatch('DataChanged', {
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
