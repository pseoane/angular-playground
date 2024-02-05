export class Apod {
    private _title = ""
    private _date = ""
    private _explanation = ""
    private _url = ""
    private _hdUrl = ""

    constructor(data?: any) {
        if (data) {
            this._title = data.title
            this._date = data.date
            this._explanation = data.explanation
            this._hdUrl = data.hdurl
            this._url = data.url
        }
    }

    get title() {
        return this._title
    }

    get date() {
        return this._date
    }

    get explanation() {
        return this._explanation
    }

    get url() {
        return this._url
    }

    get hdUrl() {
        return this._hdUrl
    }
}