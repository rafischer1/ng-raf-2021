import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ChecklistObject, ChecklistStatus } from "../state/checklist.model";
import { ChecklistService } from "../state/checklist.service";
import { ChecklistQuery } from "../state/checklist.query";
import { map } from "rxjs/operators";

@Component({
  selector: "raf-checklist",
  templateUrl: "./checklist.component.html",
  styleUrls: ["./checklist.component.scss"],
})
export class ChecklistComponent implements OnInit {
  @Input() checklist: ChecklistObject[] | null | undefined;
  @Output() destroy: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private service: ChecklistService,
    private query: ChecklistQuery
  ) {}
  ngOnInit(): void {}

  updateChecklist(
    newList: ChecklistStatus[],
    groupIndex: number,
    title: string
  ) {
    this.query
      .select((state) => state.checklist)
      .subscribe((cl) => {
        console.log("in here");
        cl[groupIndex][title] = newList;
        this.service.updateListItem(cl);
      });
  }
}
