import { Component, OnInit } from "@angular/core";
import { ChecklistService } from "../../shared/checklist-container/state/checklist.service";

@Component({
  selector: "raf-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
})
export class NavBarComponent implements OnInit {
  constructor(private checklistService: ChecklistService) {}

  ngOnInit(): void {}

  openChecklist = () => this.checklistService.open();
}
