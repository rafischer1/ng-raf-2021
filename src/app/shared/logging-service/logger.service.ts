import { Injectable } from "@angular/core";
import { LoggerStore } from "./logger.store";
import { Log } from "./log.interface";

@Injectable({
  providedIn: "root",
})
export class LoggerService {
  constructor(private store: LoggerStore) {}

  toggleStore = () =>
    this.store.update((_old) => {
      return { active: !_old.active, logs: [] };
    });

  addLog = (log: Log) => {
    setTimeout(() => {
      this.store.update((_old) => {
        return { logs: [log, ..._old.logs] };
      });
    }, 1000);
  };

  clearLogs = () =>
    this.store.update((_) => {
      return { logs: [] };
    });
}
