import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "raf-toast-button",
  template: `<ng-container *transloco="let t; read: 'toasts'">
    <div class="{{ type }} toast-button" (click)="show.emit()">
      <div>{{ t(type) | uppercase }}</div>
    </div>
  </ng-container>`,
  styleUrls: ["./toast-button.component.scss"],
})
export class ToastButtonComponent implements OnInit {
  @Input() type: string = "";
  @Output() show: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}
}
