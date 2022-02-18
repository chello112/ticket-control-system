import { Component, OnInit } from '@angular/core';
import { ApiAllEventsService } from "../shared/api.all-events.service";


@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit {

  eventData !: any;

  constructor(private api : ApiAllEventsService) {
  }

  ngOnInit(): void { }

  div1 : boolean = false;

  div1Function() {
    this.div1 = true;
  }

  getAllEvents() {
    this.api.getEvent()
      .subscribe(res=>{
        this.eventData = res;
      })
  }



}
