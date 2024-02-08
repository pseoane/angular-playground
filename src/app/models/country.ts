export class Country {
    private _name: CountryName | undefined

    constructor(data?: any) {
        if (data) {
            this._name = new CountryName(data["name"])
        }
    }

    get commonName(): string {
        if (this._name?.common) {
            return this._name.common
        }
        return ""
    }
}

export class CountryName {
    private _common: string | undefined

    constructor(data?: any) {
        if (data) {
            this._common = data["common"]
        }
    }

    get common(): string | undefined {
        return this._common
    }
}