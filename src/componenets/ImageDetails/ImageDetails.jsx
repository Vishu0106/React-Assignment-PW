// css import 
import './ImageDetails.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Image from '../Image/Image' 

function ImageDetails() {

    const {id} = useParams()
    const [photoDetails,setPhotoDetails] = useState({})

    async function downloadImageDetails(id) {
        
        const url=`https://api.slingacademy.com/v1/sample-data/photos/${id}`
        try {
            
            const response = await axios.get(url);
            
            const data = response.data;

            const photoDetails = data.photo;
            setPhotoDetails(photoDetails)
        } catch (error) {
            console.log('error occured while getting image detials...',error);
        }
    }

    useEffect(()=>{
        downloadImageDetails(id)
    },[id])

    return(
        <div className='details-wrapper'>

           <Image className='image-details' url={photoDetails.url} />
            <div>
           <div className='title'>
                {photoDetails.title}
           </div>
           <div className='discription'>
                {photoDetails.description}
           </div>
           <Link to='/' className='link-warapper'>
                <p className='back-button'>Back</p>
           </Link>
           </div>
        </div>
    )
}

export default ImageDetails