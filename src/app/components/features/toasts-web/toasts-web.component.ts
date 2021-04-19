import { Component, OnInit } from "@angular/core";
import { ToastsService } from "../../../shared/toasts-container/state/toasts.service";

@Component({
  selector: "raf-toasts-web",
  templateUrl: "./toasts-web.component.html",
  styleUrls: ["./toasts-web.component.scss"],
})
export class ToastsWebComponent implements OnInit {
  constructor(private toasts: ToastsService) {}

  ngOnInit(): void {}

  showToast(type: string) {
    switch (type) {
      case "success":
        return this.toasts.showToast(type, "Hooray!");
      case "info":
        return this.toasts.showToast(type, "Information");
      case "warn":
        return this.toasts.showToast(type, "Warning");
      case "alert":
        return this.toasts.showToast(type, "Error");
    }
  }
}
