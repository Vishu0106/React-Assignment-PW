// css import 
import './Image.css'
import { Link } from 'react-router-dom';

function Image({url,id}) {
    return (

        <>
        {
            url&&id?<Link to={`/${id}`}>
            <img className="image-home" src={url} />
            </Link>:<img className="image-home" src={url} />
        }
        </>
    )
}

export default Image;