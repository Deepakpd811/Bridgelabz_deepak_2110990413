
export class Contacts {
  constructor(
    public id: number,
    public name: string,
    public phone: string,
    public email: string,
    public category:string,
    public address?: string
  ) {}
}
