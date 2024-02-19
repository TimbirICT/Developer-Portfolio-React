import React from 'react'
import {TypeAnimation} from 'react-type-animation'


const Main = () => {
  return (
    <div id='main'>
      <img className='w-full h-screen object-cover' src='./coder.jpg' alt="aesthetic coder" />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'> 
      <div>
        <h1>I'm Timbir Middlebrooks</h1>
        <h2>I'm a
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Developer',
        1000, // wait 1s before replacing
        'Coder',
        1000, // wait 1s before replacing
        'Tech Enthusiast',
        1000, // wait 1s before replacing
      ]}
      wrapper="div"
      cursor={true}
      speed={50}
      style={{ fontSize: '1em', paddingLeft: '5px'}}
      repeat={Infinity}
    />
        </h2>
      </div>
      </div>
    </div>
  )
}

export default Main
