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
      { action: "open", status: false },
      {
        action: "active",
        status: false,
        description: "Handles live updating.",
      },
    ],
  },
];
