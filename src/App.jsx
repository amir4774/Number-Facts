import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardNumberFacts from './components/CardNumberFacts';

const App = () => {

  const [number, setNumber] = useState();
  const [fact, setFact] = useState('');

  useEffect(() => {
    const getFact = async () => {
      if (number) {
        // Get fact with axios
        const res = await axios.get(`http://numbersapi.com/${number}`);
        setFact(res.data);

        // Get fact with fetch
        // const res = await fetch(`http://numbersapi.com/${number}`);
        // const data = await res.text();
        // setFact(data);
      }
    }

    // Call Function
    getFact();

  }, [number])

  const validNumber = (newNumber) => {
    if (newNumber) {
      setNumber(newNumber);
    } else {
      setFact('');
    }
  }

  return (
    <CardNumberFacts fact={fact} changeNumber={(newNumber) => validNumber(newNumber)} />
  )
}

export default App;