export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  };

  setBalanceSafe = (valueBalance: number): boolean => {
    if (this.validateStatus()) {
      this.balance = valueBalance;
      return true;
    }
    return false;
  };

  deposit = (valueDeposit: number): void => {
    const isValidDeposit = this.setBalanceSafe(valueDeposit);
    if (isValidDeposit) console.log("Voce depositou");
  };

  withdraw = (valueWithdraw: number): void => {
    if (this.balance >= valueWithdraw) {
      const isValidWithdraw = this.setBalanceSafe(this.balance - valueWithdraw);
      if (isValidWithdraw) console.log("Voce sacou");
    }
  };

  getBalance = (): void => {
    console.log(this.balance);
  };

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
