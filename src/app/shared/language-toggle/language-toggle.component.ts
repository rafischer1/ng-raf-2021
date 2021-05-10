import { Component, OnInit } from "@angular/core";
import { TranslocoService } from "@ngneat/transloco";
import { LoggerService } from "../logging-service/logger.service";
import { ToastsService } from "../toasts-container/state/toasts.service";

@Component({
  selector: "raf-language-toggle",
  template: `<div class="language-toggle-container">
    <ng-container *ngFor="let l of langs">
      <raf-language-icon
        [icon]="l.toUpperCase()"
        [active]="selectedLanguage === l"
        (select)="setActive(l)"
      ></raf-language-icon>
    </ng-container>
  </div> `,
  styles: [
    `
      div.language-toggle-container {
        display: flex;
        flex-direction: row;
        margin: 23px 5px;
        border: 1px solid lightgrey;
        border-radius: 7px;
        padding: 2px 3px;
      }

      div.language-toggle-container:hover {
        border: 1px solid #ededed;
      }
    `,
  ],
})
export class LanguageToggleComponent implements OnInit {
  constructor(
    private translate: TranslocoService,
    private logger: LoggerService,
    private toast: ToastsService
  ) {}
  selectedLanguage: string;
  langs: string[] = ["en", "es", "pt", "de", "fr"];

  ngOnInit(): void {
    this.selectedLanguage = this.translate.getActiveLang();
  }

  setActive = (lang: string) => {
    if (this.selectedLanguage !== lang) {
      this.logger.addLog({
        context: "LanguageChange",
        text: `From '${this.selectedLanguage.toUpperCase()}' to '${lang.toUpperCase()}'`,
      });
      this.selectedLanguage = lang;
      this.translate.setActiveLang(lang);
    } else {
      this.logger.addLog({
        context: "LanguageSelected",
        text: `Language '${lang.toUpperCase()}' already set`,
      });
      this.toast.showToast(
        "warn",
        `Language '${lang.toUpperCase()}' already set`
      );
    }
  };
}
