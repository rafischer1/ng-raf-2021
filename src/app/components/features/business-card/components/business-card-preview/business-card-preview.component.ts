import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { BusinessCardQuery } from "../../state/business-card.query";
import { Observable } from "rxjs";
import { BusinessCard } from "../../state/business-card.model";
import { BusinessCardService } from "../../state/business-card.service";
import { ToastsService } from "../../../../../shared/toasts-container/state/toasts.service";
import { PdfService } from "../../state/pdf.service";

@Component({
  selector: "raf-business-card-preview",
  templateUrl: "./business-card-preview.component.html",
  styleUrls: ["./business-card-preview.component.scss"],
})
export class BusinessCardPreviewComponent implements OnInit {
  @ViewChild("card", { static: false }) cardRef: ElementRef;
  card$: Observable<BusinessCard>;
  randomizeClicked: boolean = false;

  constructor(
    private query: BusinessCardQuery,
    private service: BusinessCardService,
    private toast: ToastsService,
    private pdf: PdfService
  ) {}

  ngOnInit(): void {
    this.card$ = this.query.select((store) => store.card).pipe();
  }

  reset = () => {
    this.randomizeClicked = true;
    setTimeout(() => {
      this.service.reset();
      this.randomizeClicked = false;
    }, 1000);
  };

  export = () => this.pdf.pdfDownload(this.cardRef.nativeElement);
}
