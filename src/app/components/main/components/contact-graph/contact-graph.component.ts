import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { pieGraphSkillsData } from "./dashboard-data";

@Component({
  selector: "raf-contact-graph",
  templateUrl: "./contact-graph.component.html",
  styleUrls: ["./contact-graph.component.scss"],
})
export class ContactGraphComponent implements OnInit {
  @Output() log: EventEmitter<any> = new EventEmitter<any>();
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}
  pieGraphData: { name: string; value: number }[] = pieGraphSkillsData;
  ngOnInit(): void {}
}
