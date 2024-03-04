import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EventService } from '../event.service';
import { MatDialog } from '@angular/material/dialog';
import { EventDetailsPopupComponent } from '../event-details/event-details.component';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TimelineComponent implements OnInit {
  events: Array<any> = [];
  originalEventsList: Array<any> = [];
  selectedTabIndex = 1;
  showCard = false;
  selectedEvent: any;
  constructor(
    private eventService: EventService,
    private dialog: MatDialog,
  ) {}

  onSearchChange(value: any): void {
    if (value?.data) {
      const findValue = this.originalEventsList.filter((x) =>
        x.Name.toLowerCase().includes(value?.data.toLowerCase()),
      );
      if (findValue?.length > 0) {
        this.events = [...findValue];
      } else {
        this.events = this.originalEventsList;
      }
    }
  }

  tabClick(event: any, data: any): void {
    this.selectedEvent = data;
    this.showCard = true;
    this.selectedTabIndex = data.Id;
  }

  cardClick(): void {
    const dialogRef = this.dialog.open(EventDetailsPopupComponent, {
      data: this.selectedEvent,
      width: 'auto',
      height: 'auto',
      panelClass: 'event-details-popup',
      hasBackdrop: true,
    });
  }

  ngOnInit(): void {
    this.events = this.eventService.getEventsList();
    this.originalEventsList = [...this.events];
    console.log(this.events);
  }
}
