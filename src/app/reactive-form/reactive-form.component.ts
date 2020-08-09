import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  public profileForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  public onSubmit() {
    console.log('onSubmit');
    // console.log(this.profileForm);
    console.log('name = ' + this.profileForm.controls.name.value);
    console.log('age = ' + this.profileForm.controls.age.value);
  }
}
