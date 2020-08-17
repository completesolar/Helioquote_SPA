import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCircleComponent } from './components/custom-circle/custom-circle.component';
import { FeedbackCircleComponent } from './components/feedback-circle/feedback-circle.component';
import { SupportDialogComponent } from './components/support-dialog/support-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [CustomCircleComponent, FeedbackCircleComponent, SupportDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  exports: [CustomCircleComponent, FeedbackCircleComponent, SupportDialogComponent]
})
export class SharedModule { }
