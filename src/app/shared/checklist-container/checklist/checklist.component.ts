import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ChecklistObject, ChecklistStatus } from "../state/checklist.model";
import { ChecklistService } from "../state/checklist.service";
import { ChecklistQuery } from "../state/checklist.query";
import { NgFormsManager } from "@ngneat/forms-manager";

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
    private query: ChecklistQuery,
    private formsManager: NgFormsManager
  ) {}
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    // ! make the form!
    // go through each key title.action with the status as the val
    // when the form updates - "formChanges" submit the whole thing back together as a new checklist...
    // read from the form value in the list list container....
  }

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
