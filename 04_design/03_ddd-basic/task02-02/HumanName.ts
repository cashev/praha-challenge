import { ValueObject } from "./ValueObject"

interface HumanNameProps {
    value: string
}

const MAX_LENGTH = 20;

export class HumanName extends ValueObject<HumanNameProps> {

    get value(): string {
        return this.props.value;
    }

    private constructor(props: HumanNameProps) {
        super(props);
    }

    public static create(name: string): HumanName {
        if (!this.isValid(name)) {
            throw Error(`名前は${MAX_LENGTH}文字未満にしてください。`);
        }
        return new HumanName({value: name});
    }

    private static isValid(name: string): boolean {
        return name.length < MAX_LENGTH;
    }
}
