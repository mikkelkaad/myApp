import '../styles/Card.css';

export const Card = (props)=>{
    return (
        <img  className='card' src={props.cardUrl} alt={props.cardAlt} onClick={props.func} >
        </img>  
    )
};