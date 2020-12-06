import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DeccanSportClub';
  constructor(public translate:TranslateService)
  {

    translate.addLangs(['en','hi','mr','ml']);
    translate.setDefaultLang('en');
    const browserLang=translate.getBrowserLang();
    translate.use(browserLang.match(/en|hi|ml|mr/) ? browserLang : 'en');
  }
}
