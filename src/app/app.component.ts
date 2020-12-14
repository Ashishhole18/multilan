import { Component, Output, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatCard } from '@angular/material/card'
import { from } from 'rxjs';
import { StarRatingComponent } from 'ng-starrating';
import { EventEmitter } from 'events';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log("a "+this.starCount)
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }
  title = 'DeccanSportClub';
  date:Date=new Date();

   rating=2;
  starCount: number = 5;
  color: string = 'accent';
  ratingUpdated = new EventEmitter();

   snackBarDuration: number = 2000;
   ratingArr = [];
  constructor(public translate:TranslateService,private snackBar: MatSnackBar)
  {

    translate.addLangs(['en','hi','mr','ml']);
    translate.setDefaultLang('en');
    const browserLang=translate.getBrowserLang();
    translate.use(browserLang.match(/en|hi|ml|mr/) ? browserLang : 'en');

  }
  getMembership(){

  }
  onClick(rating:number) {
    console.log(rating)
    this.rating=rating;
    this.snackBar.open('You rated ' + rating + ' / ' + this.starCount, '', {
      duration: this.snackBarDuration
    });
    this.ratingUpdated.emit(rating.toString());
    return false;
  }

  showIcon(index:number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }


}
export enum StarRatingColor {
  primary = "primary",
  accent = "accent",
  warn = "warn"
}
