import { Component, OnInit } from '@angular/core';

import { StoreService } from './../../store.service';

@Component({
  selector: 'app-eventer',
  templateUrl: './eventer.component.html',
  styleUrls: ['./eventer.component.scss']
})
export class EventerComponent implements OnInit {
  readonly events = [
    'First',
    'Second',
    'Third',
  ]

  constructor(public store: StoreService) { }

  ngOnInit(): void {
  }

}
