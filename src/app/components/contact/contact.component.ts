import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  input:any= FormGroup;

  constructor (private fill:FormBuilder) {}

  ngOnInit(): void {
    this.input=this.fill.group({
      FullName: ['',[Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z]*$')]],
      phoneNumber: ['',
        [Validators.required, Validators.pattern('^[6-9]{1}[0-9]{9}$')]
      ],
      email: ['',
        [Validators.required, Validators.email]
      ],
      message: ['',
        [Validators.required, Validators.minLength(5)]
      ],
    });
  }

  button() {
    if (this.input.valid) {
      console.log('Form Submitted', this.input.value);
    } else {
      console.log('Form is invalid');
    }
  }

  get FullName() {
    return this.input.get('FullName');
  }

  get phoneNumber() {
    return this.input.get('phoneNumber');
  }

  get email() {
    return this.input.get('email');
  }
  get message() {
    return this.input.get('message');
  }
  delete(){
    this.input.reset();
  }

generateCaptcha() {
  alert("New Captcha Generated! (Simulated)");
}
}
