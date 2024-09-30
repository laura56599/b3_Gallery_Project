import forest4 from '../assets/img/forest4.jpg';
import PropTypes from 'prop-types';

export const Forest4 = ( { className } ) => {
  return (
    <img src={forest4} alt="Bosque" className={className} />
  )
}

Forest4.propTypes = {
  className: PropTypes.string
}