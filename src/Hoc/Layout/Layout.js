import React, { Component } from 'react';
import Aux from '../Aux/Aux'
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import classes from './Layout.css'

class layout extends Component {
	

	render() {

	  return (
            <Aux>
			                <main className={classes.Content}>
                    <Toolbar/>

                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default layout;