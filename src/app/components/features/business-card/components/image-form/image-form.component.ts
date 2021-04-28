import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import * as faker from "faker";
import { BusinessCardImage } from "../../state/business-card.model";
import { BusinessCardQuery } from "../../state/business-card.query";
import { UntilDestroy } from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: "raf-image-form",
  templateUrl: "./image-form.component.html",
  styleUrls: ["./image-form.component.scss"],
})
export class ImageFormComponent implements OnInit {
  selectedWidth: number = 15;
  selectedHeight: number = 15;

  @Output()
  imageAdd: EventEmitter<BusinessCardImage> = new EventEmitter<BusinessCardImage>();

  @Output()
  toggleImage: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private query: BusinessCardQuery) {}

  addImage = () => {
    this.imageAdd.emit({
      width: this.selectedWidth,
      height: this.selectedHeight,
      src: faker.image.abstract(),
      opacity: 0,
      active: true,
    });
  };

  randomImage = () =>
    faker.image.abstract(this.selectedWidth, this.selectedHeight);

  toggle = () => {
    this.query
      .select((state) => state.card.image.active)
      .subscribe((active) => this.toggleImage.emit(!active))
      .unsubscribe();
  };

  ngOnInit(): void {}
}
