import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-starrating',
  templateUrl: './starrating.component.html',
  styleUrls: ['./starrating.component.css']
})
export class StarratingComponent implements OnInit {

  @Input('rating')  rating: number = 3;
  @Input('starCount')  starCount: number = 5;
  @Input('color')  color: string = 'accent';
  @Output()  ratingUpdated = new EventEmitter();
   snackBarDuration: number = 2000;
   ratingArr = [];
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onClick(rating:number) {
    console.log(rating)
    this.snackBar.open('You rated ' + rating + ' / ' + this.starCount, '', {
      duration: this.snackBarDuration
    });
    this.ratingUpdated.emit(rating);
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
