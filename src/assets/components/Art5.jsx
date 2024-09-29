import art5 from '../assets/img/art5.jpg?raw';
import PropTypes from 'prop-types';

export const Art5 = ({ className} ) => {
    return (
        <img src={art5} alt="Escultura" className={className}/>
    )
}
 
Art5.propTypes = {
    className: PropTypes.string
}