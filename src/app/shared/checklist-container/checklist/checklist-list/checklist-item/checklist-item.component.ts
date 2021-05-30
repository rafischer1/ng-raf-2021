import { Component, Input, OnInit } from "@angular/core";
import { ChecklistStatus } from "../../../state/checklist.model";

@Component({
  selector: "raf-checklist-item",
  template: `<div>
    <span>
      <label>
        <input
          class="action"
          (click)="toggleStatus()"
          type="radio"
          [checked]="currentStatus"
        />
      </label>
    </span>
    {{ item.action | titlecase }}:
    <span>{{ currentStatus ? "Yes" : "No" }}</span>
    <div *ngIf="item.description" style="margin-left: 10px">
      {{ item.description }}
    </div>
  </div> `,
})
export class ChecklistItemComponent implements OnInit {
  @Input() item: ChecklistStatus;
  currentStatus: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.currentStatus = this.item.status;
  }

  toggleStatus() {
    this.currentStatus = !this.currentStatus;
  }
}
