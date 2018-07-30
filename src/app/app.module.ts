import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { CommonFormComponent } from './common-form/common-form.component';
import { EventManagementComponent } from './event-management/event-management.component';
import { AdminPersonalFormComponent } from './admin-personal-form/admin-personal-form.component';
import { OwnerEventFormComponent } from './owner-event-form/owner-event-form.component';

const routes : Routes =[
  {path : ' ' ,component : HeaderComponent},
  {path : 'admin-dashboard' ,component : AdminDashboardComponent},
  {path : 'user-dashboard' ,component : UserDashboardComponent},
  {path:'common-form', component:CommonFormComponent},
  {path:'event-management', component:EventManagementComponent},
  {path:'admin-personal-form', component:AdminPersonalFormComponent},
  {path:'owner-event-form', component:OwnerEventFormComponent}

]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    CommonFormComponent,
    EventManagementComponent,
    AdminPersonalFormComponent,
    OwnerEventFormComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
