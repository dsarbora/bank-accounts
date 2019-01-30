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

AccountLog.prototype.findAccount = function(accountID){
  for(var i = 0; i < this.accounts.length; i++){
    if(this.accounts[i]){
      if(this.accounts[i].id==accountID){
        return this.accounts[i];
      }
    }
  };
  return false;
};

AccountLog.prototype.deleteAccount = function(accountID){
  for(var i = 0; i < this.accounts.length; i++){
    if(this.accounts[i]){
      if(this.accounts[i].id==accountID){
        delete this.accounts[i];
        return true;
      }
    }
  };
  return false;
};


//logic for BankAccount
function BankAccount(name, amount){
  this.name = name,
  this.amount = amount
};

BankAccount.prototype.withdrawal = function(withdrawal){
  this.amount -= parseInt(withdrawal);
  return this.amount;
};

BankAccount.prototype.deposit = function(deposit){
  this.amount += parseInt(deposit);
  return this.amount;
};

//front end logic
var accountLog = new AccountLog();

function showAccountNames(accountLogToBeDisplayed){


}

function showAccount(){
  var accountsList = $("ul#show-account");
  var htmlForAccountsList = "";
  accountLog.accounts.forEach(function(account){
    htmlForAccountsList += "<li id =" + account.id + ">"+ account.amount + "</li>"
  });
  accountsList.html(htmlForAccountsList);
};

function showBalance(accountID){
  $("#balance").text(accountLog.findAccount(accountID).amount);
}

function attachAccountListenters(){
  $("ul#show-account").on("click", "li", function(){
    showBalance(this.id);
  });
};


$(function(){

  $("#new-account").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var amount = parseInt($("#initial-deposit").val());
    var account = new BankAccount(name, amount);
    accountLog.addAccount(account)
    showAccount(accountLog);
    attachAccountListenters();
  });

  $("#acctChange").submit(function(){
    event.preventDefault();
    debugger;
    var withdrawal = $("#withdrawal").val();
    //var deposit = $("#deposit").val();
    accountLog.accounts[0].withdrawal(withdrawal);
    //accountLog.accounts[0].deposit(deposit);
    showBalance(1);
  });


}); //end doc ready function
