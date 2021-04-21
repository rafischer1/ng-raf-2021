import { Component, OnInit } from "@angular/core";
import { pieGraphSkillsData } from "./dashboard-data";

@Component({
  selector: "raf-contact-graph",
  templateUrl: "./contact-graph.component.html",
  styleUrls: ["./contact-graph.component.scss"],
})
export class ContactGraphComponent implements OnInit {
  constructor() {}
  pieGraphData: { name: string; value: number }[] = pieGraphSkillsData;
  ngOnInit(): void {}
}
