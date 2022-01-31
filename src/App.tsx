import React, { useState } from 'react';

import { CreditCard, ICardExpiration } from './components/CreditCard';

import GlobalStyle from './styles/global';

function App() {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiration, setExpiration] = useState<ICardExpiration>({
    month: 12,
    year: 50,
  });

  return (
    <>
      <GlobalStyle />

      <CreditCard
        cardNumber={number}
        personName={name}
        cardExpiration={expiration}
      />

      <label>Number</label>
      <input
        type="text"
        value={number}
        onChange={e => setNumber(e.target.value)}
      />

      <label>Name</label>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />

      {/* <label>Expiration</label>
      <input
        type="text"
        value={`${expiration.month}/${expiration.year}`}
        onChange={handleExpirationDate}
      /> */}
    </>
  );
}

export default App;
