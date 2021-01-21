import { Component, Input, OnInit } from '@angular/core';
import {userForm} from '../../shared/shared.component'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
@Input() user:userForm;
  constructor() { }

  ngOnInit(): void {
  }

}
