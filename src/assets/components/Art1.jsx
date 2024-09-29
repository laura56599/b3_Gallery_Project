import PropTypes from 'prop-types';
import art1 from '../assets/img/art1.jpg';

export const Art1 = ( {className} ) => {
    return (
        <img src={art1} alt="Escultura" className={className}/>
    )
}
 
Art1.propTypes = {
    className: PropTypes.string
}
