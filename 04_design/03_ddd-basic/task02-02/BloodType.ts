import { ValueObject } from "./ValueObject"

interface BloodTypeProps {
    value: string
}

const BloodTypes = ["a", "b", "o", "ab"];

export class BloodType extends ValueObject<BloodTypeProps> {

    get value(): string {
        return this.props.value;
    }

    private constructor(props: BloodTypeProps) {
        super(props);
    }

    public static create(type: string): BloodType {
        if (!this.isValid(type)) {
            throw Error(`血液型は${BloodTypes.toString()}のいずれかを指定してください。`);
        }
        return new BloodType({value: type});
    }

    private static isValid(type: string): boolean {
        const checkType = type.toLocaleLowerCase();
        return BloodTypes.includes(checkType);
    }
}
