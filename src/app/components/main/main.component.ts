import { Component } from "@angular/core";
import { LoggerQuery } from "../../shared/logging-service/logger.query";
import { BehaviorSubject } from "rxjs";
import { UntilDestroy } from "@ngneat/until-destroy";
import { LoggerService } from "../../shared/logging-service/logger.service";

@UntilDestroy()
@Component({
  selector: "raf-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent {
  // Assignment automatic on component init lifecycle
  loggerActive$ = this.loggerQuery.select((state) => state.active).pipe();
  contactGraphLocked = new BehaviorSubject<boolean>(false);
  contactGraphClosed = new BehaviorSubject<boolean>(false);
  contactLinksLocked = new BehaviorSubject<boolean>(false);
  contactLinksClosed = new BehaviorSubject<boolean>(false);
  contactInfoLocked = new BehaviorSubject<boolean>(false);
  contactInfoClosed = new BehaviorSubject<boolean>(false);

  constructor(
    private loggerQuery: LoggerQuery,
    private loggerService: LoggerService
  ) {}

  logComponentEnter = (name: string) =>
    this.loggerService.addLog({
      context: "ComponentActive",
      text: `${name.toUpperCase()} drag active`,
    });

  lock(type: "skills" | "info" | "links") {
    switch (type) {
      case "skills":
        this.contactGraphLocked.next(!this.contactGraphLocked.getValue());
        break;
      case "links":
        this.contactLinksLocked.next(!this.contactLinksLocked.getValue());
        break;
      case "info":
        this.contactInfoLocked.next(!this.contactInfoLocked.getValue());
    }
  }

  close(type: "skills" | "info" | "links") {
    switch (type) {
      case "skills":
        this.contactGraphClosed.next(!this.contactGraphClosed.getValue());
        break;
      case "links":
        this.contactLinksClosed.next(!this.contactLinksClosed.getValue());
        break;
      case "info":
        this.contactInfoClosed.next(!this.contactInfoClosed.getValue());
    }
  }
}
