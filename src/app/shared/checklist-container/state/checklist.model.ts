export interface ChecklistObject {
  [key: string]: { [key: string]: ChecklistStatus }[];
}

export interface ChecklistStatus {
  status: boolean;
  description?: string;
}

export const initialStateChecklist: ChecklistObject[] = [
  {
    checklist: [
      { open: { status: false } },
      { active: { status: false, description: "Handles live updating." } },
    ],
  },
];
