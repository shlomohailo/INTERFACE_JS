interface IUer {
    firstname: string;
    lastname: string;
    birtday: Date;

}

class Person {
    heigt: number;
    cantry: string;
    user: IUer;
    constructor(_heigt: number, _cantry: string, _user: IUer) {
        this.heigt = _heigt;
        this.cantry = _cantry;
        this.user = _user;
    }
}

let user: IUer = { firstname: "shlpomo", lastname: "hailo", birtday: new Date(2 / 1 / 2012) };

const prson: Person = new Person(22, "lior", user);
console.log(prson);



interface ICar {
    typeCar: string;
    numberDoors: number;
    numbertiers: number;
}

class CarsShop {
    city: string;
    cantry: string;
    nameStore: string;
    arrayCar: ICar[];
    constructor(_city: string, _cantry: string, _namestore: string, _icar: ICar[]) {
        this.city = _city;
        this.cantry = _cantry;
        this.nameStore = _namestore;
        this.arrayCar = _icar;

    }
}

let typecar: ICar = { typeCar: "volvo", numberDoors: 4, numbertiers: 4 }
let typecar1: ICar = { typeCar: "toyota", numberDoors: 7, numbertiers: 5 }
let typecar2: ICar = { typeCar: "volvo", numberDoors: 9, numbertiers: 6 }


const shopCar: CarsShop = new CarsShop("lod", "israel", "mecedes", [typecar,typecar1,typecar2]);
console.log(shopCar)


class Garge {
    nameGarge: string;
    ownerGarage: string;
    isshlomo: boolean;
    arraycars: ICar[];

    constructor(_namegarge: string, _ownergargr: string, _isshlomo: boolean, _arrayCars: ICar[]) {
        this.nameGarge = _namegarge;
        this.ownerGarage = _ownergargr;
        this.isshlomo = _isshlomo;
        this.arraycars = _arrayCars;
    }

}



const garge1: Garge = new Garge("SHL", "HALL", true, [{ typeCar: "volvo", numberDoors: 9, numbertiers: 6 },
{ typeCar: "volvo", numberDoors: 9, numbertiers: 6 }])
console.log(garge1)


