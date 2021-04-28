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

  colorChange = (ev: any) => this.service.updateColor(ev.target.value);

  nameChange = (ev: any) => this.service.updateName(ev.target.value);

  emailChange = (ev: any) => this.service.updateEmail(ev.target.value);
}
