import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  id:string = '';
  lastValueOfUrl:string = '';
  isDashboard:boolean = true;

  @Output() onDelete= new EventEmitter<number>();

  @Input() items:any = [];

  @Input() uiConfig:any = {
    headerTitle: 'items',
    actions: {
      rowId: 'botId'
    },
    tableColumns: [
    ]
  }
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.lastValueOfUrl =window.location.href;
    this.lastValueOfUrl.split('/')[4] === 'dashboard' ? this.isDashboard = true : this.isDashboard = false;
  }
  editPost(id:number) {
    console.log("edit mode");
  }
  delete(id:number) {
    this.onDelete.emit(id);
  }
}
