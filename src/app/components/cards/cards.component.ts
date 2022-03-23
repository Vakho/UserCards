import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/types/user.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  users: User[] = [];

  constructor(private commentService: UsersService) {}

  ngOnInit(): void {
    this.commentService.getUsers().subscribe((users) => (this.users = users));
  }
}
