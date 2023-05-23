import { Component } from "@angular/core";
import { ChecklistService } from "../../shared/checklist-container/state/checklist.service";
import { Router } from "@angular/router";
import { LoggerService } from "../../shared/logging-service/logger.service";
import { TranslocoService } from "@ngneat/transloco";

@Component({
    selector: "raf-nav-bar",
    templateUrl: "./nav-bar.component.html",
    styleUrls: ["./nav-bar.component.scss"],
    standalone: true,
})
export class NavBarComponent {
  constructor(
    private checklistService: ChecklistService,
    private router: Router,
    private loggerService: LoggerService,
    private translate: TranslocoService
  ) {}

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
      text: this.translate
        .translate(`nav.${page.length > 0 ? page : "home"}`)
        .toUpperCase(),
    });
  }

  toggleLogger = () => this.loggerService.toggleStore();
}
