import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
} from "@angular/core";
import { ChecklistQuery } from "./state/checklist.query";
import { ChecklistService } from "./state/checklist.service";
import { LoggerService } from "../logging-service/logger.service";
import { shareReplay } from "rxjs/operators";

@Component({
    selector: "raf-checklist-container",
    template: `<div class="{{ wrapperClass }} checklist-container">
    <div class="modal-container">
      <ng-container *ngIf="active$ | async" (change)="toggleWrapperClass()">
        <raf-checklist
          [checklist]="checklist$ | async"
          (destroy)="closeContainer()"
        ></raf-checklist>
      </ng-container>
    </div>
  </div> `,
    styleUrls: ["./checklist-container.component.scss"],
    standalone: true,
})
export class ChecklistContainerComponent implements AfterContentChecked {
  wrapperClass = "hidden-wrapper";
  checklist$ = this.query
    .select((state) => state.checklist)
    .pipe(shareReplay(1));
  active$ = this.query.select((state) => state.active);

  constructor(
    private query: ChecklistQuery,
    private cdRef: ChangeDetectorRef,
    private service: ChecklistService,
    private loggerService: LoggerService
  ) {}

  toggleWrapperClass() {
    this.wrapperClass = "modal-wrapper";
  }

  closeContainer() {
    this.wrapperClass = "hidden-wrapper";
    this.service.close();
    this.loggerService.addLog({
      context: "ChecklistClickEvent",
      text: "Close checklist",
    });
  }

  ngAfterContentChecked(): void {
    this.cdRef.detectChanges();
  }
}
