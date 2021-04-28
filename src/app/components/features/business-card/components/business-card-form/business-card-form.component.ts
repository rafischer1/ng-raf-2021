import { Component, OnInit } from "@angular/core";
import { BusinessCardService } from "../../state/business-card.service";
import {
  fontFamilyValueSet,
  fontWeightValueSet,
} from "./business-card-form.constants";

@Component({
  selector: "raf-business-card-form",
  templateUrl: "./business-card-form.component.html",
  styleUrls: ["./business-card-form.component.scss"],
})
export class BusinessCardFormComponent implements OnInit {
  fontFamilies: string[] = fontFamilyValueSet;
  fontWeights: string[] = fontWeightValueSet;
  constructor(private service: BusinessCardService) {}

  ngOnInit(): void {}

  backgroundColorChange = (ev: any) =>
    this.service.updateBackground(ev.target.value);

  nameChange = (ev: any) => this.service.updateName(ev.target.value);

  emailChange = (ev: any) => this.service.updateEmail(ev.target.value);

  primaryFontSelect = (ev: any) =>
    this.service.updatePrimaryFont(ev.target.value);

  primaryColorChange = (ev: any) =>
    this.service.updatePrimaryColor(ev.target.value);

  primaryFontSizeChange = (ev: any) =>
    this.service.updatePrimarySize(+ev.target.value);

  primaryFontWeightChange = (ev: any) =>
    this.service.updatePrimaryWeight(ev.target.value);

  secondaryFontSelect = (ev: any) =>
    this.service.updateSecondaryFont(ev.target.value);

  secondaryColorChange = (ev: any) =>
    this.service.updateSecondaryColor(ev.target.value);

  secondaryFontSizeChange = (ev: any) =>
    this.service.updateSecondarySize(+ev.target.value);

  secondaryFontWeightChange = (ev: any) =>
    this.service.updateSecondaryWeight(ev.target.value);
}
