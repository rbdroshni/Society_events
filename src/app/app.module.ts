import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { CommonFormComponent } from './common-form/common-form.component';
import { EventManagementComponent } from './event-management/event-management.component';

const routes : Routes =[
  {path : ' ' ,component : HeaderComponent},
  {path : 'admin-dashboard' ,component : AdminDashboardComponent},
  {path : 'user-dashboard' ,component : UserDashboardComponent},
  {path:'common-form', component:CommonFormComponent},
  {path:'event-management', component:EventManagementComponent}

]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    CommonFormComponent,
    EventManagementComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
