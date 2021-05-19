import { Account } from "./Account";

export interface Transaction{
    transactionDescription : string,
    transactionAccount : number,
    transactionAmount : number,
    transactionDate : Date,
    transactionAccountFrom : Account
}