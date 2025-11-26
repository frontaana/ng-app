export interface Flow {
  id: number;
  title: string;
  type: string;
  tags: string[];
  badge?: string;
  created: string; // ISO or display string
  archived: boolean;
}
