import React from 'react';

const Result = (props) => {
    return (
        <div>
          <p>Correct Answer :{props.correct.length}</p>
        </div>
    );
};

export default Result;