import { Component, Input, OnInit } from "@angular/core";
import { ChecklistStatus } from "../../../state/checklist.model";

@Component({
  selector: "raf-checklist-item",
  templateUrl: "./checklist-item.component.html",
  styleUrls: ["./checklist-item.component.scss"],
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
