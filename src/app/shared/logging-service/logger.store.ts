import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";
import { Log } from "./log.interface";

export interface LoggerState {
  active: boolean;
  logs: Log[];
}

export function createInitialState(): LoggerState {
  return {
    active: false,
    logs: [],
  };
}

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "logger" })
export class LoggerStore extends Store<LoggerState> {
  constructor() {
    super(createInitialState());
  }
}
