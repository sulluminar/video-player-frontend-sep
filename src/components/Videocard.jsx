import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteVideo } from '../services/allAPI';

function Videocard({displayVideo}) {
  console.log("1");
  console.log(displayVideo);
  const removeVideo = async(id)=>{
    const response = await deleteVideo(id)
  }
  return (
    <>
      <Card style={{ width: '18rem', height:"350px" }}>
        <Card.Img variant="top" height="250px" width="100%" src={displayVideo.url} />
        <Card.Body>
          <div className='d-flex align-items-center justify-content-evenly'> 
           <h6>{displayVideo.caption}</h6>
            <Button variant="danger" className='ms-5'
             onClick={()=>removeVideo(displayVideo.id)}>
              <i class="fa-solid fa-trash"></i>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default Videocard