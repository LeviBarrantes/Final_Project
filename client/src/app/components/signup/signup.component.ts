import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  isLoading = false;
  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
  }
  constructor() { }
  ngOnInit(): void {
  }

}
