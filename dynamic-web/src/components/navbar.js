import React, { useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import "../App.css"


const Navbar = ({}) => {
    const navigate = useNavigate()
    const cardata = localStorage.getItem("user")

    const handleLogout = () => {
        localStorage.removeItem('user')
        navigate('/signin')
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">
                        <img src="https://squbix.com/static/media/logo_textbyside_green.b4e827e094e3952c92a66327c6af0680.svg" width="100" height="100" className="d-inline-block align-top" alt="image path not found" />
                    </NavLink>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/main_menu">Main Menu</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/parking_ticket">About Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/parking_list">Blockchain </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/blogs">Blogs </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/Engagement">Engagement </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/Training">Training </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/Webinar">Webinar </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/add_service"> Add Service</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/add_crousel"> Add Crousel</NavLink>
                        </li>
                        </ul>
                        {!localStorage.getItem('user') ?
                            <form className='d-flex'>
                                <Link className='btn btn-dark mx-2' to="/add_user" role="button">Signup</Link>
                                <Link className='btn btn-dark mx-2' to="/login" role="button">Login</Link>
                            </form>
                            :
                            <>
                                
                                <button onClick={handleLogout} className='btn btn-dark'>Logout</button>
                                <h4 style={{ padding: "40px" }}>{`${JSON.parse(localStorage.getItem('user'))?.first_name} ${JSON.parse(localStorage.getItem('user'))?.last_name}`}</h4>
                                {/* <h4 style={{ padding: "40px" }}>{`${localStorage.getItem('user')}? ${JSON.parse(localStorage.getItem('user')).first_name} ${JSON.parse(localStorage.getItem('user'))?.last_name}`}</h4> */}
                                <form className='d-flex'>
                            </form>
                            </>
                        }
                    </div>
                </div>
            </nav>
           
        </>
    )
}



export default Navbar;
