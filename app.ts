import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { StudentAccount } from "./class/StudentAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
console.log(peopleAccount);
peopleAccount.getName();
peopleAccount.deposit(10);
peopleAccount.getBalance();
peopleAccount.withdraw(10);
peopleAccount.getBalance();

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
console.log(companyAccount);
companyAccount.getName();
companyAccount.deposit(10);
companyAccount.getBalance();
companyAccount.withdraw(10);
companyAccount.getBalance();
companyAccount.withdraw(100);
companyAccount.getBalance();

const studentAccount: StudentAccount = new StudentAccount("DIO", 20);
console.log(studentAccount);
studentAccount.getName();
studentAccount.deposit(10);
studentAccount.getBalance();
studentAccount.withdraw(10);
studentAccount.getBalance();
