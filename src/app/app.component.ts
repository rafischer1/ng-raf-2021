import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "RAF 2021";
  checklist = {
    app: {
      checklistStore: {
        "shows/hides": false,
        updates: false,
      },
      toastsService: {
        inits: false,
        toasts: false,
        service: false,
        query: false,
      },
    },
  };
}
