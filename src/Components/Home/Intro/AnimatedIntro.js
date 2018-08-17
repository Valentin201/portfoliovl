import React from 'react';
import ReactVivus from 'react-vivus';
import svg from './Animated.svg';
import classes from './AnimatedIntro.css';


const intro = (props) => (

	<div className={classes.anim}>
	 <ReactVivus
    id="foo"
    option={{
      file: svg,
      animTimingFunction: 'EASE',
      type: 'delayed',
      onReady: console.log,
      duration: 400
    }}
    style={{ height: '100%', width: '100%' }}
    callback={console.log}
  />
	</div>


)

export default intro;