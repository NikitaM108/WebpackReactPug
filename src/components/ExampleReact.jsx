import React from 'react';
import Sky from 'react-sky';
import reactOne from "../img/reactOne.png"
import pug from "../img/pug.png"
import webpack from "../img/webpack.png"
import reactTwo from "../img/reactTwo.png"
import reactThree from "../img/reactThree.png"




import '../scss/main.scss'
import Navbar from './Navbar';


const Example = (props) => {
	return <div>
		<Navbar/>
		
		<div>
        <Sky
          images={{
            0:	reactOne,  
						1:	pug,
						2:  webpack,
						3: reactTwo,
          }}
          how={90} 
          time={25} 
          size={'100px'} 
        />
      </div>
	</div>
};

export default Example;