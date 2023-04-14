import React from "react";

export default function SocialMedia() {
  const tweetText = "Holaaaaa";
  const url = `https://twitter.com/intent/tweet?text=${tweetText}`;

  return (
    <a href={url}>
      <button>Compartir en Twitter</button>
    </a>
  );
}
