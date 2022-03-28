import './CardPanels.css';
import {EpWalletFilled} from './Icons';
import React, { Suspense } from "react";

function CardPanels(props) {
    const IconComponent = React.lazy(() => EpWalletFilled);
    // const IconComponent2 = require(EpWalletFilled).default;
    //const ComponentToRender = Components[EpWalletFilled];
    // if(props.icon == "EpWalletFilled"){
    //     IconComponent = () => {return (<div className="icon">
    //             <EpWalletFilled></EpWalletFilled>
    //         </div>);}
    // }else{
    //     IconComponent = () => {return (<div className="icon">
    //             <EpWalletFilled></EpWalletFilled>
    //         </div>);}
    // }
    
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

function EvaluatedIcon(props){
    if(props.icon == 'EpWalletFilled'){
        return <EpWalletFilled></EpWalletFilled>;
    }
}

export default CardPanels;