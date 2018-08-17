import React from 'react';
import classes from './NavigationItems.css';
import { NavLink } from 'react-router-dom';

const isActive = (path, match, location) => !!(match || path === location.pathname);

const navigationItems = () => (
    <div className={classes.NavigationItems}>

<NavLink  exact to="/" 
		  isActive={isActive.bind(this, '/')} 
		  activeClassName={classes.activeHome}
		  className={classes.home}/>

<NavLink  to="About" exact 
		  isActive={isActive.bind(this, '/About')} 
		  activeClassName={classes.activeAbout}
		  className={classes.about}/>

<NavLink  exact to="SKills"  
		  isActive={isActive.bind(this, '/SKills')} 
		  activeClassName={classes.activeSkills}
		  className={classes.skills}/>

<NavLink to="Work" exact 
		  isActive={isActive.bind(this, '/Work')} 
		  activeClassName={classes.activeWork}
		  className={classes.work}/>
    </div>
);

export default navigationItems;