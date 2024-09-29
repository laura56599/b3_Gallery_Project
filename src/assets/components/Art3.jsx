import art3 from '../assets/img/art3.jpg';
import PropTypes from 'prop-types';

export const Art3 = ({className}) => {
    return (
        <img src={art3} alt="Escultura" className={className}/>
    )
}
 
Art3.propTypes = {
    className: PropTypes.string
}