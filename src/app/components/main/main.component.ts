import { Component, inject, Injector, ViewEncapsulation } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { UntilDestroy } from "@ngneat/until-destroy";
import { LoggerService } from "../../shared/logging-service/logger.service";
import { createCustomElement } from "@angular/elements";
import { AlertComponent } from "../elements/alert/alert.component";
import { DomSanitizer } from "@angular/platform-browser";
import { LoggerQuery } from "../../shared/logging-service/logger.store";

@UntilDestroy()
@Component({
  selector: "raf-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent {
  private _query = inject(LoggerQuery);
  private _service = inject(LoggerService);
  // * Assignment automatic on component init lifecycle
  loggerActive$ = this._query.select((state) => state.active).pipe();
  contactGraphLocked = new BehaviorSubject<boolean>(false);
  contactGraphClosed = new BehaviorSubject<boolean>(false);
  contactLinksLocked = new BehaviorSubject<boolean>(false);
  contactLinksClosed = new BehaviorSubject<boolean>(false);
  contactInfoLocked = new BehaviorSubject<boolean>(false);
  contactInfoClosed = new BehaviorSubject<boolean>(false);

  content = null;
  constructor(private injector: Injector, private domSanitizer: DomSanitizer) {
    const AlertElement = createCustomElement(AlertComponent, {
      injector: this.injector,
    });
    customElements.define("alert-element", AlertElement);
    // setTimeout(() => {
    //   this.content = `<alert-element [message]="Hi">Render Me</alert-element>`;
    // }, 1000);
//     setTimeout(() => {
//       this.content = `<h3 class="demo"><div class="balloon"></div>
// <div class="balloon"></div>
// <div class="balloon"></div></h3>`;
//     }, 2500);

    setTimeout(() => {
      this.content = `<h3 class="demo"></h3>`;
    }, 2500);

    // setTimeout(() => {
    //   this.content = this.domSanitizer.bypassSecurityTrustHtml(
    //     `<alert-element message="Hi">Render Me</alert-element>`
    //   );
    // }, 1000);
  }

  logComponentEnter = (name: string) =>
    this._service.addLog({
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
