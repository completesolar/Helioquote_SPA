import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCircleComponent } from './components/custom-circle/custom-circle.component';
import { FeedbackCircleComponent } from './components/feedback-circle/feedback-circle.component';
import { SupportDialogComponent } from './components/support-dialog/support-dialog.component';

@NgModule({
  declarations: [CustomCircleComponent, FeedbackCircleComponent, SupportDialogComponent],
  imports: [
    CommonModule
  ],
  exports: [CustomCircleComponent, FeedbackCircleComponent]
})
export class SharedModule { }
