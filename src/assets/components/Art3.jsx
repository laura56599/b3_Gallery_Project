import art3 from '../assets/img/art3.jpg'
import PropTypes from 'prop-types'

export const Art3 = (props) => {
    return (
        <img src={art3} alt="Escultura" className={props.className}/>
    )
}
 
Art3.propTypes = {
    className: PropTypes.string,
}