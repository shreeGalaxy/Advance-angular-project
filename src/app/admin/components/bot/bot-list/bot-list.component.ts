import { Component, OnInit } from '@angular/core';
import { BotService } from 'src/app/admin/services/bot.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-bot-list',
  templateUrl: './bot-list.component.html',
  styleUrls: ['./bot-list.component.scss']
})
export class BotListComponent implements OnInit {

  uiConfig:any = {
    headerTitle: 'Bot',
    actions: {
      rowId: 'botId'
    },
    tableColumns: [
      {
        'title': "#",
        'columnName': 'botId'
      },
      {
        'title': "Name",
        'columnName': 'name'
      },
      {
        'title': "Who's Created",
        'columnName': 'createdBy'
      },
      {
        'title': "Date",
        'columnName': 'createdAt'
      }
    ]
  }
  bots:any = [];
  constructor(private botService: BotService) { }

  ngOnInit(): void {
    this.getBotData();
  }
  getBotData() {
    this.botService.getBotData().subscribe({
      next: (resp:any) => { this.bots = resp; },
      error: (err:any) => { console.log("error is=>", err); }
    });
  }
  delete(id:number) {
    console.log("Id", id);
    this.botService.deleteBotData(id).subscribe({
      next: (resp:any) => { this.getBotData(); },
      error: (err:any) => { console.log("error is=>", err); }
    });
  }
}
