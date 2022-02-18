import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ApiTheaterService } from "../shared/api.theater.service";
import { EventModel } from "./theater.model";


@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.css']
})
export class TheaterComponent implements OnInit {

  formValue !: FormGroup;
  theaterModelObj : EventModel = new EventModel();
  eventData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  constructor(private formBuilder : FormBuilder,
              private api : ApiTheaterService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      eventType : [''],
      eventName : [''],
      eventPlace : [''],
      date : [''],
      price : [''],
      description : ['']
    })
    this.getAllEvents();
  }

  div1 : boolean = false;

  div1Function() {
    this.div1 = true;
  }



  clickAddEvent() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  postTheaterDetails() {
    this.theaterModelObj.eventType = this.formValue.value.eventType;
    this.theaterModelObj.eventName = this.formValue.value.eventName;
    this.theaterModelObj.eventPlace = this.formValue.value.eventPlace;
    this.theaterModelObj.date = this.formValue.value.date;
    this.theaterModelObj.price = this.formValue.value.price;
    this.theaterModelObj.description = this.formValue.value.description;

    this.api.postEvent(this.theaterModelObj)
      .subscribe(res=>{
        console.log(res);
        alert("Event added successfully")
        let ref = document.getElementById('cancel')
          this.formValue.reset();
        ref?.click();
        this.formValue.reset();
      },
        err=>{
        alert("Something went wrong")
        })
  }
  getAllEvents() {
    this.api.getEvent()
      .subscribe(res=>{
        this.eventData = res;
      })
  }

  deleteEvent(row : any) {
    this.api.deleteEvent(row.id)
      .subscribe(res=>{
        alert("Event deleted");
        this.getAllEvents();
      })
  }

  onEdit(row : any){
    this.showAdd = false;
    this.showUpdate = true;
    this.theaterModelObj.id = row.id;
    this.formValue.controls['eventType'].setValue(row.eventType);
    this.formValue.controls['eventName'].setValue(row.eventName);
    this.formValue.controls['eventPlace'].setValue(row.eventPlace);
    this.formValue.controls['date'].setValue(row.date);
    this.formValue.controls['price'].setValue(row.price);
    this.formValue.controls['description'].setValue(row.description);
  }

  updateEventDetails(){
    this.theaterModelObj.eventType = this.formValue.value.eventType;
    this.theaterModelObj.eventName = this.formValue.value.eventName;
    this.theaterModelObj.eventPlace = this.formValue.value.eventPlace;
    this.theaterModelObj.date = this.formValue.value.date;
    this.theaterModelObj.price = this.formValue.value.price;
    this.theaterModelObj.description = this.formValue.value.description;

    this.api.updateEvent(this.theaterModelObj, this.theaterModelObj.id)
      .subscribe(res=>{
        alert("Update successful!");
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllEvents();
      })
  }




}

