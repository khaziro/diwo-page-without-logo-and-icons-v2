import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
DatePipe;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  currentDate = new Date();

  constructor() {}

  ngOnInit(): void {}
}
