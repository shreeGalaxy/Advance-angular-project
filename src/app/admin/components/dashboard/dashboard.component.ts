import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayGif: boolean=true;
  date: string= '2022-08-29T06:06:16.110Z';
  constructor() { console.log("AppComponent:Constructor"); }

  toggle() {
    this.displayGif=!this.displayGif;
  }

  ngOnInit(): void {
    console.log("Component:OnInit");
  }
  ngDoCheck() {
    console.log("AppComponent:DoCheck");
  }
 
   ngAfterContentInit() {
    console.log("AppComponent:AfterContentInit");
  }
 
  ngAfterContentChecked() {
    console.log("AppComponent:AfterContentChecked");
  }
 
  ngAfterViewInit() {
    console.log("AppComponent:AfterViewInit");
  }
 
  ngAfterViewChecked() {
    console.log("AppComponent:AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("AppComponent:OnDestroy");
  }
}
