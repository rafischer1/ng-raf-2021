import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import * as faker from "faker";
import { BusinessCardImage } from "../../state/business-card.model";

@Component({
    selector: "raf-image-form",
    templateUrl: "./image-form.component.html",
    styleUrls: ["./image-form.component.scss"],
    standalone: true,
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

  selectedBorderRadius: number = 2;
  selectedOpacity: number = 1;
  selectedHeight: number = 60;
  selectedWidth: number = 60;
  selectedSrc: string = "";

  @Output()
  imageAdd: EventEmitter<BusinessCardImage> = new EventEmitter<BusinessCardImage>();

  @Output()
  toggleImage: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {
    this.currentImage.src = faker.image.abstract();
    this.selectedSrc = this.currentImage.src;
  }

  addImage = () => {
    this.currentImage.active = true;
    this.imageAdd.emit(this.currentImage);
  };

  randomImage = () => {
    this.selectedSrc = faker.image.image();
    this.updateImage();
  };

  toggle = () => {
    this.toggleImage.emit(false);
  };

  borderRadiusSelect = (ev: any) => {
    this.selectedBorderRadius = +ev.target.value;
    this.updateImage();
  };

  opacitySelect = (ev: any) => {
    this.selectedOpacity = +ev.target.value / 100;
    this.updateImage();
  };

  widthSelect = (ev: any) => {
    this.selectedWidth = +ev.target.value;
    this.updateImage();
  };

  heightSelect = (ev: any) => {
    this.selectedHeight = +ev.target.value;
    this.updateImage();
  };

  updateImage = () =>
    this.imageAdd.emit({
      ...this.currentImage,
      borderRadius: this.selectedBorderRadius,
      src: this.selectedSrc,
      opacity: this.selectedOpacity,
      height: this.selectedHeight,
      width: this.selectedWidth,
      active: true,
    });
}
