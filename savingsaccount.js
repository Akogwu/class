class SavingsAccount  extends Account{
    constructor(number, interest) {
        super(number);
        this.interest = interest;
    }

    addInterest(){
        let amount = (this.getBalance()*this.interest)/100;
        this.deposit(amount);
    }

    getInterest(){
        return this.interest;
    }

    setInterest(interest){
        this.interest = interest;
    }

    toString() {
        return "Savings Account no: "+this.getNumber()+" Interest: "+this.getInterest()+" Balance: "+this.getBalance();
    }

    endOfMonth() {
        this.addInterest();
        return this.getInterest()+" Interest was added to saving account no: "+this.getNumber()+", current balance: "+this.getBalance();
    }

}