import { Component, OnInit } from "@angular/core";
import { TranslocoService } from "@ngneat/transloco";

@Component({
  selector: "raf-language-toggle",
  templateUrl: "./language-toggle.component.html",
  styleUrls: ["./language-toggle.component.scss"],
})
export class LanguageToggleComponent implements OnInit {
  constructor(private translate: TranslocoService) {}
  selectedLanguage: string;

  ngOnInit(): void {
    this.selectedLanguage = this.translate.getActiveLang();
  }

  setActive = (lang: "en" | "es" | "fr" | "de" | "pt") => {
    this.selectedLanguage = lang;
    this.translate.setActiveLang(lang);
  };
}
