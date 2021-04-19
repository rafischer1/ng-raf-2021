import { Injectable } from "@angular/core";
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
  message: string = "";
  type: string = "";
  link?: string = "";

  constructor(private store: ToastsStore) {}

  showToast = (type: string, message: string, link?: string) => {
    this.store.update((old) => {
      return { toasts: [...old.toasts, { type, message, link }] };
    });
  };

  deleteToast = (i: number) =>
    this.store.update((_old) => {
      const old = [..._old.toasts];
      old.splice(i, 1);
      return { toasts: old };
    });
}
