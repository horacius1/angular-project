import { Component, Input, OnInit } from '@angular/core';
import { userForm } from '../shared/shared.component';

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.scss']
})
export class ListOfUsersComponent implements OnInit {
   @Input() users:userForm[]=[]

  constructor() { }

  ngOnInit(): void {
  }


}
