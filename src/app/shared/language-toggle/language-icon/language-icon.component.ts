import { Component, EventEmitter, Input, Output } from "@angular/core";

// * implementation of declared styles for Angular component
const styles = `div {
  color: lightgrey;
  filter: brightness(85%);
  margin: auto 2px;
  cursor: pointer;
}

div:hover {filter: brightness(110%);}

.active {
  filter: brightness(120%);
  text-decoration: underline;
}`;

@Component({
    selector: "raf-language-icon",
    template: '<div [class.active]="active" (click)="select.emit()">{{ icon }}</div>',
    styles: [styles],
    standalone: true,
})
export class LanguageIconComponent {
  @Input() active!: boolean;
  @Input() icon!: string;
  @Output() select = new EventEmitter<void>();
}
