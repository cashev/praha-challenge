/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-parameter-properties */

export class Employee {
  public static readonly ENGINEER: number = 0;
  public static readonly SALESMAN: number = 1;
  public static readonly MANAGER: number = 2;
  public static readonly SUPER_MANAGER: number = 3;
  private type: EmployeeType
  public constructor(
    protected _type: number,
    private readonly _monthlySalary: number,
    protected _comission: number,
    protected _bonus: number
  ) {
    this.type = EmployeeType.newType(_type);
  }

  public get getMonthlySalary() {
    return this._monthlySalary;
  }
  public get getComission() {
    return this._comission;
  }
  public get getBonus() {
    return this._bonus;
  }

  // memo:給与計算
  public payAmount() {
    return this.type.payAmount(this);
  }
  // memo: 退職プランを適用するか否か
  public hasRetirementPlan() {
    return this.type.hasRetirementPlan();
  }
  // memo: 取締役か否か
  public isBoardMember() {
    return this.type.isBoardMember();
  }
}

abstract class EmployeeType {
  abstract payAmount(employee: Employee): number;
  abstract hasRetirementPlan(): boolean;
  abstract isBoardMember(): boolean;

  public static newType(typeCode: number): EmployeeType {
    switch (typeCode) {
      case Employee.ENGINEER:
        return new Engineer();
      case Employee.SALESMAN:
        return new Salesman();
      case Employee.MANAGER:
        return new Manager();
      case Employee.SUPER_MANAGER:
        return new SuperManager();
      default:
        throw new Error("invalid employee type");
    }
  }
}

class Engineer extends EmployeeType {
  public payAmount(employee: Employee): number {
    return employee.getMonthlySalary;
  }
  public hasRetirementPlan() {
    return true;
  }
  public isBoardMember() {
    return false;
  }
}

class Salesman extends EmployeeType {
  public payAmount(employee: Employee): number {
    return employee.getMonthlySalary + employee.getComission;
  }
  public hasRetirementPlan() {
    return false;
  }
  public isBoardMember() {
    return false;
  }
}

class Manager extends EmployeeType {
  public payAmount(employee: Employee): number {
    return employee.getMonthlySalary + employee.getBonus;
  }
  public hasRetirementPlan() {
    return true;
  }
  public isBoardMember() {
    return true;
  }
}

class SuperManager extends EmployeeType {
  public payAmount(employee: Employee): number {
    return employee.getMonthlySalary + employee.getComission + employee.getBonus;
  }
  public hasRetirementPlan() {
    return true;
  }
  public isBoardMember() {
    return true;
  }
}

const engineer = new Employee(Employee.ENGINEER, 300, 100, 50);
engineer.payAmount();
