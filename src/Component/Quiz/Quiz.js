import React from 'react';
import './Quiz.css';

const Quiz = (props) => {
    console.log(props);
    return (
        <div className="upper-part">
        <div className="answer-container">
        <div className="answer-text">
        <p onClick={()=>props.handleAddProduct(props.value)}>{props.value}</p>
        </div>
        </div>
        </div>
        
    );
};

export default Quiz;