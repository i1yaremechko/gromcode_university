import moment from 'moment';
import React from 'react';
React.version;

const formatter = new Intl.NumberFormat('en-GB');

const Transaction = ({ from, to, amount, rate, time }) => {
  const formattedDate = moment(time).format('DD MMM');
  const formattedTime = moment(time).format('HH:MM');

  const formattedAmount = formatter.format(amount);
 
  return (
    <li className='transaction'>
      <span className='transaction__date'>{formattedDate}</span>
      <span className='transaction__time'>{formattedTime}</span>
      <span className='transaction__assets'>{from} → {to}</span>
      <span className='transaction__rate'>{rate}</span>
      <span className='transaction__amount'>{formattedAmount}</span>
    </li>
  );
};

export default Transaction;