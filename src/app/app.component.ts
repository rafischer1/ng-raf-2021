import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements AfterContentInit {
  //Content Child
  @ContentChild("color") contentColor!: ElementRef;

  ngAfterContentInit(): void {
    //Content Child
    console.log(this.contentColor);
    this.contentColor.nativeElement.setAttribute("style", "color: teal");
  }
}
