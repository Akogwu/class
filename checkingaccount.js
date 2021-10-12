class CheckingAccount extends Account{
    constructor(number,overdraft_limit) {
        super(number);
        this.overdraft_limit = overdraft_limit;
    }

    getOverDraftLimit(){
        return this.overdraft_limit;
    }

    setOverDraftLimit(overdraft_limit){
        this.overdraft_limit = overdraft_limit;
    }

    toString() {
        return "Checking Account no: "+this.getNumber()+", Over Draft Amount: "+this.getOverDraftLimit()+" balance: "+this.getBalance();
    }

    endOfMonth() {
        if (this.getBalance() < 0)
            return "Warning, low balance CheckingAccount "+this.getNumber()+" balance: "+this.getBalance()+" Overdraft limit: "+this.getOverDraftLimit();
    return "";
    }
}