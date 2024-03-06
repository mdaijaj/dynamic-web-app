import { useEffect, useState } from 'react';
import './CarouselComponent.css';
import axios from 'axios';


const Service = () => {
    const [servicedata, setServicedata] = useState([])

    const servieList = async () => {
        const response = await axios.get('/api/serviceList');
        console.log("response", response)
        let filterData = await response.data.data
        setServicedata(filterData)
    }
    
      useEffect(()=>{
        servieList()
      }, [])

    return (
        <>
        
        <div style={{textAlign:'center', justifyContent:'center', padding: "10px"}} class="row row-cols-1">
          <div className='' style={{padding: "20px"}}>
          <h1 style={{color: "white"}}> Our Services</h1>
            <h5>
          Your one-stop solution for business success in today's dynamic market. Our Services range from idea transformation to product enhancement:
          </h5>
          </div>
         
          {servicedata?.map((name, index) => (
            <div className="flip-card cols-6 ml-5" style={{borderRadius: "20px"}}>
              <div className="flip-card-inner" style={{borderRadius: "20px"}}>
                <div className="flip-card-front" style={{borderRadius: "20px"}}>
                  <div style={{width:"300px", height:"300px", background: 'skyblue', borderRadius: "20px", padding: "20px"}}>
                    <h3>{name.title}</h3> 
                    <p>{name.description}</p> 
                  </div>
                </div>
              <div className="flip-card-back" style={{borderRadius: "20px"}}>
                <h3 style={{margin: "20px",}}>More Details</h3>
              </div>
            </div>
          </div>
          ))}
          <div className='' style={{padding: "20px"}}>
              <h5>
              At Squbix Digital, we are dedicated to delivering exceptional services that empower businesses to thrive in the ever-evolving digital landscape.<br/>
              Reach out to us today to discuss your unique requirements and discover how our services can take your business to new heights.            </h5>
            </div>
        </div>
        
        </>
    );
};
export default Service;
