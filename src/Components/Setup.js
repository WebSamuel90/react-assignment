import React from 'react';

const Setup = (props) => {
    return (
        <div className='setup'>
            {/* <Button onClick={props.fetchJoke}> New Joke </Button> */}
            <h1>{props.setup}</h1>
        </div>
    );
};

export default Setup;