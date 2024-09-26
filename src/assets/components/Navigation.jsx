import { link } from 'react-router-dom';
import { Art1 } from './Art1';

export const Navigation = () = => {
    return (
        <div className='container thumbnail-container mt-2'>
            <link to='/art1' classname='link'>
                <figure className='thumbnail-image-size'>
                    <Art1></Art1>
                    <figcaption> Art 1</figcaption>
                </figure>
            </link>
        </div>
    )
}