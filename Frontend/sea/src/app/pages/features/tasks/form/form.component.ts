import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'ng-app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  // ReactiveFormsModule
  // FormControl
  // FormGroup vs FormBuilder 
  // FormBuilder vs FormArray


  name = new FormControl('');

  public hobbies = ['running', 'swimming', 'freediving', 'yoga'];

  private fb = inject(FormBuilder);

  // form = new FormGroup({
  //   firstName: new FormControl(''),
  //   secondName: new FormControl(''),
  //   birthDate: new FormControl(''),
  //   age: new FormControl(0),
  //   married: new FormControl(false),
  //   hobbiesMultiSelect: new FormControl([]),
  // });

  formNew = this.fb.group({
    firstName: ['', Validators.required],
    secondName: [''],
    birthDate: [''],
    age: [0],
    married: [false],
    hobbiesMultiSelect: [this.hobbies],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.fb.array([this.fb.control('')])
  });

  get aliases() {
    return this.formNew.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    console.warn(this.formNew.value);
  }
}
