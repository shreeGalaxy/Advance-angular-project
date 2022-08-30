import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import apis  from '../../shared/config/api';
@Injectable({
  providedIn: 'root'
})
export class BotService {
  header: any;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.header= {
      'Authorization': 'Bearer ' + this.authService.userData.access_token,
      'Content-Type': 'application/json',
      'accept': '*/*', 
    }
   }
  getBotData() {
    return this.http.get(apis.admin.bot, {headers: this.header});
  }
  getBotDataOld() {
    return this.http.get(apis.admin.bot, {headers: this.header}).pipe(tap((res:any) => {
      res[0].createdAt= this.formatDate(res[0].createdAt)
    }));
  }
  deleteBotData(id:number) {
    return this.http.delete(apis.admin.bot+'/'+id, {headers: this.header});
  }
  formatDate(date: any) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
  
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
  
    return [year, month, day].join('-');
  }
}

