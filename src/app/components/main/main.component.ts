import { Component, OnInit } from "@angular/core";
import { LoggerQuery } from "../../shared/logging-service/logger.query";
import { BehaviorSubject, Observable } from "rxjs";
import { UntilDestroy } from "@ngneat/until-destroy";
import { LoggerService } from "../../shared/logging-service/logger.service";

@UntilDestroy()
@Component({
  selector: "raf-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  loggerActive$: Observable<boolean>;
  contactGraphLocked: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  contactGraphClosed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  contactLinksLocked: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  contactLinksClosed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  contactInfoLocked: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  contactInfoClosed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(
    private loggerQuery: LoggerQuery,
    private loggerService: LoggerService
  ) {}

  ngOnInit(): void {
    this.loggerActive$ = this.loggerQuery
      .select((state) => state.active)
      .pipe();
  }

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
