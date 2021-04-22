import { Component, OnInit } from "@angular/core";
import { LoggerQuery } from "../../shared/logging-service/logger.query";
import { Observable } from "rxjs";
import { UntilDestroy } from "@ngneat/until-destroy";
import { LoggerService } from "../../shared/logging-service/logger.service";

@UntilDestroy()
@Component({
  selector: "raf-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  loggerActive$: Observable<boolean>;

  constructor(
    private loggerQuery: LoggerQuery,
    private loggerService: LoggerService
  ) {}

  ngOnInit(): void {
    this.loggerActive$ = this.loggerQuery
      .select((state) => state.active)
      .pipe();
  }

  logComponentEnter = (name: string) =>
    this.loggerService.addLog({
      context: "ComponentActive",
      text: `${name.toUpperCase()} drag active`,
    });
}
