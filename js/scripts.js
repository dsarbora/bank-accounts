//logic for AccountLog
function AccountLog(){
  this.accounts= [],
  this.currentID= 0
};

AccountLog.prototype.addAccount = function(account){
  account.id = this.assignID();
  this.accounts.push(account)
};

AccountLog.prototype.assignID = function(){
  this.currentID += 1;
  return this.currentID;
};

//logic for BankAccount
function BankAccount(name, amount){
  this.name = name,
  this.amount = amount
};

BankAccount.prototype.withdrawal = function(number){
  this.amount -= number;
};

BankAccount.prototype.deposit = function(number){
  this.amount += number;
};

//front end logic
var accountLog = new AccountLog();

function showAccount(){

}


$(function(){

  $("#new-account").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var amount = $("#initial-deposit").val();
    var account = new BankAccount(name, amount);
    accountLog.addAccount(account)
    showAccount(account);

  });


}); //end doc ready function
