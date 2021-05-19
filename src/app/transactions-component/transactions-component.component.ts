import { Component, Input, OnInit } from '@angular/core';
import { TransactionService } from '../core/transaction.service';
import { Account } from '../shared/models/Account';
import { Transaction } from '../shared/models/Transaction';

@Component({
  selector: 'app-transactions-component',
  templateUrl: './transactions-component.component.html',
  styleUrls: ['./transactions-component.component.css']
})
export class TransactionsComponentComponent implements OnInit {

  @Input() account : Account[];
  transactions:Transaction[];


  constructor(private transactionService : TransactionService) { }

  ngOnInit(): void {
    this.transactionService.getTransaction()
    .subscribe((data:Transaction[])=>{
      this.transactions = data;
    });
  }

}
