import { Component, OnInit } from "@angular/core";
import { ChecklistService } from "../../shared/checklist-container/state/checklist.service";
import { Router } from "@angular/router";

@Component({
  selector: "raf-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
})
export class NavBarComponent implements OnInit {
  constructor(
    private checklistService: ChecklistService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  openChecklist = () => this.checklistService.open();

  navTo(page: string) {
    this.router
      .navigate([`/${page}`])
      .then((x) => console.log("Navigate to: ", page));
  }
}
