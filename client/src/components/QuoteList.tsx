import * as React from 'react';
import { IAuth } from '../App';
import GiphyImage from './GiphyImage';

interface IQuote {
  id: number;
  phrase: string;
}

const QuoteList = ({auth}: {auth: IAuth}) => {

  const [loading, setLoading] = React.useState(true);
  const [quotes, setQuotes] = React.useState<IQuote[]>([]);
  const [error, setError] = React.useState('');

  const getList = async () => {
    try {
      const response = await fetch('http://localhost:8080/real', { headers: {
        Authorization: 'Bearer ' + await auth.getAccessToken()
      }})
      const data = await response.json();
      setQuotes(data);
      setLoading(false);
    } catch(err) {
      setError(err);
    }
  };

  React.useEffect(() => {
    getList();
  }, [])


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error.length > 0) {
    return <p>Error: {error}</p>;
  }
  
  return (
    <React.Fragment>
      <h2>Famous Quotes from Star Trek</h2>
      <h4>(and accompanying giffs)</h4>
      <div className='flex'>
        {quotes.map((quote, i) =>
          <div key={quote.id} className='giff'>
            {`${i + 1}. ${quote.phrase}`}<br/>
            <GiphyImage phrase={quote.phrase}/>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default QuoteList;