import art5 from '../assets/img/art5.jpg'
import PropTypes from 'prop-types'

export const Art5 = ( props ) => {
    return (
        <img src={art5} alt="Escultura" className={props.className}/>
    )
}
 
Art5.propTypes = {
    className: PropTypes.string,
}