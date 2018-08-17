import React, {Component} from 'react';
import classes from './Work.css'; 

import { Card, Button, CardImg, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
import LanguageToggle  from '../../Components/Navigation/LanguageToggle/LanguageToggle';
import Worktranslation from './WorkTranslation.json';
import { renderToStaticMarkup } from "react-dom/server";
import { Translate } from "react-localize-redux";
import { withLocalize } from "react-localize-redux";
import facedetector from './Face-detector.png';
import Burger from './Burger-Builder.png';
import Robot from './Robofriends.png';
import Valentin from './Valentin.png';
import { NavLink } from 'react-router-dom';


class work extends Component {

   constructor(props) {
    super(props);

    this.props.initialize({
      languages: [
        { name: "Français", code: "fr" },
        { name: "English", code: "en" }
      ],
      translation: Worktranslation,
      options: { renderToStaticMarkup }
      
    });

     this.props.addTranslation(Worktranslation);
  }


  render() {

return (
<div className={classes.work}>
<LanguageToggle/> 
<div className={classes.container} id="container">
  
    <CardDeck className={classes.CardDeck}>
      <Card className={classes.Card}>
        <CardImg  className={classes.CardImg}  src={Burger} alt="Card image cap" />
        <CardBody className={classes.CardBody}>
          <h2>Burger Builder</h2>
          <CardSubtitle className={classes.CardSubtitle}><Translate id="underTitle1"/></CardSubtitle>
          <CardText className={classes.tools}>
         React/Redux | MongoDB | Bootstrap
          </CardText>
           <CardText className={classes.description}>
              <Translate id="content1"/>
          </CardText>
         <div className={classes.btn}>
                  <a rel="noopener noreferrer" target="_blank" href="https://react-burger-a24d6.firebaseapp.com/" >
                  <Button className={classes.button}><Translate id="button"/></Button></a>
         </div>
        </CardBody>
      </Card>
      <Card className={classes.Card}>
        <CardImg className={classes.CardImg} src={facedetector} alt="Card image cap" />
        <CardBody className={classes.CardBody}>
          <h2>Face Detector</h2>
          <CardSubtitle className={classes.CardSubtitle}><Translate id="underTitle2"/></CardSubtitle>
           <CardText className={classes.tools}>
           React/Redux | PostGreSQL| Bootstrap
          </CardText>
          <CardText className={classes.description}>
          <Translate id="content2"/>
           </CardText>
         <div className={classes.btn}>
             <a rel="noopener noreferrer" target="_blank"  href="https://smart-brain-master.herokuapp.com/" >
             <Button className={classes.button}><Translate id="button"/></Button></a>
         </div>
        </CardBody>
      </Card>
      <Card className={classes.Card}>
        <CardImg  className={classes.CardImg} src={Robot} alt="Card image cap" />
        <CardBody className={classes.CardBody}>
         <h2>RobotFriends</h2>
           
          <CardSubtitle className={classes.CardSubtitle}><Translate id="underTitle3"/></CardSubtitle>
            <CardText className={classes.tools}>
          React | CSS
          </CardText>
          <CardText className={classes.description}>
            <Translate id="content3"/>
          </CardText>
         <div className={classes.btn}>
                   <a   href="https://robotfriends-4210d.firebaseapp.com" rel="noopener noreferrer" target="_blank"  >
                   <Button className={classes.button}><Translate id="button"/></Button></a>
         </div>
        </CardBody>      
        </Card>
              <Card className={classes.Card}>
        <CardImg  className={classes.CardImg} src={Valentin} alt="Card image cap" />
        <CardBody className={classes.CardBody}>
          <h2>Portfolio</h2>
          <CardSubtitle className={classes.CardSubtitle}><Translate id="underTitle4"/></CardSubtitle>
             <CardText className={classes.tools}>React/Redux | Bootstrap | CSS | Responsive | Mobile Friendly
          </CardText>
          <CardText className={classes.description}>
            <Translate id="content4"/>
          </CardText>
         <div className={classes.btn}>
         <NavLink  exact to="/" ><Button className={classes.button}><Translate id="button"/></Button></NavLink>
         </div>
        </CardBody>      
        </Card>
    </CardDeck>
    </div>
   </div>
)};
};


export default withLocalize(work);

