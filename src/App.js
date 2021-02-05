import React from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>);
      <img src={picture} />

    </div>
  );
}

const foodILike = [
  {
    name: 'Kimchi',
    image: 'https://wkiss.wikim.re.kr/upload/board/kind/150223102837_2886734975_FRjlQ7he.jpg'
  },
  {
    name: 'Samgyeopsal',
    image: 'https://image.fmkorea.com/files/attach/new/20200213/486616/959741723/2703711375/21fa12dc9af4fe710ce3d463affa3b96.jpg'
  },
  {
    name: 'Bibimbap',
    image: 'http://www.koreahousedallas.com/files/attach/images/20400/439/020/d1fea530fcaad8974440ad5325631c3b.JPG'
  }
];

function App() {
  //return <div className="App" />;
  return (
  <div>
    {foodILike.map(dish => (
    <Food name={dish.name} picture={dish.image} />
    ))}
  </div>);
}

export default App;