import React from "react";
import { withLocalize } from "react-localize-redux";
import classes from './LanguageToggle.css';


const LanguageToggle = ({ languages, activeLanguage, setActiveLanguage }) => (
 <div className={classes.container}>
  <div className={classes.selector}>
      <div key={'fr'}>
        <button   autoFocus className={classes.language1} onClick={() => setActiveLanguage('fr')}>FR</button>
      </div>
      <div key={'en'}>
        <button  className={classes.language2} onClick={() => setActiveLanguage('en')}>ENG</button>
      </div>
   </div>
  </div>
)




export default withLocalize(LanguageToggle);