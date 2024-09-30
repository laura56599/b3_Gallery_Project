import forest6 from '../assets/img/forest6.jpg';
import PropTypes from 'prop-types';

export const Forest6 = ( { className } ) => {
  return (
    <img src={forest6} alt="Bosque" className={className} />
  )
}

Forest6.propTypes = {
  className: PropTypes.string
}