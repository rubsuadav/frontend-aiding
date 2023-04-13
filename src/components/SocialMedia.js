import Twit from 'twit';

const twit = new Twit({
  consumer_key: 'TU_CONSUMER_KEY',
  consumer_secret: 'TU_CONSUMER_SECRET',
  access_token: 'TU_ACCESS_TOKEN',
  access_token_secret: 'TU_ACCESS_TOKEN_SECRET'
});


const handleClick = () => {
  const tweetText = 'Estoy usando Aiding, este es su correo: aiding@gmail.com';

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    tweetText
  )}`;

  window.open(tweetUrl, '_blank');
};
