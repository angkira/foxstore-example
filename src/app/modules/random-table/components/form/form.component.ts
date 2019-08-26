import { Component, OnInit, ChangeDetectionStrategy, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { distinctUntilChanged, tap, startWith, debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {
  static readonly formModel = {
    columns: [10],
    rows: [100],
  };

  genesisForm: FormGroup;
  @Output() update: Observable<number[]>;

  constructor(fb: FormBuilder) {
    this.genesisForm = fb.group(FormComponent.formModel);
    this.update = this.genesisForm.valueChanges.pipe(
      startWith(this.genesisForm.value),
      distinctUntilChanged(),
      debounceTime(300),
      );
  }

  ngOnInit() {
  }

}
