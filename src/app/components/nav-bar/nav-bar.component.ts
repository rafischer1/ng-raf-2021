import { Component, OnInit } from "@angular/core";
import { ChecklistService } from "../../shared/checklist-container/state/checklist.service";
import { Router } from "@angular/router";
import { LoggerService } from "../../shared/logging-service/logger.service";

@Component({
  selector: "raf-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
})
export class NavBarComponent implements OnInit {
  constructor(
    private checklistService: ChecklistService,
    private router: Router,
    private loggerService: LoggerService
  ) {}

  ngOnInit(): void {}

  openChecklist = () => {
    this.checklistService.open();
    this.loggerService.addLog({
      context: "ChecklistClicked",
      text: "Open checklist",
    });
  };

  navTo(page: string) {
    this.checklistService.close();
    this.router.navigate([`/${page}`]).then((x) => x);
    this.loggerService.addLog({
      context: "Navigate",
      text: "Navigate to: " + page,
    });
  }

  toggleLogger = () => this.loggerService.toggleStore();
}
