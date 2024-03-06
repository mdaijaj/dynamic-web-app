

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Textarea } from 'flowbite-react';

const ParkingTicketBook=()=>{
    let initial={ 
        title: "",
        description: "",
        service_type: ""
    }
    const [agentdata, setAgentdata] = useState(initial);
    const [formErrors, setFormErrors] = useState({});

    let name, value;
    const handleInput = (e) => {
        name = e.target.name
        value = e.target.value
        console.log("krrrrrrr...", value)
        setAgentdata({ ...agentdata, [name]: value })  //[] dynamic data for
    }

    let agent_data=localStorage.getItem("user");
    let agent_id;
    if(agent_data){
        agent_id=JSON.parse(agent_data)._id
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        const {
            title,
            description,
            service_type
        } = agentdata;


        const regInf = {
            method: "Post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                description,
                service_type
            })
        }
       
        const res = await fetch(`/api/add_service`, regInf);
        const result = await res.json()
        console.log("result", result)
        if (result.data) {
            toast.success('new candidate add is successfully', { autoClose: 1500 })
        }else{
            toast.info(result.message, { autoClose: 1500 })
        }
    }

    let parObj={
        color: "red",
        fontSize: "15px"
    }
    

        return (

        <>

        <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
            <h1>Add Service</h1>            
            <div className="container" style={{ marginTop: "10px" }}>
                <div className="mb-4 row">
                    <div className="col-6 sm-4">
                    <label for="formGroupExampleInput" class="form-label">Title</label>
                        <input type="text"
                            className="form-control"
                            id="inputName"
                            onChange={handleInput}
                            name='title'
                            placeholder="title" />
                        <p style={parObj}>{formErrors.title}</p>
                    </div>
                    <div className="col-6 sm-4">
                        <label for="formGroupExampleInput" class="form-label"> Description</label>
                        <Textarea
                        className="form-control" 
                        id="description" 
                        onChange={handleInput}
                        name='description'
                        placeholder="description.." />
                        <p style={parObj}>{formErrors.description}</p>
                    </div>
                    <div className="col-6 sm-4">
                        <label for="formGroupExampleInput" class="form-label">
                        Service Type
                        </label>
                        <select
                            className="form-control"
                            id="service_type"
                            onChange={handleInput}
                            name="service_type"
                            aria-label="select example"
                            >
                            <option selected>Service Type</option>
                            <option value="crousel">crousel</option>
                            <option value="service">service</option>
                            <option value="core">core</option>
                            <option value="offer">offer</option>
                            <option value="stack">stack</option>
                        </select>
                    </div>
                </div>
                </div> 

                <div className="mb-4 row">
                    <div className="col-sm-8">
                        <button className="btn btn-info" onClick={handleSubmit} style={{marginRight: "75px"}}>Submit</button>
                        <button className="btn btn-danger">Skip</button>
                    </div>
                </div>
                <ToastContainer />
        </div>
        
        </>
      
    )
}

export default ParkingTicketBook;