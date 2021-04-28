import { Component, OnInit } from "@angular/core";
import { BusinessCardService } from "../../state/business-card.service";

@Component({
  selector: "raf-business-card-form",
  templateUrl: "./business-card-form.component.html",
  styleUrls: ["./business-card-form.component.scss"],
})
export class BusinessCardFormComponent implements OnInit {
  constructor(private service: BusinessCardService) {}

  ngOnInit(): void {}

  backgroundColorChange = (ev: any) =>
    this.service.updateBackground(ev.target.value);

  nameChange = (ev: any) => this.service.updateName(ev.target.value);

  borderRadiusSelect = (ev: any) =>
    this.service.updateBorderRadius(+ev.target.value);

  emailChange = (ev: any) => this.service.updateEmail(ev.target.value);

  captureFontEvent(ev: {
    property: "family" | "size" | "weight" | "color";
    type: "primary" | "secondary";
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
    }
  }
}
