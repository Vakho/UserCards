import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/types/user.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() user!: User;
  constructor() {}

  ngOnInit(): void {}

  setBackgroundColor(status: string): string {
    switch (status) {
      case 'Active':
        return 'green';
      case 'Inactive':
        return 'blue';
      case 'Deleted':
        return 'red';
      default:
        return 'yellow';
    }
  }
}
