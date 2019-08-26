import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ProtoStore } from 'foxstore';

@Component({
  selector: 'app-random-table',
  templateUrl: './random-table.component.html',
  styleUrls: ['./random-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RandomTableComponent extends ProtoStore<{
  rows: number;
  columns: number;
  data: number[][];
}> implements OnInit {

  constructor() {
    super({
      rows: 10,
      columns: 10,
      data: null,
    });
   }

  ngOnInit() {
    this.select().subscribe(console.log);
  }

  generateData({rows, columns}: {rows: string, columns: string}): void {
    this.patch({
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
