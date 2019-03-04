import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor(private fb : FormBuilder) {    
  }


  // registrationForm = new FormGroup({
  //   userName: new FormControl("CHAN"),
  //   password: new FormControl(""),
  //   confirmPassword: new FormControl(""),
  //   address: new FormGroup({
  //     addressLine: new FormControl(""),
  //     city: new FormControl(""),
  //     state: new FormControl(""),
  //     zipCode: new FormControl(12355)
  //   })
  // });

  registrationForm = this.fb.group({
    userName: [],
    password: [],
    confirmPassword: [],
    address: this.fb.group({
      addressLine: [],
      city: [],
      state: [],
      zipCode: [12133]
    })
  });


  ngOnInit() {
  }

  loadFormFields() {
    this.registrationForm.patchValue({
      userName: "asdfgh",
      
      address: {
        addressLine: "1234567",
        city: "fghj",
        state: "fghjk",
        zipCode: 34567
      }
    })
  }

}
