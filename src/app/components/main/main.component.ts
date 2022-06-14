import { Component, Injector, SecurityContext } from "@angular/core";
import { LoggerQuery } from "../../shared/logging-service/logger.query";
import { BehaviorSubject } from "rxjs";
import { UntilDestroy } from "@ngneat/until-destroy";
import { LoggerService } from "../../shared/logging-service/logger.service";
import { createCustomElement } from "@angular/elements";
import { AlertComponent } from "../elements/alert/alert.component";
import { DomSanitizer } from "@angular/platform-browser";

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

  content = null;
  constructor(
    private loggerQuery: LoggerQuery,
    private loggerService: LoggerService,
    injector: Injector,
    domSanitizer: DomSanitizer
  ) {
    const AlertElement = createCustomElement(AlertComponent, { injector });
    customElements.define("alert-element", AlertElement);
    setTimeout(() => {
      this.content = domSanitizer.sanitize(
        SecurityContext.HTML,
        domSanitizer.bypassSecurityTrustHtml(
          `<alert-element [message]='"Dynamic render"'></alert-element>`
        )
      );
    }, 1000);
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
