import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "raf-toast-button",
  templateUrl: "./toast-button.component.html",
  styleUrls: ["./toast-button.component.scss"],
})
export class ToastButtonComponent implements OnInit {
  @Input() type: string = "";
  @Output() show: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}
}
