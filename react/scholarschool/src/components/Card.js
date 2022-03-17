import './Card.css';
function Card(props){
    return (
        <div className='card'>
            {/* <button>{props.button}</button> */}
            <button><IcSharpPlus></IcSharpPlus></button>
            <h5>{props.premise}</h5>
        </div>
    );
}


export function IcSharpPlus(props) {
    return (
      <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"></path></svg>
    )
  }
export default Card;