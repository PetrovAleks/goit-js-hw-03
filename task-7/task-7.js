const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,

  transactions: [],

  createTransaction(amount, type) {
    const objTransaction = {
      amount,
      type,
      id: this.transactions.length + 1,
    };
    return objTransaction;
  },

  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
  },

  withdraw(amount) {
    if (this.balance < amount) {
      alert('Недостаточно средств на балансе ');
    } else {
      this.balance -= amount;
      this.transactions.push(
        this.createTransaction(amount, Transaction.WITHDRAW),
      );
    }
  },

  getBalance() {
    return console.log(`Ваш баланс: ${this.balance} грн.`);
  },

  getTransactionDetails(id) {
    // eslint-disable-next-line
    for (const findeId of this.transactions) {
      if (findeId.id === id) {
        return console.log(findeId);
      }
    }
    return console.log('Нет такой транзакции');
  },

  getTransactionTotal(type) {
    let story = 0;
    // eslint-disable-next-line
    for (const findeType of this.transactions) {
      if (findeType.type === type) {
        story += findeType.amount;
      }
    }
    console.log(story);
  },
};
// const input = document.getElementById('js-input');
// const btnDeposit = document.getElementById('js-deposit');
// const inputValue = Number(input);

// btnDeposit.addEventListener(
//   'click',
//   account.deposit(inputValue.value, 'deposit'),
// );

account.deposit(1003, 'deposit');
account.withdraw(100, 'withdraw');
account.deposit(1150, 'deposit');
account.withdraw(100, 'withdrawt');
account.deposit(1020, 'deposit');
account.withdraw(100, 'withdraw');

account.getBalance();
console.table(account);
account.getTransactionDetails(5);
account.getTransactionTotal('deposit');
