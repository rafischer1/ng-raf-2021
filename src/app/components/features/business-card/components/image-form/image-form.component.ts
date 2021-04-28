import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import * as faker from "faker";
import { BusinessCardImage } from "../../state/business-card.model";
import { BusinessCardQuery } from "../../state/business-card.query";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { map } from "rxjs/operators";

@UntilDestroy()
@Component({
  selector: "raf-image-form",
  templateUrl: "./image-form.component.html",
  styleUrls: ["./image-form.component.scss"],
})
export class ImageFormComponent implements OnInit {
  selectedWidth: number = 55;
  selectedHeight: number = 55;

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
      opacity: 1,
      active: true,
      borderRadius: 2,
    });
  };

  randomImage = () =>
    faker.image.abstract(this.selectedWidth, this.selectedHeight);

  toggle = () => {
    this.toggleImage.emit(false);
  };

  ngOnInit(): void {}
}
