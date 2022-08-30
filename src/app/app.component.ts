import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'advance';
  langauges = [
    {
      id: 'en',
      name: 'English'
    },
    {
      id: 'fr',
      name: 'French'
    },
    {
      id: 'ta',
      name: 'Tamil'
    },
    {
      id: 'zh',
      name: 'Chiness'
    }
  ];
  languageForm = this.fb.group({
    langName: ['', [Validators.required]]
  })
  constructor(private translate: TranslateService, public fb: FormBuilder) {
    translate.setDefaultLang('en');
  }
  
  useLanguage(language: string) {
    this.translate.use(language);
  }

  changeLanguage() {
    let langaugeName:any = this.languageForm.value.langName;
    this.useLanguage(langaugeName);
  }
}
