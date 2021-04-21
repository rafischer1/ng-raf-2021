import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "raf-language-icon",
  templateUrl: "./language-icon.component.html",
  styleUrls: ["./language-icon.component.scss"],
})
export class LanguageIconComponent implements OnInit {
  @Input() active: boolean;
  @Input() icon: string;

  @Output() select: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}
}
