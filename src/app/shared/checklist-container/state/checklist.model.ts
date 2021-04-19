export interface ChecklistObject {
  [title: string]: ChecklistStatus[];
}

export interface ChecklistStatus {
  action: string;
  status: boolean;
  description?: string;
}

export const initialStateChecklist: ChecklistObject[] = [
  {
    checklist: [
      { action: "open", status: true },
      {
        action: "active",
        status: false,
        description: "Handles live updating.",
      },
      {
        action: "live updating",
        status: false,
        description: "Store or form resets state",
      },
    ],
  },
  {
    toasts: [
      { action: "modal exists", status: true },
      { action: "renders", status: true, description: "All types rendering" },
      {
        action: "collapse multiple",
        status: false,
        description: "If two of the exact same in a row - collapse and show #",
      },
      {
        action: "testing",
        status: false,
      },
    ],
  },
];
