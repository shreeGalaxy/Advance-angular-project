import { Component, OnInit } from '@angular/core';
import { FaqService } from 'src/app/admin/services/faq.service';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.scss']
})
export class FaqListComponent implements OnInit {
  faq:any= [];
  uiConfig:any = {
    headerTitle: 'FAQs',
    actions: {
      rowId: 'FaqId'
    },
    tableColumns: [
      {
        'title': "#",
        'columnName': 'id'
      },
      {
        'title': "Bot-id",
        'columnName': 'botId'
      },
      {
        'title': "Question",
        'columnName': 'question'
      },
      {
        'title': "Answer",
        'columnName': 'answer'
      },
      {
        'title': "Date",
        'columnName': 'createdAt'
      }
    ]
  }
  constructor(private faqService: FaqService) { }

  ngOnInit(): void {
    this.getFaqData();
  }
  getFaqData() {
    this.faqService.getFaqData().subscribe({
      next: (resp:any) => { this.faq = resp; },
      error: (err:any) => { console.log("error is=>", err); }
    });
  }
  delete(id:number) {
    console.log("Id", id);
    this.faqService.deleteFaqData(id).subscribe({
      next: (resp:any) => { this.getFaqData(); },
      error: (err:any) => { console.log("error is=>", err); }
    });
  }

}
