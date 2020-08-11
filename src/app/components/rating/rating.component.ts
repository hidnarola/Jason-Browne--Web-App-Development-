// This star rating component is adapted from
// https://medium.com/better-programming/how-to-create-a-star-rating-component-in-angular-ff32234ea531

import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  template: `
    <div class="rating" data-jest="stars">
      <div *ngIf="rating >= 0; then showStars else showMissing"></div>
        <ng-template #showStars>
        <span *ngFor="let fullStar of fullStars; index as i" class="fa fa-star checked"
        (click)="FullStarClick(i)" style="margin: 0px 6px 0px 2px;"
        data-jest="full star"><mat-icon aria-hidden="false">star</mat-icon></span>
        <span *ngIf="hasAnHalfStar" class="fa fa-star-half-empty"
        style="margin: 0px 6px 0px 2px;"
        data-jest="half star"><mat-icon aria-hidden="false">star_half</mat-icon></span>
        <span *ngFor="let emptyStar of emptyStars; index as j" class="fa fa-star-o"
        (click)="EmptyStarClick(j)" style="margin: 0px 6px 0px 2px;"
        data-jest="empty star"><mat-icon aria-hidden="false">star_border</mat-icon></span>
        </ng-template>
        <ng-template #showMissing>
        ?
        </ng-template>
    </div>
  `,
  styles: [`
    .fa-star, .fa-star-half-empty, .fa-star-o {
      color: orange;
    }
    .rating {
      min-width: 100px;
      display: inline-block;
    }
  `]
})
export class RatingComponent implements OnInit {
  private readonly MAX_NUMBER_OF_STARS = 5;

  @Input() rating;
  @Output() ratingChange = new EventEmitter<number>();
  @Input() edit = false;

  emptystars = 5;

  ngOnInit(): void {
    // Use -1 to indicate that a rating is missing
    // If a rating is missing, we will show a ?, rather than empty stars
    if (this.rating == null) {
      this.rating = -1;
      return;
    }
    this.emptystars = this.MAX_NUMBER_OF_STARS - this.rating;
  }

  private get numberOfFullStars(): number {
    return Math.floor(this.rating);
  }

  private get numberOfEmptyStars(): number {
    return this.MAX_NUMBER_OF_STARS - Math.ceil(this.rating);
  }

  get fullStars(): any[] {
    return Array(this.numberOfFullStars);
  }

  get emptyStars(): any[] {
    return Array(this.numberOfEmptyStars);
  }

  get hasAnHalfStar(): boolean {
    return this.rating % 1 !== 0;
  }

  FullStarClick(i: number): void {
    if (!this.edit) {
      return;
    }
    this.rating = i + 1;
    this.emptystars = this.MAX_NUMBER_OF_STARS - this.rating;
    this.ratingChange.emit(this.rating);
  }

  EmptyStarClick(j: number): void {
    if (!this.edit) {
      return;
    }
    const fullstars = this.MAX_NUMBER_OF_STARS - this.emptystars;
    this.rating = fullstars + j + 1;
    this.emptystars = this.MAX_NUMBER_OF_STARS - this.rating;
    this.ratingChange.emit(this.rating);
  }
}
