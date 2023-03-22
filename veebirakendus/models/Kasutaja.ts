export class Kasutaja {
    constructor(
        private _id: number,
        private firstname: string,
        private lastname: string,
        private password: string
    ) {
    }

    get id() {
        return this._id
    }

    get fname() {
        return this.firstname
    }

    get lname() {
        return this.lastname
    }

    get password() {
        return this.password
    }

    set fname(newName: string) {
        this.firstname = newName
    }

    set lname(newName: string) {
        this.lastname = newName
    }

    set password(newPass: string) {
        this.password = newPass
    }

}