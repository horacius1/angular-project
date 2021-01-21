import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FromComponent } from './from/from.component';
import { ListOfUsersComponent } from './list-of-users/list-of-users.component';
import { UserComponent } from './list-of-users/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    FromComponent,
    ListOfUsersComponent,
    UserComponent,
    
    
  ],
  imports: [
    BrowserModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
