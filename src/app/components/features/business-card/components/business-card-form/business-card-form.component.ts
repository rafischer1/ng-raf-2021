import { Component, OnInit } from "@angular/core";
import { BusinessCardService } from "../../state/business-card.service";
import * as faker from "faker";
import { BusinessCardImage } from "../../state/business-card.model";

@Component({
  selector: "raf-business-card-form",
  templateUrl: "./business-card-form.component.html",
  styleUrls: ["./business-card-form.component.scss"],
})
export class BusinessCardFormComponent implements OnInit {
  constructor(private service: BusinessCardService) {}

  ngOnInit(): void {}

  backgroundColorChange = (ev: any) =>
    this.service.updateBackground(ev.target?.value);

  nameChange = (ev: any) => this.service.updateName(ev.target.value);

  positionChange = (ev: any) => this.service.updatePosition(ev.target.value);

  catchPhraseChange = (ev: any) =>
    this.service.updateCatchPhrase(ev.target.value);

  randomCatchPhrase = () =>
    this.service.updateCatchPhrase(
      faker.company.bsBuzz() +
        " " +
        faker.company.bsAdjective() +
        " " +
        faker.company.bsNoun()
    );

  randomPosition = () => this.service.updatePosition(faker.name.jobTitle());

  borderRadiusSelect = (ev: any) =>
    this.service.updateBorderRadius(+ev.target.value);

  emailChange = (ev: any) => this.service.updateEmail(ev.target.value);

  phoneChange = (ev: any) => this.service.updatePhone(ev.target.value);

  addImage = (image: BusinessCardImage) => this.service.addImage(image);

  toggleImage = (status: boolean) => this.service.toggleImage(status);

  captureFontEvent(ev: {
    property: "family" | "size" | "weight" | "color";
    type: "primary" | "secondary" | "tertiary";
    value: any;
  }) {
    switch (ev.type) {
      case "primary":
        switch (ev.property) {
          case "color":
            this.service.updatePrimaryColor(ev.value);
            break;
          case "family":
            this.service.updatePrimaryFont(ev.value);
            break;
          case "size":
            this.service.updatePrimarySize(+ev.value);
            break;
          case "weight":
            this.service.updatePrimaryWeight(ev.value);
            break;
        }
        break;
      case "secondary":
        switch (ev.property) {
          case "color":
            this.service.updateSecondaryColor(ev.value);
            break;
          case "family":
            this.service.updateSecondaryFont(ev.value);
            break;
          case "size":
            this.service.updateSecondarySize(+ev.value);
            break;
          case "weight":
            this.service.updateSecondaryWeight(ev.value);
            break;
        }
        break;
      case "tertiary":
        switch (ev.property) {
          case "color":
            this.service.updateTertiaryColor(ev.value);
            break;
          case "family":
            this.service.updateTertiaryFont(ev.value);
            break;
          case "size":
            this.service.updateTertiarySize(+ev.value);
            break;
          case "weight":
            this.service.updateTertiaryWeight(ev.value);
            break;
        }
    }
  }
}
