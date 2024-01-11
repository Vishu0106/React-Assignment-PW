// css import 
import { useEffect, useState } from 'react'
import './ImageList.css'
import axios from 'axios'

import Image from '../Image/Image'

const DEFAULT_URL = 'https://api.slingacademy.com/v1/sample-data/photos'



function ImageList() {

    const [offset,setOffset] = useState(0)


    

    function offSetComponent() {
        return [offset,setOffset];
     }

    const [photos,setPhotos] = useState([])

    async function dwonloadImageList(defaultUrl,offset) {

        const queryParams = {
            offset:offset,
            limit:20
        }
        
        try {

            const response = await axios.get(defaultUrl,{
                params: queryParams,});

            const data = response.data;

            const photos = data.photos.map((photos)=>photos)

           setPhotos(photos);
            
        } catch (err) {
            console.log('eeror occured while getting response',err)
        }

    }

    useEffect(()=>{
         dwonloadImageList(DEFAULT_URL,offset);
    },[offset])

    return(
        <div className='gallery-wrapper'>
            <div className='image-box'>
               
                {photos.map(p=><Image key={p.id} url={p.url} id={p.id}/>)}
            </div>
            <div className='button-wrapper'>
             
             <button onClick={()=>{
                 setOffset((prev)=>prev-20 < 0 ? 0 :prev-20)}}>Prev</button>
             <button onClick={()=>{setOffset((prev)=>prev+20>150?0:prev+20)}}>Next</button> 
                  
             </div>
        </div>
    )
}

export default ImageList;