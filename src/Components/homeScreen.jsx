import React from 'react';
import './homeScreen.css';
import { useState } from 'react';
import dataObj from "../data/sidebar.json";
import { Link, Outlet } from 'react-router-dom';


const HomeScreen = () => {
    // console.log(data);
    const [data, setData] = useState(dataObj);
    const handleLogout = () => {
        sessionStorage.clear();
    }
    const sidbarActive = (element, id) => {
        setData(
            data.map((element) => {
                if (element.id === id) {
                    element.active = true;
                    return element;
                }
                element.active = false;
                return element;
            })
        );
    }
    return (
        <section id='home-screen' className='row'>

            <div id='sidebar' className="col-2 d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">

                <Link
                    to={"/"}
                    onClick={handleLogout}
                    className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                >
                    Log Out
                </Link>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    {data.map((e) => (
                        <li className='nav-item' key={e.id}>
                            <Link
                                to={e.id !== 0 ? "/homescreen/" + e.id : "/homescreen"}
                                onClick={(innerElm) => sidbarActive(innerElm, e.id)}
                                className={e.active === true ? 'nav-link active text-white' : 'nav-link text-white'}>
                                {e.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <hr />

            </div>

            <Outlet />

        </section>
    )
}

export default HomeScreen