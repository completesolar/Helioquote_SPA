import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { SupportDialogComponent } from '../support-dialog/support-dialog.component';

@Component({
  selector: 'app-feedback-circle',
  templateUrl: './feedback-circle.component.html',
  styleUrls: ['./feedback-circle.component.scss']
})
export class FeedbackCircleComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
