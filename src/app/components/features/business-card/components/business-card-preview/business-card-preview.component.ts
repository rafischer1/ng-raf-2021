import { Component, OnInit } from "@angular/core";
import { BusinessCardQuery } from "../../state/business-card.query";
import { Observable } from "rxjs";
import { BusinessCard } from "../../state/business-card.model";
import { BusinessCardService } from "../../state/business-card.service";
import { ToastsService } from "../../../../../shared/toasts-container/state/toasts.service";

@Component({
  selector: "raf-business-card-preview",
  templateUrl: "./business-card-preview.component.html",
  styleUrls: ["./business-card-preview.component.scss"],
})
export class BusinessCardPreviewComponent implements OnInit {
  card$: Observable<BusinessCard>;

  constructor(
    private query: BusinessCardQuery,
    private service: BusinessCardService,
    private toast: ToastsService
  ) {}

  ngOnInit(): void {
    this.card$ = this.query.select((store) => store.card).pipe();
  }

  reset = () => this.service.reset();

  export = () => this.toast.showToast("warn", "PDF Service WIP");
}
