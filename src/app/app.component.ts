import { Component } from '@angular/core';
import { isNumber } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-nic-validator';

  nic: string;
  message: string;
  year: string;
  month: string;
  day: any;
  gender: string;
  date: number;

  validateNic(){
    if(this.nic.length != 10 && this.nic.length != 12){
      this.message = 'Invalid length';
    }
    else if(this.nic.length == 10 && this.nic.substr(9,9)!='v' ){
      this.message = 'correct ID';
    }
    else{
      //Getting year
      if(this.nic.length == 10){
        this.year = '19'+this.nic.substr(0,2);
        this.date = parseInt(this.nic.substr(2,3));
      }else{
        this.year = this.nic.substr(0,4);
        this.date = parseInt(this.nic.substr(4,3));
      }
      
      //Gender
      if(this.date > 500){
        this.gender = 'Female';
        this.date = this.date - 500; 
      }
      else{
        this.gender = 'Male';
      }

      //Validate date digit
      if(this.date < 1 && this.date > 366){
        this.message = "Invalid ID number";
      }

      //Month
      if (this.date > 335) {
        this.day = this.date - 335;
        this.month = "December";
      }
      else if (this.date > 305) {
          this.day = this.date - 305;
          this.month = "November";
      }
      else if (this.date > 274) {
          this.day = this.date - 274;
          this.month = "October";
      }
      else if (this.date > 244) {
        this.day = this.date - 244;
          this.month = "September";
      }
      else if (this.date > 213) {
        this.day = this.date - 213;
          this.month = "Auguest";
      }
      else if (this.date > 182) {
        this.day = this.date - 182;
          this.month = "July";
      }
      else if (this.date > 152) {
        this.day = this.date - 152;
          this.month = "June";
      }
      else if (this.date > 121) {
        this.day = this.date - 121;
          this.month = "May";
      }
      else if (this.date > 91) {
        this.day = this.date - 91;
          this.month = "April";
      }
      else if (this.date > 60) {
        this.day = this.date - 60;
          this.month = "March";
      }
      else if (this.date < 32) {
        this.month = "January";
        this.day = this.date;
      }
      else if (this.date > 31) {
        this.day = this.date - 31;
          this.month = "Febuary";
      }
    }
  }
}
