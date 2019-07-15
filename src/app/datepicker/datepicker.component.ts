import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  localeString: string = 'en';
  //viewDate : any;
  navDate : any;

  constructor() { 
  }

  ngOnInit() {
    moment.locale(this.localeString);
    //this.viewDate=moment();
    this.navDate=moment();
  }

  //changeViewDate(num, datePart){
    changeNavMonth(num: number){
    //this.viewDate.add(num, datePart);
    //if(this.canChange(this.viewDate, num, datePart)){
      if(this.canChangeNavMonth(num))
      //this.viewDate.add(num, datePart);
      this.navDate.add(num, 'month');
    //}
  }

  //canChange(dateToCheck, num, datePart){
  canChangeNavMonth(num: number){
    //const clonedDate = moment(dateToCheck);
    const clonedDate = moment(this.navDate);
    //clonedDate.add(num, datePart);
    clonedDate.add(num,'month');
    const minDate = moment().add(-1, 'month');
    const maxDate = moment().add(1, 'year');

    return clonedDate.isBetween(minDate, maxDate);
  }

}
