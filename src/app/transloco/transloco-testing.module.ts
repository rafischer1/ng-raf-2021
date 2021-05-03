import {
  TranslocoTestingModule,
  TranslocoTestingOptions,
} from "@ngneat/transloco";
import en from "../../assets/i18n/en.json";
import es from "../../assets/i18n/es.json";
import fr from "../../assets/i18n/fr.json";
import pt from "../../assets/i18n/pt.json";
import de from "../../assets/i18n/de.json";

export function getTranslocoModule(options: TranslocoTestingOptions = {}) {
  return TranslocoTestingModule.forRoot({
    langs: { en, es, fr, de, pt },
    translocoConfig: {
      availableLangs: ["en", "es", "fr", "pt", "de"],
      defaultLang: "en",
    },
    preloadLangs: true,
    ...options,
  });
}
