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
    ],
  },
  {
    toasts: [
      { action: "modal exists", status: false },
      {
        action: "components on navigate",
        status: false,
        description: "Handles live testing.",
      },
      {
        action: "testing",
        status: false,
      },
    ],
  },
];
