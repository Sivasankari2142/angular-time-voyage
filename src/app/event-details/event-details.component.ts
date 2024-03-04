import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-event-details-popup',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsPopupComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EventDetailsPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
  closeMenu(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {}
}
