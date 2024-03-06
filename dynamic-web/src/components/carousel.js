import { useEffect, useState } from 'react';
import './CarouselComponent.css';
import axios from "axios";



const CarouselComponent=()=> {
  const [servicedata, setServicedata] = useState([])

  let arr=[
    "https://squbix.com/static/media/OurProducts.280be9f036a51e2f908c.gif", 
    "https://squbix.com/static/media/Consultancy.ff859984439a013883e4.gif",
    "https://squbix.com/static/media/TrainingAndEdu.33feca9190168ab80dda.gif" 
  ]

  const servieList = async () => {
    const response = await axios.get('/api/crousellist');
    let filterData = await response.data.data
    setServicedata(filterData)
  }

  useEffect(()=>{
    servieList()
  }, [])


  return (
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner ">
        <div class="carousel-item active">
          <div className='row'>
            <div className='col-6' style={{margin: "auto",}}>
              <h1> Product  | Service | Solution</h1>
              <p> how are you dear Some representative placeholder content for the first slide</p>
              <h5>First slide label</h5>
            </div>
            <div className='col-6'>
              <img src={arr[0]} alt="..." style={{height: "400px", backgroundColor: "#061121"}}/>
            </div>
          </div>
        </div>

      <div class="carousel-item">
        <div className='row'>
          <div className='col-6' style={{margin: "auto"}}>
            <h1> Blockchain Consultancy</h1>
            <p> how are you dear Some representative placeholder content for the first slide</p>
            <h5>Second slide label</h5>
          </div>
          <div className='col-6'>
            <img src={arr[1]}  style={{height: "400px", backgroundColor: "#061121"}} alt="..."/>
          </div>
          </div>
      </div>
        
      <div class="carousel-item">
        <div className='row'>
          <div className='col-6' style={{margin: "auto"}}>
            <h1> Training And Educations</h1>
            <p> how are you dear Some representative placeholder content for the first slide</p>
            <h5>Third slide label</h5>
          </div>
          <div className='col-6'>
            <img src={arr[2]} style={{height: "400px", backgroundColor: "#061121"}}  alt="..."/>
          </div>     
        </div>
      </div>
    </div>

      <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </button>
    </div>
  );
}


export default CarouselComponent;