import React, { useState, useEffect } from 'react';

function useFetchOnMount({ hits, url }) {
  const [data, setData] = useState({ hits });

  useEffect(() => {
    (async () => {
      const result = await fetch(url);
      const { hits } = await result.json();
      setData({ hits });
    })();
  }, []); // userEffect is being fired only when parameter changes, when empty array - will fire only once

  return [data, setData];
}

export default function CustomEffectHook() {
  const [data] = useFetchOnMount({ hits: [], url: 'http://hn.algolia.com/api/v1/search?query=redux' });

  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}
