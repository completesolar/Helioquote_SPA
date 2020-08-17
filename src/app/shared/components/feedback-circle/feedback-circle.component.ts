import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { SupportDialogComponent } from '../support-dialog/support-dialog.component';

@Component({
  selector: 'app-feedback-circle',
  templateUrl: './feedback-circle.component.html',
  styleUrls: ['./feedback-circle.component.scss']
})
export class FeedbackCircleComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openSupportDialog(): void {
    const dialogRef = this.dialog.open(SupportDialogComponent);

    dialogRef.afterClosed().subscribe(result => console.log(`result of dialog is ${result}`));
  }

}
