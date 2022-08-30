import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  errMsg: string = '';
  registrationForm = this.fb.group({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  
  constructor(
    private fb: FormBuilder,
    private router: Router, 
    private route: ActivatedRoute,
    private authService: AuthService
   ) { }


  ngOnInit(): void {
  }


  onSubmit() {
    let req = {
      "name": this.registrationForm.value.name,
      "email": this.registrationForm.value.email,
      "password": this.registrationForm.value.password,
      "cpassword": this.registrationForm.value.password
    }
    this.authService.signup(req).subscribe({
      next:(response) => {
        console.log("response",response);
        this.router.navigate(['auth/login']);
      },
      error:(err) => {
        console.log("error", err.error.message);
        this.errMsg = err.error.message;
        return err;
      }
    }); 
  }

}
