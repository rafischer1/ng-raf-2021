import { Component, OnInit } from "@angular/core";
import { ChecklistService } from "../../shared/checklist-container/state/checklist.service";

@Component({
  selector: "raf-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  constructor(private checklistService: ChecklistService) {}

  ngOnInit(): void {}

  openChecklist = () => this.checklistService.open();
}
