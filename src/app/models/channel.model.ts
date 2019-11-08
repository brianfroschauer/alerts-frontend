export class Channel {

  id: number;
  name: string;
  description: string;
  updatedDate: Date;

  constructor(id: number, name: string, description: string, updatedDate: Date) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.updatedDate = updatedDate;
  }
}
