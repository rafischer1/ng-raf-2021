import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ChecklistObject } from "../state/checklist.model";

@Component({
  selector: "raf-checklist",
  templateUrl: "./checklist.component.html",
  styleUrls: ["./checklist.component.scss"],
})
export class ChecklistComponent implements OnInit {
  @Input() checklist: ChecklistObject[] | undefined;
  @Output() destroy: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

}
