import './Card.css';
import foto1 from '../img/foto1.png'

function Card({img, name, description }) { 
    return (
    <div className="card__container">
        <div>
           <img className="card__img" src= {img} alt="" ></img>
           <h3 className='card__name'>{name}</h3>
        </div>
        <div className='card__content'>
            <p className='card__icon' >🐱‍💻🐱‍💻🐱‍💻🐱‍💻🐱‍💻</p>
            <p  className='card__description'>{description}</p>
        </div>
    </div>
    
        
    )
}

export default Card;
