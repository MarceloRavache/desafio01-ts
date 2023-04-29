import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (valueLoan: number): void => {
    this.deposit(valueLoan);
    console.log("Voce pegou um empréstimo");
  };
}
