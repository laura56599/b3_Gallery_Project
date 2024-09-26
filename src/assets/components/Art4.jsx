import art4 from '../assets/img/art4.jpg'
import PropTypes from 'prop-types'

export const Art4 = ( props ) => {
    return (
        <img src={art4} alt="Escultura" className={props.className}/>
    )
}
 
Art4.propTypes = {
    className: PropTypes.string,
}