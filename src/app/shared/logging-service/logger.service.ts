import { Injectable } from "@angular/core";
import { LoggerStore } from "./logger.store";
import { Log } from "./log.interface";
import { TranslocoService } from "@ngneat/transloco";

@Injectable({
  providedIn: "root",
})
export class LoggerService {
  constructor(
    private store: LoggerStore,
    private translate: TranslocoService
  ) {}

  // * toggle store's active state
  toggleStore = () =>
    this.store.update((_old) => {
      return { active: !_old.active };
    });

  // * adds a log to store log[]
  addLog = (log: Log) => {
    setTimeout(() => {
      log.time = this.setTime();
      this.logToConsole(log);
      this.store.update((_old) => {
        return { logs: [log, ..._old.logs] };
      });
    }, 500);
  };

  // * clear all logs without hiding container
  clearLogs = () =>
    this.store.update((_) => {
      return { logs: [] };
    });

  // * duplicate log in console
  logToConsole = (log: Log) => {
    const clg = `[${log.time}] - (${log.context.toUpperCase()}): ${log.text}`;
    console.log("%c " + clg, "color: limegreen; font-family: monospace;");
  };

  setTime = (): string => {
    const date = new Date(Date.now());
    return new Intl.DateTimeFormat(this.translate.getActiveLang(), {
      day: "numeric",
      year: "numeric",
      month: "short",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).format(date);
  };
}
