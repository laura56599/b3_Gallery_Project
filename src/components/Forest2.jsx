import forest2 from '../assets/img/forest2.jpg';
import PropTypes from 'prop-types';

export const Forest2 = ( { className } ) => {
  return (
    <img src={forest2} alt="Bosque" className={className} />
  )
}

Forest2.propTypes = {
  className: PropTypes.string
}