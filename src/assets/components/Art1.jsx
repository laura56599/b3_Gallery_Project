import PropTypes from 'prop-types'
import art1 from '../assets/img/art1.jpg'

export const Art1 = ( props ) => {
    return (
        <img src={art1} alt="Escultura" className={props.className}/>
    )
}
 
Art1.propTypes = {
    className: PropTypes.string,
}
