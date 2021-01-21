import { Component,EventEmitter, Output } from '@angular/core';
import { userForm } from './shared/shared.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
featureSelect=""
users=[]



forms:userForm[]=[]

userresiver($event){

 this.forms.push($event)
}
onSelect(feature:string){
  this.featureSelect=feature

}

}
