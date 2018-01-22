export class Base {
    private _name: string;

    public constructor(name: string) {
        this._name = name;
    }

    public greet() {
        console.log(this._name);
    }
}