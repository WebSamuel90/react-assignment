import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button onClick={props.onClick} className='btn'>{props.children}</button>
        </div>
    );
};

export default Button;