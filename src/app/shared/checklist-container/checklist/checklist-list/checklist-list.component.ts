import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ChecklistStatus } from "../../state/checklist.model";

@Component({
  selector: "raf-checklist-list",
  templateUrl: "./checklist-list.component.html",
  styleUrls: ["./checklist-list.component.scss"],
})
export class ChecklistListComponent implements OnInit {
  @Input() title: string = "";
  @Input() list: ChecklistStatus[] = [];
  @Input() groupIndex: number = 0;

  @Output() update: EventEmitter<ChecklistStatus[]> = new EventEmitter<
    ChecklistStatus[]
  >();
  constructor() {}

  ngOnInit(): void {}

  toggleStatus(index: number, status: boolean) {
    const newList = [...this.list];
    !newList[index].status;
    this.update.emit(newList);
  }
}
