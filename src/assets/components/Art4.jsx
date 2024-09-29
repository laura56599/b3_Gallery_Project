import art4 from '../assets/img/art4.jpg';
import PropTypes from 'prop-types';

export const Art4 = ({className}) => {
    return (
        <img src={art4} alt="Escultura" className={className}/>
    )
}
 
Art4.propTypes = {
    className: PropTypes.string
}