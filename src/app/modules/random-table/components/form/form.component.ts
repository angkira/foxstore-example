import { ChangeDetectionStrategy, Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';

type FormModel = {
    columns: number,
    rows: number,
}

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
  @Output() update: Observable<FormModel>;
  @Output() updateRows: Observable<number>;
  @Output() updateColumns: Observable<number>;

  constructor(fb: FormBuilder) {
    this.genesisForm = fb.group(FormComponent.formModel);
    this.update = this.genesisForm.valueChanges.pipe(
      startWith(this.genesisForm.value),
      distinctUntilChanged(),
      debounceTime(300),
    );

    this.updateRows = this.update.pipe(
      map(m => m.rows),
      distinctUntilChanged(),
    );

    this.updateColumns = this.update.pipe(
      map(m => m.columns),
      distinctUntilChanged(),
    );
  }

  ngOnInit() {
  }

}
