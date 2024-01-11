// css import 
import './Home.css'
import Image from '../Image/Image';
import ImageList from '../ImageList/ImageList';
import { Router } from 'react-router-dom';

function Home() {
    return(
        <>
        <h1 className='headear'>Gallery App</h1>  
        <p className="note-text" >**Click on particular photo to know the deatials**</p>   
        <ImageList/>
        </>
    )
}

export default Home;