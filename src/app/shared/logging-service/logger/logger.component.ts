import { Component } from "@angular/core";
import { LoggerService } from "../logger.service";
import { LoggerQuery } from "../logger.store";

@Component({
  selector: "raf-logger",
  template: `<div class="logger-container" *ngIf="active$ | async">
    <div class="logger-header">
      <div class="header-item" (click)="closeLogger()">Close</div>
      <div class="header-item" (click)="clearLogs()">Clear Logs</div>
    </div>
    <div class="blink log">...</div>
    <div *ngFor="let log of logs$ | async">
      <div class="log">
        <span class="time">[{{ log.time }}] -</span> ({{
          log.context | uppercase
        }}) {{ log.text }}...
      </div>
    </div>
  </div>`,
  styleUrls: ["./logger.component.scss"],
})
export class LoggerComponent {
  logs$ = this.query.select((state) => state.logs);
  active$ = this.query.select((state) => state.active).pipe();

  constructor(private query: LoggerQuery, private service: LoggerService) {}

  closeLogger = () => this.service.toggleStore();

  clearLogs = () => this.service.clearLogs();
}
