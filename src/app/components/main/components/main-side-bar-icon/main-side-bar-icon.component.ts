import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "raf-main-side-bar-icon",
  template: `<ng-container *ngIf="active"
    ><div *transloco="let t; read: 'main'">
      <p>{{ t(type) | uppercase }}</p>
      <p (click)="open.emit(type)">open</p>
    </div></ng-container
  >`,
  styles: [],
})
export class MainSideBarIconComponent implements OnInit {
  @Input() type: "skills" | "info" | "links";
  @Input() active: boolean;
  @Output() open: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}
  ngOnInit(): void {}
}
