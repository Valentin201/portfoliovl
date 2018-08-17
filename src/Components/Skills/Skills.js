import React from 'react';
import classes from './Skills.css';
import ReduxImg from './Logos/Redux-Logo.png';
import Bootstrap from './Logos/Bootstrap-Logo.png';
import ES6 from './Logos/ES6-Logo.png';
import Illustrator from './Logos/Illustrator-Logo.png';
import Mongo from './Logos/MongoDB-Logo.png';
import Node from './Logos/Node-Logo.png';
import Photoshop from './Logos/Photoshop-Logo.png';
import Post from './Logos/POstgreSQL-Logo.png';
import react from './Logos/React-Logo.png';
import Sass from './Logos/Sass-Logo.png';
import CSS3 from './Logos/CSS3-Logo.png';
import Indesign from './Logos/Indesign-Logo.png';
import HTML from './Logos/Html-Logo.png';
import Git from './Logos/GitHub-Logo.png';
import PostMan from './Logos/PostMan-Logo.png';


const skills = (props) => (

	<div className={classes.skills}>
		<div className={classes.container}>
  
          <div className={classes.card}>
            <div className={classes.cardcontent}>
              <h4>Javascript</h4>
              <div className={classes.groupImage}>
                <div className={classes.imgContainer}><img alt="React" src={react} className={classes.img}/>React</div>
                <div className={classes.imgContainer}><img alt="Redux" src={ReduxImg} className={classes.img}/>Redux</div>
                <div className={classes.imgContainer}><img alt="ES6" src={ES6} className={classes.img}/>ES6</div>
                <div className={classes.imgContainer}><img alt="Node" src={Node} className={classes.img}/>Node</div>
                 <div className={classes.imgContainer}><img alt="Html" src={HTML} className={classes.img}/>Html</div>
              </div>
            </div>
          </div>
          
          <div className={classes.card}>
            <div className={classes.cardcontent}>
              <h4>Back-End</h4>
              <div className={classes.groupImage}>
                <div className={classes.imgContainer}><img alt="PostGreSQL" src={Post} className={classes.img}/>PostgreSQL</div>
                <div className={classes.imgContainer}><img alt="MongoDB" src={Mongo} className={classes.img}/>MongoDB</div>
                <div className={classes.imgContainer}><img alt="PostMan" src={PostMan} className={classes.img}/>PostMan</div>
              </div>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardcontent}>
              <h4>CSS</h4>
              <div className={classes.groupImage}>
                <div className={classes.imgContainer}><img alt="CSS" src={CSS3} className={classes.img}/>CSS3</div>
                <div className={classes.imgContainer}><img alt="Bootstrap" src={Bootstrap} className={classes.img}/>Bootstrap</div>
                <div className={classes.imgContainer}><img alt="Sass" src={Sass} className={classes.img}/>Sass</div>
              
              </div>
            </div>
          </div>
                   <div className={classes.card}>
            <div className={classes.cardcontent}>
              <h4>Others</h4>
              <div className={classes.groupImage}>
                <div className={classes.imgContainer}><img alt="Photoshop" src={Photoshop} className={classes.img}/>Photoshop</div>
                <div className={classes.imgContainer}><img alt="Illustrator" src={Illustrator} className={classes.img}/>Illustrator</div>
                <div className={classes.imgContainer}><img alt="Indesign" src={Indesign} className={classes.img}/>Indesign</div>
                <div className={classes.imgContainer}><img alt="GitHub" src={Git} className={classes.img}/>GitHub</div>
              </div>
            </div>
          </div>
		</div>
	</div>


)

export default skills;