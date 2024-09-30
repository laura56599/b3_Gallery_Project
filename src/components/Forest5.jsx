import forest5 from '../assets/img/forest5.jpg';
import PropTypes from 'prop-types';

export const Forest5 = ( { className } ) => {
  return (
    <img src={forest5} alt="Bosque" className={className} />
  )
}

Forest5.propTypes = {
  className: PropTypes.string
}