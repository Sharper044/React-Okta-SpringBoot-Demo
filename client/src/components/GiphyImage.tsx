import * as React from 'react';

const GiphyImage = ({phrase} : {phrase: string}) => {
  const [loading, setLoading] = React.useState(false);
  const [giphyUrl, setGiphyUrl] = React.useState('');

  React.useEffect(() => {
    const mod = phrase === 'Live Long and Prosper' ? '1' : '';
    fetch(`//api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=1&q=${phrase}${mod}`)
      .then(response => response.json())
      .then(response => {
        if (response.data.length > 0) {
          setGiphyUrl(response.data[0].images.original.url);
        } else {
          // confusion for no images found
          setGiphyUrl('https://media.giphy.com/media/fVeK4abvX79BjF5mF7/giphy.gif');
        }
        setLoading(false);
      });
  }, [])

  if (loading) {
    return <p>Loading image...</p>;
  }

  return (
    <img src={giphyUrl} alt={phrase} width="200"/>
  );
}

export default GiphyImage;