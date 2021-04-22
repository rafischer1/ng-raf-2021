import { Component, OnInit } from "@angular/core";
import { TranslocoService } from "@ngneat/transloco";
import { LoggerService } from "../logging-service/logger.service";
import { ToastsService } from "../toasts-container/state/toasts.service";

@Component({
  selector: "raf-language-toggle",
  templateUrl: "./language-toggle.component.html",
  styleUrls: ["./language-toggle.component.scss"],
})
export class LanguageToggleComponent implements OnInit {
  constructor(
    private translate: TranslocoService,
    private logger: LoggerService,
    private toast: ToastsService
  ) {}
  selectedLanguage: string;

  ngOnInit(): void {
    this.selectedLanguage = this.translate.getActiveLang();
  }

  setActive = (lang: "en" | "es" | "fr" | "de" | "pt") => {
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
