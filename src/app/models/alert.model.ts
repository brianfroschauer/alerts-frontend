export class Alert {

  id: number;
  title: string;
  description: string;
  category: string;
  urgency: string;
  expiresAt: Date;

  constructor(id: number, title: string, description: string, category: string, urgency: string, expiresAt: Date) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.category = category;
    this.urgency = urgency;
    this.expiresAt = expiresAt;
  }
}
