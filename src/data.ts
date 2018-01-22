class Animal {
    private _name: string;
    private _age: number;

    public constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    public get name(): string {
        return this._name;
    }

    public get age(): number {
        return this._age;
    }
}

class DataProvider {
    public static getAll(): Animal[] {
        return [
            new Animal("Reksio", 21),
            new Animal("Pimpek", 3),
            new Animal("Puchatek", 5)
        ];
    }
}

export { Animal, DataProvider }