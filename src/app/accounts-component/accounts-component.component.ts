import { Component, OnInit } from '@angular/core';
import { AccountService } from '../core/account.service';
import { Account } from '../shared/models/Account';

@Component({
  selector: 'app-accounts-component',
  templateUrl: './accounts-component.component.html',
  styleUrls: ['./accounts-component.component.css']
})
export class AccountsComponentComponent implements OnInit {

  accounts: Account[];
  
  constructor(private accountService : AccountService) { }


  ngOnInit(): void {
    this.accountService.getAccounts()
    .subscribe((data:Account[])=>{
      this.accounts = data;
    });
  }

}
