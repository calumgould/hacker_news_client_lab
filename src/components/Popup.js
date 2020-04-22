/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

const Popup = (props) => {
    return ( 
        <div>
            <iframe src={props.url}></iframe>
        </div>
     );
}
 
export default Popup;