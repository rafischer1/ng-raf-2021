import { Injectable } from "@angular/core";
import { LoggerStore } from "./logger.store";
import { Log } from "./log.interface";

@Injectable({
  providedIn: "root",
})
export class LoggerService {
  constructor(private store: LoggerStore) {}

  // * toggle store's active state
  toggleStore = () =>
    this.store.update((_old) => {
      return { active: !_old.active };
    });

  // * adds a log to store log[]
  addLog = (log: Log) => {
    setTimeout(() => {
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
    const clg = `(${log.context.toUpperCase()}): ${log.text}`;
    console.log("%c " + clg, "color: limegreen; font-family: monospace;");
  };
}
