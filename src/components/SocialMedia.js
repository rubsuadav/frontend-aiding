import React from 'react';
import Twit from 'twit';

export default function TweetButton() {

    const handleClick = () => {
      const tweetText = 'Estoy usando Aiding!';
      const twit = new Twit({
        consumer_key: 'TU_CONSUMER_KEY',
        consumer_secret: 'TU_CONSUMER_SECRET',
        access_token: 'TU_ACCESS_TOKEN',
        access_token_secret: 'TU_ACCESS_TOKEN_SECRET'
      });
      twit.post('statuses/update', { status: tweetText })
        .then(response => console.log('Tweet publicado:', response.data))
        .catch(error => console.log('Error al publicar el tweet:', error));
  
      const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
      window.open(tweetUrl, '_blank');
    };
  
    return (
      <button onClick={handleClick}>Publicar Tweet</button>
    );
  }
  