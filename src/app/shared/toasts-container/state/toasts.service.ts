import { inject, Injectable } from "@angular/core";
import { ToastsStore } from "./toasts.store";

export interface Toast {
  type: string;
  message: string;
  link?: string;
}

@Injectable({
  providedIn: "root",
})
export class ToastsService implements Toast {
  private _store = inject(ToastsStore);
  message = "";
  type = "";
  link = "";

  showToast = (type: string, message: string, link?: string) => {
    this._store.update((old) => {
      return { toasts: [...old.toasts, { type, message, link }] };
    });
  };

  deleteToast = (i: number) =>
    this._store.update((_old) => {
      const old = [..._old.toasts];
      old.splice(i, 1);
      return { toasts: old };
    });
}
