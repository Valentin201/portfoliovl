import React from 'react';
import classes from './Home.css'
import Intro from './Intro/Intro'
import Particules from '../Navigation/Particules/HomeParticules/HomeParticules' 




const home = (props) => (

	<div className={classes.home} >
		<Particules/>
		<Intro/>
	</div>

)

export default home;