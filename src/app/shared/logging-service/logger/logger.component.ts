import { Component, OnInit } from "@angular/core";
import { interval, Observable } from "rxjs";
import { Log } from "../log.interface";
import { LoggerQuery } from "../logger.query";
import { throttle } from "rxjs/operators";
import { LoggerService } from "../logger.service";

@Component({
  selector: "raf-logger",
  templateUrl: "./logger.component.html",
  styleUrls: ["./logger.component.scss"],
})
export class LoggerComponent {
  logs$ = this.query.select((state) => state.logs);
  active$ = this.query.select((state) => state.active).pipe();

  constructor(private query: LoggerQuery, private service: LoggerService) {}

  closeLogger = () => this.service.toggleStore();

  clearLogs = () => this.service.clearLogs();
}
