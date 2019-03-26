import React from 'react';

const Punchline = (props) => {
    return (
        <div className='punchline'>
            {/* <Button onClick={props.show} className='btn'>Show</Button> */}
            {props.showPunchline && (
                <h2>{props.punchline}</h2>
            )}
        </div>
    );
};

export default Punchline;