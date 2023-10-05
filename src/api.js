export const fetchTransactionData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = [
        { customerId: 1, amount: 120, date: '2023-10-01' },
        { customerId: 2, amount: 75, date: '2023-10-02' },
        { customerId: 3, amount: 90, date: '2023-10-02' },
        { customerId: 1, amount: 70, date: '2023-11-01' },
        { customerId: 2, amount: 50, date: '2023-11-02' },
        { customerId: 3, amount: 120, date: '2023-11-02' },
        { customerId: 1, amount: 150, date: '2023-12-01' },
        { customerId: 2, amount: 80, date: '2023-12-02' },
        { customerId: 3, amount: 110, date: '2023-12-02' },
      ];
      resolve(data);
    }, 1000);
  });
};