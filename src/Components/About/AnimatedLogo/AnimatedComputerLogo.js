import React from 'react';
import ReactVivus from 'react-vivus';
import svg from './Computer_logo.svg';


const intro = (props) => (

	<div >
	 <ReactVivus
    id="foo"
    option={{
      file: svg,
      animTimingFunction: 'EASE',
      type: 'delayed',
      onReady: console.log,
      duration: 700
    }}
    style={{ height: '100%', width: '100%' }}
    callback={console.log}
  />
	</div>


)

export default intro;