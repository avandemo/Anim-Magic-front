import { FormatTypeService } from './../../services/formatType/format-type.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-format-type',
  templateUrl: './format-type.component.html',
  styleUrls: ['./format-type.component.css']
})
export class FormatTypeComponent implements OnInit {

  form: FormGroup;

  label: FormControl;

  constructor(private formBuilder: FormBuilder, private formatTypeService: FormatTypeService) { }

  ngOnInit(): void {

    this.label = new FormControl(null, [
      Validators.required
    ]);

    this.form = this.formBuilder.group({
      label: this.label
    });
  }

  controlLabel(): string {
    if (this.label.touched) {
      if (this.label.getError('required')) {
        return 'Le libellé est obligatoire';
      }
      return null;
    }
  }

  createFormatType(formatTypeData): void {

    for (const key in this.form.controls) {
      if (this.form.contains(key)) {
        this.form.get(key).markAsTouched();
        this.form.get(key).markAsDirty();
      }
    }

    if (this.form.valid) {
      this.formatTypeService.addFormatType(formatTypeData).subscribe();
      this.form.reset();
    }
  }

}
