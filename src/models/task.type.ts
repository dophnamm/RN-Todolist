export type TTask = {
  title: string;
  description: string;
  dueDate: string;
  startDate: string;
  endDate: string;
  uuids: string[];
  color?: string;
  fileUrls?: string[];
};

export type TPayloadTask = {
  title?: string;
  description?: string;
  dueDate?: string | null;
  members?: string[];
  attachments?: string[];
};
