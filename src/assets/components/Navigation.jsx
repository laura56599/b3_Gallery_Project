import { Link } from 'react-router-dom';
import { Art1 } from './Art1';
import { Art2 } from './Art2';
import { Art3 } from './Art3';
import { Art4 } from './Art4';
import { Art5 } from './Art5';
import { Art6 } from './Art6';

export const Navigation = () => {
  return (
    <div className='container thumbnail-container mt-2'>
      <Link to='/art1' className='links'>
        <figure className='thumbnail-image-size'>
          <Art1 />
          <figcaption>Art 1</figcaption>
        </figure>
      </Link>
      <Link to='/art2' className='links'>
        <figure className='thumbnail-image-size'>
          <Art2 />
          <figcaption>Art 2</figcaption>
        </figure>
      </Link>
      <Link to='/art3' className='links'>
        <figure className='thumbnail-image-size'>
          <Art3 />
          <figcaption>Art 3</figcaption>
        </figure>
      </Link>
      <Link to='/art4' className='links'>
        <figure className='thumbnail-image-size'>
          <Art4 />
          <figcaption>Art 4</figcaption>
        </figure>
      </Link>
      <Link to='/art5' className='links'>
        <figure className='thumbnail-image-size'>
          <Art5 />
          <figcaption>Art 5</figcaption>
        </figure>
      </Link>
      <Link to='/art 6' className='links'>
        <figure className='thumbnail-image-size'>
          <Art6 />
          <figcaption>Art 6</figcaption>
        </figure>
      </Link>
    </div>
  )
}