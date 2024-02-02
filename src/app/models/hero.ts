export class Hero {
    constructor(private _name: string, private _description: string) {
    }
  
    get name(): string {
      return this._name
    }
  
    get description(): string {
      return this._description
    }
}