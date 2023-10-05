import React, { useState, useEffect } from 'react';
import { fetchTransactionData } from './api';

const RewardCalculator = () => {
  const [customerPoints, setCustomerPoints] = useState({});

  useEffect(() => {
    fetchTransactionData()
      .then((transactions) => {
        const rewards = {};

        transactions.forEach((transaction) => {
          const { customerId, amount, date } = transaction;
          const month = date.split('-')[1];

          const points = Math.max(2 * (amount - 100), 0) + Math.max(1 * (Math.min(amount, 100) - 50), 0);

          rewards[customerId] = {
            ...rewards[customerId],
            [month]: (rewards[customerId]?.[month] || 0) + points,
          };
        });

        setCustomerPoints(rewards);
      })
      .catch((error) => {
        console.error('Error fetching transaction data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Reward Points Calculator</h2>
      <ul>
        {Object.keys(customerPoints).map((customerId) => (
          <li key={customerId}>
            Customer {customerId}:
            <ul>
              {Object.keys(customerPoints[customerId]).map((month) => (
                <li key={month}>
                  Month {month}: {customerPoints[customerId][month]} points
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RewardCalculator;