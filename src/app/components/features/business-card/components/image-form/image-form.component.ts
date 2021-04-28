import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import * as faker from "faker";
import { BusinessCardImage } from "../../state/business-card.model";
import { BusinessCardQuery } from "../../state/business-card.query";

@Component({
  selector: "raf-image-form",
  templateUrl: "./image-form.component.html",
  styleUrls: ["./image-form.component.scss"],
})
export class ImageFormComponent implements OnInit {
  currentImage: BusinessCardImage = {
    width: 60,
    height: 60,
    opacity: 1,
    active: false,
    borderRadius: 2,
    src: "",
  };

  @Output()
  imageAdd: EventEmitter<BusinessCardImage> = new EventEmitter<BusinessCardImage>();

  @Output()
  toggleImage: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {
    this.currentImage.src = faker.image.abstract();
  }

  addImage = () => {
    this.imageAdd.emit({ ...this.currentImage, active: true });
  };

  randomImage = () =>
    this.imageAdd.emit({
      ...this.currentImage,
      src: faker.image.image(),
      active: true,
    });

  toggle = () => {
    this.toggleImage.emit(false);
  };
}
