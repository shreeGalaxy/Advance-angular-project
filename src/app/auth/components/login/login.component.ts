import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
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
      "username": this.loginForm.value.email,
      "password": this.loginForm.value.password,
    }
    let url: string= 'auth/login';
    this.authService.login(req).subscribe({
      next: (response) => {
        this.router.navigateByUrl('/admin')
      },
      error: (error) => {
        console.log("error in Login", error);
      }
    }) 
  }
}
