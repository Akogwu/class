class Bank {
    ///generatedNumber = Math.floor(Math.random() * 6) + 1;
    accountObjects = [];
    static nextNumber = 0;
    addAccount(){
        this.accountObjects.push(new Account(++Bank.nextNumber));
        return this.accountObjects.length;
    }

    addSavingsAccount(interest){
        this.accountObjects.push(new SavingsAccount(++Bank.nextNumber,interest));
        return this.accountObjects.length;
    }

    addCheckingAccount(overdraft){
        this.accountObjects.push(new CheckingAccount(++Bank.nextNumber,overdraft));
        return this.accountObjects.length;
    }

    closeAccount(number){
        this.accountObjects = this.accountObjects.filter( account => account.getNumber() !== number);
    }

    accountReport(){
        let accountList = [];
        this.accountObjects.forEach(account => {
            accountList.push(account.toString());
        });
        return accountList.join("\n")
    }

    endOfMonth(){
        return this.accountObjects.map( account => account.endOfMonth  ).map(endOfMonthToStr => endOfMonthToStr.append("\n")).toString();
    }
}