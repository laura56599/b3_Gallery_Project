import art6 from '../assets/img/art6.jpg';
import PropTypes from 'prop-types';

export const Art6 = ({className}) => {
    return (
        <img src={art6} alt="Escultura" className={className}/>
    )
}
 
Art6.propTypes = {
    className: PropTypes.string
} 