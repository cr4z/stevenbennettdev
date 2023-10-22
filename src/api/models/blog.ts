import { Timestamp } from "firebase/firestore";

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: Timestamp;
  category: string;
  html: string;
}
