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
export class LoggerComponent implements OnInit {
  logs$: Observable<Log[]>;
  active$: Observable<boolean>;

  constructor(private query: LoggerQuery, private service: LoggerService) {}

  ngOnInit(): void {
    this.active$ = this.query.select((state) => state.active).pipe();
    this.logs$ = this.query
      .select((state) => state.logs)
      .pipe(throttle((ev) => interval(1)));
  }

  closeLogger = () => this.service.toggleStore();

  clearLogs = () => this.service.clearLogs();
}
