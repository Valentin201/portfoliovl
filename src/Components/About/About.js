import React, {Component} from 'react';
import classes from './About.css';
import AnimatedLogo from './AnimatedLogo/AnimatedComputerLogo'
import Particules from '../Navigation/Particules/AboutParticules/AboutParticules';
import { withLocalize } from "react-localize-redux";
import AboutTranslations from "./AboutTranslation.json";
import { Translate } from "react-localize-redux";
import { renderToStaticMarkup } from "react-dom/server";
import LanguageButton  from '../Navigation/LanguageToggle/LanguageToggle';
import CV from './CV Valentin Fr.pdf'




class about extends Component {

	 constructor(props) {
    super(props);

    this.props.initialize({
      languages: [
        { name: "Français", code: "fr" },
        { name: "English", code: "en" }
      ],
      translation: AboutTranslations,
      options: { renderToStaticMarkup }
      
    });

     this.props.addTranslation(AboutTranslations);
  }


	render() {


return (
<div className={classes.about}>

<LanguageButton/>
	<div className={classes.container}>
	
		<div className={classes.presentation}>
		<div className={classes.aboutme}>
			<h1><Translate id="title"/></h1>
				<div className={classes.text}>
				<Translate id="content1"/>
				</div>
				<div className={classes.text}>
				<Translate id="content2"/>
				</div>
				<div className={classes.text}>
				<Translate id="content3"/>
				</div>
				<div className={classes.buttons}>
				<a href={CV} download={CV}>
    			<button className={classes.button}><Translate id="button"/></button>
    			</a>
<a   href="https://www.linkedin.com/in/valentin-lacheré" rel="noopener noreferrer" target="_blank">
    			<button className={classes.button} >Linkedin</button>
</a>
</div>
				</div>
				<div className={classes.AnimatedComputerlogo }>
							<AnimatedLogo />
			</div>
			<Particules className={classes.particule}/>
			</div>
			
	</div>
	</div>
	

)
}

}

export default withLocalize(about);