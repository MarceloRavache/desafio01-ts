import { DioAccount } from "./DioAccount";

export class StudentAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (valueDeposit: number): void => {
    const isValidDeposit = this.setBalanceSafe(valueDeposit + 10);
    if (isValidDeposit) console.log("Voce depositou");
  };
}
