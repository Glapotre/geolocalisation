import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-data-add',
  templateUrl: './data-add.component.html',
  styleUrls: ['./data-add.component.css']
})
export class DataAddComponent implements OnInit {

  userForm: FormGroup
  constructor() { }

  ngOnInit() {
   this.userForm = new FormGroup({
      show: new FormControl(),

      number: new FormControl(''),
      lat: new FormControl(''),
      lng: new FormControl(''),
    });
  }
  onFormSubmit(): void {
    //console.log(this.userForm);

    console.log('Name:' + this.userForm.get('show').value);
  }
  //resetUserForm(NgForm) { this.userForm.resetForm(); }

}