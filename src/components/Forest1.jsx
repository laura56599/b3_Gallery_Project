import forest1 from '../assets/img/forest1.jpg';
import PropTypes from 'prop-types';

export const Forest1 = ( { className } ) => {
  return (
    <img src={forest1} alt="Bosque" className={className} />
  )
}

Forest1.propTypes = {
  className: PropTypes.string
}