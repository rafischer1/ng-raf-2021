import { Component, ElementRef, inject, ViewChild } from "@angular/core";
import { BusinessCardService } from "../../state/business-card.service";
import { ToastsService } from "../../../../../shared/toasts-container/state/toasts.service";
import { PdfService } from "../../state/pdf.service";
import { BusinessCardQuery } from "../../state/business-card.store";

@Component({
    selector: "raf-business-card-preview",
    templateUrl: "./business-card-preview.component.html",
    styleUrls: ["./business-card-preview.component.scss"],
    standalone: true,
})
export class BusinessCardPreviewComponent {
  @ViewChild("card", { static: false }) cardRef: ElementRef;
  private _query = inject(BusinessCardQuery);
  private _service = inject(BusinessCardService);
  card$ = this._query.select((store) => store.card).pipe();
  randomizeClicked = false;

  constructor(private pdf: PdfService) {}

  // * resets card to randomized starting status
  reset = () => {
    this.randomizeClicked = true;
    setTimeout(() => {
      this._service.reset();
      this.randomizeClicked = false;
    }, 1000);
  };

  // * triggers pdf service download
  export = () => this.pdf.pdfDownload(this.cardRef.nativeElement);
}
