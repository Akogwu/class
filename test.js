
window.onload = (function () {
    mocha.setup('bdd');
    let assert = chai.assert;

    //Tests for Account methods
    
    /**
     * getNumber
     * */
    describe("Account:getNumber",function () {
        it("The method returns an account number",function () {
            assert.equal(141,new Account(141).getNumber())
        })
    })
    
    describe("Account: deposit",function () {
        it('should report error on invalid amount', function () {
            try {
                new Account(141).deposit(-200);
            }catch (e) {
                assert.equal("Deposit amount has to be greater than zero",e.message);
            }
        });

        it('should take a valid amount and make a deposit in the account', function () {
            let account =   new Account(141);
            account.deposit(200);
            assert.equal(200,account.getBalance())
        });
    });
    
    describe("Account: getBalance",function () {
        it('should get current balance on the give account', function () {
            let account = new Account(142);
            account.deposit(300);
            assert.equal(300,account.getBalance());
        });
    });

    describe("Account:withdraw",function () {
        it('should display warning message if amount is less than 0', function () {
            let account = new Account(143);
            try{
                account.withdraw(-200);
            }catch (e) {
                assert.equal("Withdraw amount has to be greater than zero", e.message);
            }
        });

        it("should display warning (insufficient fund) if attempted withdrawal is greater than current balance",
            function () {
                try{
                    let account = new Account(144);
                    account.deposit(500);
                    account.withdraw(1000);
                }
                catch(e){
                    assert.equal('Insufficient funds', e.message);
                }
            });

        it("should take a valid withdrawal amount, and withdraw it from balance",
            function () {
                let account = new Account(144);
                account.deposit(1000);
                account.withdraw(500);
                assert.equal(500, account.getBalance());
            });

    });

    describe("Account : toString", function () {
        it("should return a string account description",
            function () {
                let account = new Account(145);
                account.deposit(1000);
                assert.equal("Account 145, balance 1000", account.toString());
            });
    });

    //Savings account

    describe('savingsAccount: getInterest', function () {

        it('should return interest on the account', function () {

            let account = new SavingsAccount(123, 10);

            assert.equal(10, account.getInterest());

        });

    });



    describe('savingsAccount: setInterest', function () {

        it('should return interest set on the account', function () {

            let account = new SavingsAccount(123, 10);

            account.setInterest(15);

            assert.equal(15, account.getInterest());

        });

    });



    describe('SavingsAccount: addInterest', function () {

        it('should add interest to the account balance', function () {

            let account = new SavingsAccount(123, 10);

            account.deposit(100);

            account.addInterest(10);

            assert.equal(10, account.getInterest());

        });

    });



    describe('SavingsAccount: toString', function () {

        it('should display Savings account description', function () {

            let account = new SavingsAccount(224, 10);

            account.deposit(1000);

            assert.equal(

                'Savings Account no: 224 Interest: 10 Balance: 1000',

                account.toString()

            );

        });

    });

    describe('SavingsAccount: endOfMonth', function () {

        it('should display Savings account interest added for the month', function () {

            let account = new SavingsAccount(224, 10);

            account.deposit(100);

            assert.equal(

                '10 Interest was added to saving account no: 224, current balance: 110',

                account.endOfMonth()

            );

        });

    });

    //Checking Account

    describe('CheckingAccount: getOverdraftLimit', function () {

        it('should return the overdraft limit for an account', function () {

            let account = new CheckingAccount(224, 100);



            assert.equal(100, account.getOverDraftLimit());

        });

    });

    describe('CheckingAccount: setOverdraftLimit', function () {

        it('should set a new overdraft limit for an account', function () {
            let account = new CheckingAccount(224, 100);
            account.setOverDraftLimit(200);
            assert.equal(200, account.getOverDraftLimit());

        });

    });

    describe('CheckingAccount: toString', function () {

        it('should display Checking account description', function () {

            let account = new CheckingAccount(224, 10);
            account.deposit(1000);

            assert.equal(
                'Checking Account no: 224, Over Draft Amount: 10 balance: 1000',
                account.toString()

            );

        });

    });

    describe('CheckingAccount: endOfMonth', function () {
        it('should display Checking account low balance', function () {
            let checkingAccount = new CheckingAccount(224, 10);
            assert.equal(
                "",
                checkingAccount.endOfMonth()

            );

        });

    });


    describe("Bank : addAccount", function () {
        it("takes no arguments and adds an account to account list and returns number of accounts created",
            function () {
                let bank = new Bank();
                bank.addAccount();
                assert.equal(2, bank.addAccount());
            });
    });
    describe("Bank : addSavingAccount", function () {
        it("takes interest and adds saving account to account list and returns number of accounts created",
            function () {
                let bank = new Bank();
                bank.addAccount();
                bank.addSavingsAccount(10);
                assert.equal(3, bank.addSavingsAccount(1200));
            });
    });
    describe("Bank : addCheckingAccount", function () {
        it("takes overdraft and adds checking account to account list and returns number of accounts created",
            function () {
                let bank = new Bank();
                bank.addAccount();
                bank.addSavingsAccount(10);
                bank.addCheckingAccount(10000);
                assert.equal(4, bank.addCheckingAccount(12000));
            });
    });
   /* describe("Bank : closeAccount", function () {
        it("takes an account number and removes an object of with that account number",
            function () {
                let bank = new Bank();
                bank.addAccount();
                bank.addSavingsAccount(10);
                bank.addCheckingAccount(10000);
                bank.closeAccount(11);
                assert.deepEqual([{number: 10, balance:0}, {number:12, balance: 0, overDraftLimit:10000}], bank.accountObjects);
            });
    });
    describe("Bank : accountReport", function () {
        it("takes no arguments and returns a string of list of all the accounts",
            function () {
                let bank = new Bank();
                bank.addAccount();
                bank.addSavingsAccount(10);
                bank.addCheckingAccount(10000);
                assert.equal("Account 13: balance 0\nAccount No: 14, Balance: 0, Interest: 10\nAccount No: 15, Balance: 0, OverDraftAmount: 10000", bank.accountReport());
            });
    });



    //Bank

    describe("Bank : endOfMonth", function () {
        it("takes no arguments and returns a string of output of endOfMonth() function from all the objects",
            function () {
                let bank = new Bank();
                bank.addAccount();
                bank.addSavingsAccount(10);
                bank.accountObjects[bank.accountObjects.length-1].deposit(1000);
                bank.addCheckingAccount(10000);
                bank.accountObjects[bank.accountObjects.length-1].withdraw(2000);
                assert.equal("\n,Interest added SavingsAccount 17: balance: 1100 interest: 10\n,Warning, low balance CheckingAccount 18: balance: -2000 overdraft limit: 10000\n", bank.endOfMonth());
            });
    });
*/
    mocha.run();
})
