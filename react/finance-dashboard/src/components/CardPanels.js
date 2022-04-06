import './CardPanels.css';

import React, { Suspense } from "react";
import EvaluatedIcon from './DynamicIcons';

function CardPanels(props) {
    // const IconComponent = React.lazy(() => EpWalletFilled);
    
    return (
        <Suspense fallback={<div>Loading...</div>}>
        <div className={`card ${props.className}`} >
            <EvaluatedIcon icon={props.icon}></EvaluatedIcon>
            <h4>{props.name}</h4>
            <h1>{props.value}</h1>
        </div>
        </Suspense>
    );
}



export default CardPanels;