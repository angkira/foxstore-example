import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { StoreService } from '../../store.service';

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

  constructor(public store: StoreService) {
    // super();
   }

  ngOnInit() {
    this.store.dispatch('storeInited');
    this.store.dispatch('hui')

    this.rows$ = this.store.select('rows');

    this.columns$ = this.store.select('columns');

    this.data$ = this.store.select('data');
  }

  updateRows(rows: string): StoreService{
      return this.store.dispatch('RowsNumberChanged', Number(rows));
  }

  updateCols(cols: string): StoreService{
      return this.store.dispatch('ColsNumberChanged', Number(cols));
  }

  generateData({rows, columns}: {rows: string, columns: string}): void {
    this.store.dispatch('DataChanged');
  }

  updateData(e) {
    this.store.dispatch('UpdateData');
  }
}
