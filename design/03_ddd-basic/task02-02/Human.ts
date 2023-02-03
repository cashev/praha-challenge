import { BirthDate } from "./BirthDate"
import { BloodType } from "./BloodType"
import { HumanName } from "./HumanName"

class Human {
    id: number
    name: HumanName
    bloodType: BloodType
    birthDate: BirthDate

    constructor(id: number, name: HumanName, bloodType: BloodType, birthDate: BirthDate) {
        this.id = id;
        this.name = name;
        this.bloodType = bloodType;
        this.birthDate = birthDate;
    }
}