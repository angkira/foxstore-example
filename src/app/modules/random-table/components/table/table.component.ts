import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
  @Input() rows: number;
  @Input() columns: number;

  @Input() data: number[][];
  constructor() { }

  ngOnInit() {
  }

  getLetterFromNumber(num: number): string {
    return String.fromCharCode(65 + num);
  }

}
