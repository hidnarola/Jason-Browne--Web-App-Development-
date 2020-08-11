import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Business } from 'src/app/models/business';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.css']
})
export class BusinessListComponent {

  @Input() businesses: Business[];
  @Output() businessSelect = new EventEmitter<Business>();

  constructor() { }

  onCardClick(business: Business): void {
    this.businessSelect.emit(business);
  }

}
