import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import { Observable } from "rxjs";
import { ChecklistObject } from "./state/checklist.model";
import { ChecklistQuery } from "./state/checklist.query";
import { ChecklistService } from "./state/checklist.service";

@Component({
  selector: "raf-checklist-container",
  templateUrl: "./checklist-container.component.html",
  styleUrls: ["./checklist-container.component.scss"],
})
export class ChecklistContainerComponent
  implements OnInit, AfterContentChecked {
  wrapperClass: string = "hidden-wrapper";
  checklist$: Observable<ChecklistObject[]> | undefined;
  active$: Observable<boolean> | undefined;

  constructor(
    private query: ChecklistQuery,
    private cdRef: ChangeDetectorRef,
    private service: ChecklistService
  ) {}

  ngOnInit(): void {
    this.checklist$ = this.query.select((state) => state.checklist).pipe();
    this.active$ = this.query.select((state) => state.active).pipe();
  }

  toggleWrapperClass() {
    this.wrapperClass = "modal-wrapper";
  }

  closeContainer() {
    this.wrapperClass = "hidden-wrapper";
    this.service.close();
  }

  ngAfterContentChecked(): void {
    this.cdRef.detectChanges();
  }
}
