import forest3 from '../assets/img/forest3.jpg';
import PropTypes from 'prop-types';

export const Forest3 = ( { className } ) => {
  return (
    <img src={forest3} alt="Bosque" className={className} />
  )
}

Forest3.propTypes = {
  className: PropTypes.string
}