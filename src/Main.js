import React from 'react';
import Heading from './components/Atoms/Headings'
import ImgLoader from './images/loader.png'

const Main = () => {
 return <div className="main">
   <div className="logo">MyApp</div>
   <img src={ImgLoader} />
   <Heading type="h1">Welcome React</Heading>
   </div>
};
export default Main;