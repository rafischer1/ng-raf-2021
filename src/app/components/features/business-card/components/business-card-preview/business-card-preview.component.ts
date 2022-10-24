import { Component, ElementRef, ViewChild } from "@angular/core";
import { BusinessCardService } from "../../state/business-card.service";
import { ToastsService } from "../../../../../shared/toasts-container/state/toasts.service";
import { PdfService } from "../../state/pdf.service";
import { BusinessCardQuery } from "../../state/business-card.store";

@Component({
  selector: "raf-business-card-preview",
  templateUrl: "./business-card-preview.component.html",
  styleUrls: ["./business-card-preview.component.scss"],
})
export class BusinessCardPreviewComponent {
  @ViewChild("card", { static: false }) cardRef: ElementRef;
  card$ = this.query.select((store) => store.card).pipe();
  randomizeClicked = false;

  constructor(
    private query: BusinessCardQuery,
    private service: BusinessCardService,
    private toast: ToastsService,
    private pdf: PdfService
  ) {}

  // * resets card to randomized starting status
  reset = () => {
    this.randomizeClicked = true;
    setTimeout(() => {
      this.service.reset();
      this.randomizeClicked = false;
    }, 1000);
  };

  // * triggers pdf service download
  export = () => this.pdf.pdfDownload(this.cardRef.nativeElement);
}
