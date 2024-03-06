import axios from 'axios';
import './core_value.css'
import { useEffect, useState } from 'react';

const CoreValue = () => {
    const [servicedata, setServicedata] = useState([])

    const servieList = async () => {
        const response = await axios.get('/api/corevaluellist');
        console.log("response", response)
        let filterData = await response.data.data
        console.log("filterData...", filterData)
        setServicedata(filterData)
    }
    
 

    let mainObj={
        height: "320px", width: "400px", borderRadius: "15px", margin: "50px"
    }

    useEffect(()=>{
        servieList()
      }, [])


    return (
        <>
        <div className="main">
            <h1>Our CoreValues</h1>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                {servicedata?.map((item,index)=>(
                <div class="col-4">
                    <div class="card" style={mainObj}>
                        <div class="card-body">
                            <h5 class="card-title">{item.title}</h5>
                            <img src={item.logo} ></img>
                            <p class="card-text">{item.description}</p>
                        </div>
                    </div>
                </div>
                ))}
                </div>
            <div>
                <h5>
                At Squbix Digital, we are dedicated to delivering exceptional CoreValues that empower businesses to thrive in the ever-evolving digital landscape. Reach out to us today to discuss your unique requirements and discover how our CoreValues can take your business to new heights.
                </h5>
            </div>
            </div>
        </>
    );
};
export default CoreValue;
