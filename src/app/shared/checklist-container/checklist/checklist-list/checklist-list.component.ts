import { Component, Input, OnInit } from "@angular/core";
import { ChecklistStatus } from "../../state/checklist.model";

@Component({
  selector: "raf-checklist-list",
  template: `<h3>{{ title | titlecase }}</h3>
    <div *ngFor="let item of list">
      <raf-checklist-item [item]="item"></raf-checklist-item>
    </div>`,
  styleUrls: ["./checklist-list.component.scss"],
})
export class ChecklistListComponent implements OnInit {
  @Input() title: string = "";
  @Input() list: ChecklistStatus[] = [];
  @Input() groupIndex: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
