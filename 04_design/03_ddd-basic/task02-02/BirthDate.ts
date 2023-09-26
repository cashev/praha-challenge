import { ValueObject } from "./ValueObject"

interface BirthDateProps {
    value: Date
}

const VALID_AGE = 20;

export class BirthDate extends ValueObject<BirthDateProps> {

    get value(): Date {
        return this.props.value;
    }

    private constructor(props: BirthDateProps) {
        super(props);
    }

    public static create(brithDate: Date): BirthDate {
        if (!this.isValid(brithDate)) {
            throw Error(`登録できるのは${VALID_AGE}歳以上です。`);
        }
        return new BirthDate({value: brithDate});
    }

    private static isValid(brithDate: Date): boolean {
        return this.calculateAge(brithDate) >= VALID_AGE;
    }

    private static calculateAge(brithDate: Date): number {
        const timeDiff = Math.abs(Date.now() - brithDate.getTime());
        const age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
        return age;
    }
}


