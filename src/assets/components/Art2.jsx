import art2 from '../assets/img/art2.jpg'
import PropTypes from 'prop-types'

export const Art2 = ( props ) => {
    return (
        <img src={art2} alt="Escultura" className={props.className}/>
    )
}
 
Art2.propTypes = {
    className: PropTypes.string,
}