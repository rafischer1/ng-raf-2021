import { Injectable } from "@angular/core";
import { Query } from "@datorama/akita";
import { LoggerStore, LoggerState } from "./logger.store";

@Injectable({ providedIn: "root" })
export class LoggerQuery extends Query<LoggerState> {
  constructor(protected store: LoggerStore) {
    super(store);
  }
}
