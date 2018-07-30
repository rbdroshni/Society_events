import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner-event-form',
  templateUrl: './owner-event-form.component.html',
  styleUrls: ['./owner-event-form.component.css']
})
export class OwnerEventFormComponent implements OnInit {

      //Select event type
      commonEvents=["Holi","Diwali","Durga Puja","Dussehra","Christmas","New Year","Independence Day","Republic Day","Janmashtmi","Eid","Baisakhi","Lohri","Makar Sankaranti"];

      //Select society members
      commonMembers=["Ajay Srivastava","Shankar Mahanjan","Sanjay Dutt","Sunil Kumar","Angad Negi"];
    
      //Select hall type
      commonHalls=["Hall 1, Block A","Hall 2, Block B","Hall 3, Block C","Hall 4, Block D"]

  ngOnInit() {
  }

}
