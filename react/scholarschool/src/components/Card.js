import './Card.css';
function Card(props){
    return (
        <div className='card'>
            <button>{props.button}</button>
            <h5>{props.premise}</h5>
        </div>
    );
}

export default Card;