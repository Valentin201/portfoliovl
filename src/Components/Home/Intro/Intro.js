import React from 'react';
import classes from './Intro.css';
import AnimatedIntro from './AnimatedIntro';
import { Wave } from 'react-animated-text';





const intro = (props) => (



	<div id='anim' className={classes.intro}>
	
  <AnimatedIntro/>
  <div className={classes.title}>
<Wave text="Web Developer - "
	  iterations= {1}
      effect="verticalFadeIn"
      effectDirection="right"
      speed={12}
      effectChange={10.0}/>
  <Wave text="React/Redux | Node/Express"
	  iterations= {1}
      effect="verticalFadeIn"
      effectDirection="right"
      speed={12}
      effectChange={10.0}/>
	</div>

	</div>


)

export default intro;