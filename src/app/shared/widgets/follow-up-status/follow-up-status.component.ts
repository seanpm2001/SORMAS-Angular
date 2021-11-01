import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FollowUpStatus } from '../../../_models/followUpStatus';
import { FormActionsService } from '../../../_services/form-actions.service';
import { FormElementBase } from '../../dynamic-form/types/form-element-base';

@Component({
  selector: 'app-follow-up-status',
  templateUrl: './follow-up-status.component.html',
  styleUrls: ['./follow-up-status.component.scss'],
})
export class FollowUpStatusComponent implements OnInit, OnDestroy {
  config: FormElementBase<string>;
  group: FormGroup;
  control: any;

  followUpStatus = FollowUpStatus;
  status: string;
  activeFollowUp = false;
  subscriptions: Subscription[] = [];

  constructor(private formActionsService: FormActionsService) {}

  ngOnInit(): void {
    this.control = this.group?.get(this.config.key);
    if (this.control) {
      this.updateStatus(this.control.value);
      this.subscriptions.push(
        this.control.valueChanges.subscribe((val: string) => this.updateStatus(val))
      );
    }
  }

  updateStatus(status: string): void {
    this.status = status;
    this.activeFollowUp = status === this.followUpStatus.FOLLOW_UP;
  }

  setStatus(status: string): void {
    this.control?.setValue(status);
    this.formActionsService.setInputChange(this.config.key, true);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
