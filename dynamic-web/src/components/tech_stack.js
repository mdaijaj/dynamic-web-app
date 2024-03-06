import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const TechStack=()=>{
    const [servicedata, setServicedata] = useState([])

    const servieList = async () => {
        const response = await axios.get('/api/techList');
        let filterData = await response.data.data
        setServicedata(filterData)
    }

    const navigationFunc= async(item)=>{
        const response = await axios.get('/api/techList');
        let filterData = await response.data.data
        console.log("kkkkkkkkkkk", filterData)
        setServicedata(filterData)
    }

    let logoList=[
        "data:image/png;base64,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",
        "data:image/png;base64,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",
        "data:image/jpeg;base64,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",
    ]
    
      useEffect(()=>{
        servieList()
        
      }, [])

    return (
        <>
        <div className="main">
            <h1>Our Tech Stack</h1>

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
                <NavLink class="navbar-brand" to="#" style={{marginLeft: "40%", padding: "10px"}}>Navbar</NavLink>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbar">
                    <ul class="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" >Backend</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/#">Fronted</NavLink>
                    </li> 
                    <li className="nav-item">
                        <NavLink className="nav-link " aria-current="page" to="/#">Blockchain</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " aria-current="page" to="/#">Cloud</NavLink>
                    </li>
                    </ul>
                </div>
            </nav>



        <div style={{textAlign:'center', justifyContent:'center', padding: "10px"}} class="row row-cols-1">
          {servicedata?.map((name, index) => (
            <div className="flip-card cols-4 ml-5" style={{borderRadius: "20px"}}>
            <div className="flip-card-inner" style={{borderRadius: "20px"}}>
            <div className="flip-card-front" style={{borderRadius: "20px"}}>
            <div style={{width:"300px", height:"300px", background: 'skyblue', borderRadius: "20px "}}>
              <h4>{name.title}</h4> 
              <img style={{borderRadius: "50%"}} src={logoList[index]}></img>
            </div>
            </div>
            <div className="flip-card-back" style={{borderRadius: "20px", }}>
            <NavLink style={{margin: "20px", color: "white", fontSize: "20px"}}>More Details</NavLink>
            </div>
            </div>
          </div>
          ))}
        </div>
       
        </div>
           </>
    )
}
export default TechStack;