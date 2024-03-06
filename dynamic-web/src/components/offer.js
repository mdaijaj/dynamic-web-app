import { useEffect, useState } from 'react';
import './CarouselComponent.css';
import axios from 'axios';


const Offer = () => {
    const [servicedata, setServicedata] = useState([])

    const servieList = async () => {
        const response = await axios.get('/api/offerList');
        let filterData = await response.data.data
        setServicedata(filterData)
    }
    
      useEffect(()=>{
        servieList()
      }, [])

    return (
        <>
         
      <div style={{textAlign:'center', justifyContent:'center', padding: "10px"}} class="row row-cols-1">
        <h1 style={{color: 'white'}}> What We Offer</h1>
          {servicedata?.map((name, index) => (
            <div className="flip-card cols-4 ml-5" style={{borderRadius: "20px"}}>
            <div className="flip-card-inner" style={{borderRadius: "20px"}}>
            <div className="flip-card-front" style={{borderRadius: "20px"}}>
            <div style={{width:"300px", height:"300px", background: 'skyblue', borderRadius: "20px", padding: "30px"}}>
              <h4>{name.title}</h4> 
              <p>{name.description}</p> 
            </div>
            </div>
            <div className="flip-card-back" style={{borderRadius: "20px"}}>
            <button style={{marginTop: "100px"}} className='btn btn-info'>Learn More</button>
            </div>
            </div>
          </div>
          ))}
        </div>
        </>
    );
};
export default Offer;
