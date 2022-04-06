import {FlatColorIconsDonate,FlatColorIconsSalesPerformance,EpWalletFilled,IconParkOutlineExpenses} from './Icons';
function EvaluatedIcon(props){
    if(props.icon === 'EpWalletFilled'){
        return (<div className="icon">
                <EpWalletFilled></EpWalletFilled>
            </div>);
    }else if(props.icon==='FlatColorIconsDonate'){
        return (<div className="icon">
                <FlatColorIconsDonate></FlatColorIconsDonate>
            </div>);
    }else if(props.icon === 'FlatColorIconsSalesPerformance'){
        return (<div className="icon">
                <FlatColorIconsSalesPerformance></FlatColorIconsSalesPerformance>
            </div>);
    }else{
        return (<div className="icon">
                <IconParkOutlineExpenses className="yellow"></IconParkOutlineExpenses>
            </div>);
    }
}

export default EvaluatedIcon;