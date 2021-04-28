import { Component, OnInit } from "@angular/core";
import { BusinessCardQuery } from "../../state/business-card.query";
import { Observable } from "rxjs";
import { BusinessCard } from "../../state/business-card.model";

@Component({
  selector: "raf-business-card-preview",
  templateUrl: "./business-card-preview.component.html",
  styleUrls: ["./business-card-preview.component.scss"],
})
export class BusinessCardPreviewComponent implements OnInit {
  card$: Observable<BusinessCard>;
  constructor(private query: BusinessCardQuery) {}

  ngOnInit(): void {
    this.card$ = this.query.select((store) => store.card).pipe();
  }
}
