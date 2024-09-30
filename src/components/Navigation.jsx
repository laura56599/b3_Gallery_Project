import { Link } from 'react-router-dom';
import { Forest1 } from './Forest1';
import { Forest2 } from './Forest2';
import { Forest3 } from './Forest3';
import { Forest4 } from './Forest4';
import { Forest5 } from './Forest5';
import { Forest6 } from './Forest6';

export const Navigation = () => {
  return (
    <div className='container thumbnail-container mt-2'>
      <Link to='/forest1' className='links'>
        <figure className='thumbnail-image-size'>
          <Forest1 />
          <figcaption>Bosque 1</figcaption>
        </figure>
      </Link>
      <Link to='/forest2' className='links'>
        <figure className='thumbnail-image-size'>
          <Forest2 />
          <figcaption>Bosque 2</figcaption>
        </figure>
      </Link>
      <Link to='/forest3' className='links'>
        <figure className='thumbnail-image-size'>
          <Forest3 />
          <figcaption>Bosque 3</figcaption>
        </figure>
      </Link>
      <Link to='/forest4' className='links'>
        <figure className='thumbnail-image-size'>
          <Forest4 />
          <figcaption>Bosque 4</figcaption>
        </figure>
      </Link>
      <Link to='/forest5' className='links'>
        <figure className='thumbnail-image-size'>
          <Forest5 />
          <figcaption>Bosque 5</figcaption>
        </figure>
      </Link>
      <Link to='/forest6' className='links'>
        <figure className='thumbnail-image-size'>
          <Forest6 />
          <figcaption>Bosque 6</figcaption>
        </figure>
      </Link>
    </div>
  )
}
