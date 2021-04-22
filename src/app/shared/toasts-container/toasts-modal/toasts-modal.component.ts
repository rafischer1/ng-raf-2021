import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { Router } from "@angular/router";
import { LoggerService } from "../../logging-service/logger.service";

@Component({
  selector: "raf-toasts-modal",
  templateUrl: "./toasts-modal.component.html",
  styleUrls: ["./toasts-modal.component.scss"],
})
export class ToastsModalComponent implements OnInit, OnChanges {
  @Input() message: string;
  @Input() type: string = "";
  @Input() link: string;

  @Output() delete: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild("defaultToast", { static: true }) defaultToast: TemplateRef<any>;
  @ViewChild("errorToast", { static: true }) errorToast: TemplateRef<any>;
  @ViewChild("linkToast", { static: true }) linkToast: TemplateRef<any>;
  @ViewChild("listToast", { static: true }) listToast: TemplateRef<any>;
  liveTemplate: TemplateRef<any>;

  toastClass: string = "";

  constructor(private router: Router, private logger: LoggerService) {}

  ngOnInit() {
    this.setTemplateType(this.type);
    this.logger.addLog({ context: "ToastsService", text: this.type + " added" });
  }

  ngOnChanges(changes: SimpleChanges) {
    switch (changes.type.currentValue) {
      case "error":
        return this.toggleErrorClass();
      case "link":
        return this.toggleLinkClass();
      case "list":
        return this.toggleToastClass();
      default:
        return this.toggleToastClass();
    }
  }

  setTemplateType(type: string) {
    switch (type) {
      case "alert":
        return (this.liveTemplate = this.errorToast);
      case "link":
        return (this.liveTemplate = this.linkToast);
      case "list":
        return (this.liveTemplate = this.listToast);
      default:
        return (this.liveTemplate = this.defaultToast);
    }
  }

  toggleToastClass() {
    this.toastClass = "show-toast";
    return setTimeout(() => {
      this.deleteToast();
    }, 5000);
  }

  toggleLinkClass() {
    this.toastClass = "link-toast";
    return setTimeout(() => {
      this.deleteToast();
    }, 7000);
  }

  toggleErrorClass = () => {
    this.toastClass = "dismiss";
    return setTimeout(() => {
      this.deleteToast();
    }, 6000);
  };

  deleteToast = () => this.delete.emit();

  navigateToRoute() {
    this.router.navigate([this.link]);
    return setTimeout(() => {
      this.deleteToast();
    }, 500);
  }
}
