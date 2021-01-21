import { Component, OnInit,EventEmitter, Input, AfterContentInit ,AfterViewInit,Output} from '@angular/core';
import {  FormControl, FormGroup, NgForm, Validators ,} from '@angular/forms';
import { stderr } from 'process';

import {userForm } from '../shared/shared.component';
@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent implements OnInit {
signupForm:FormGroup;
@Output() useradd= new EventEmitter()






  constructor() { }

  ngOnInit() {
    this.signupForm= new FormGroup({
      'Email':new FormControl(' ', Validators.email),
      'password':new FormControl(' ',[Validators.minLength(7),Validators.pattern(/^[a-zA-Z0-9]+$/)]),
      'confirmPassword':new FormControl(' ',[Validators.minLength(7),Validators.pattern(/^[a-zA-Z0-9]+$/)]),
      'nickname':new FormControl(' ',[Validators.required,Validators.pattern(/^[a-zA-Z0-9,-]+$/)]),
      'phone':new FormControl(' '),
      'website':new FormControl(' ',[Validators.required,Validators.pattern(/(https?:\/\/)?[\w\-~]+(\.[\w\-~]+)+(\/[\w\-~]*)*(#[\w\-]*)?(\?.*)?/)]),
      'checkbox':new FormControl(null,Validators.required)

    })
  }
  getEmail() {
    return this.signupForm.get('Email');
  }
  getPassword() {
    return this.signupForm.get('password');
  }
  getPasswordConf() {
    return this.signupForm.get('confirmPassword');
  }
  getNickname() {
    return this.signupForm.get('nickname');
  }
  getPhone() {
    return this.signupForm.get('phone');
  }
  getUrl() {
    return this.signupForm.get('website');
  }

  onSubmit(form:NgForm){
    if(this.signupForm.status!='VALID'){
      alert('inputs are incorrect')

    }
    else{
    const val=form.value;
    const newform  = new userForm (val.Email,val.password,val.nickname,val.phone,val.website)
    this.useradd.emit(
      {
        email: this.getEmail().value,
        nickname: this.getNickname().value,
        password: this.getPassword().value,
        phone: this.getPhone().value,
        website: this.getUrl().value
      }

    )

    this.signupForm.reset();

    }
  }




// singleUser= new userForm(this.email,this.password,this.nickname,this.phone,this.website)




  disabled (){
    if( this.signupForm.value.password!==this.signupForm.value.confirmPassword ||this.signupForm.value.checkbox=== null || this.signupForm.value.checkbox === false ){
      return true
  }
  }
}
