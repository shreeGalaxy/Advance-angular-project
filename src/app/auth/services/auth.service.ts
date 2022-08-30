import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import api from 'src/app/shared/config/api';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any= null;
  constructor(private http: HttpClient, private router: Router) { 
    this.userData = localStorage.getItem('userData') || "{}";
    this.userData = JSON.parse(this.userData);
  }
  login(body: any) {
    return this.http.post(api.auth.login,body).pipe(
      tap((res)=> {
        localStorage.setItem("userData", JSON.stringify(res));
        this.userData = res;
      })
    )
  }

  signup(body: any) {
    return this.http.post(api.auth.signup,body)
  }
  
  logout() {
    this.userData = {};
    localStorage.setItem('userData', "{}");
    this.router.navigateByUrl('auth/login');
  }
}
