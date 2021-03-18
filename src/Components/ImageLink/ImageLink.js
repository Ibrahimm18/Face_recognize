import React from 'react';
import './ImageLink.css'

const ImageLink = ({ onInputChange, onButtonSubmit }) => {
	return (
       <div> 
       <p className='f4 red'>
       {'This MaGiC BoX Will DETeCT UR Image...Try IT..  '}
       </p>
       <div className = 'center'>
       <div className = ' form center pa3 br3 shadow-5'>
       <input className='f5 pa2 w-70 center' type = 'tex' onChange = {onInputChange}/>
       <button className = 'w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
       onClick = {onButtonSubmit}>
        MAGIC Applied </button> 
       </div>
       </div>
       </div>
       
       
		);
}

export default ImageLink;