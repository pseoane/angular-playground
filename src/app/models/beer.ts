export class Beer {
    private _name: string
    private _description: string
    private _abv: number
    private _imageUrl: string

    constructor(data?: any) {
        this._name = data["name"]
        this._imageUrl = data["image_url"]
        this._description = data["description"]
        this._abv = data["abv"]
    }

    get name() {
        return this._name
    }

    get description() {
        return this._description
    }

    get abv() {
        return this._abv
    }

    get imageUrl() {
        return this._imageUrl
    }
}