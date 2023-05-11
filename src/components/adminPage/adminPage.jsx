import React, { useRef, useState, useEffect } from 'react';
import dataObj from "../../data/sidebar.json";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";


const HomeScreen = () => {
    const [data, setData] = useState(dataObj);
    const [collapse, setCollapse] = useState(false);
    const navRef = useRef();
    const navigate = useNavigate();
    // Logout | Clearing Session Storage, just so will have to re-register before login
    const handleLogout = () => {
        sessionStorage.clear();
    }



    // Sidebar Active Btn
    const sidbarActive = (id) => {
        setData(
            data.map((element) => {
                if (element.id === id) {
                    element.active = true;
                }
                else {
                    element.active = false;
                }
                return element;
            })
        );
    }


    return (
        <section id='home-screen' className='row'>

            <div id='sidebar' className="col-12 col-md-2 d-flex flex-column flex-shrink-0 p-3 bg-dark">

                <div className='d-flex justify-content-between align-items-center'>
                    <Link
                        className="text-decoration-none text-white"
                    >
                        HazelSoft
                    </Link>

                    <GiHamburgerMenu
                        onClick={() => setCollapse(!collapse)}
                        className='GiHamburgerMenu'
                    />
                </div>
                <hr />
                <ul
                    ref={navRef}
                    className={collapse ?
                        'nav nav-pills flex-column mb-auto' :
                        'nav nav-pills flex-column mb-auto hiding-navbar'
                    }
                >
                    {data.map((e) => (
                        <li className='nav-item' key={e.id}>
                            <Link
                                to={e.name !== "Users" ? "/adminpage/" + e.name : "/adminpage"}
                                onClick={() => sidbarActive(e.id)}
                                className={e.active ? 'nav-link active text-white' : 'nav-link text-white'}>
                                {e.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <hr />
                <Link
                    id='logut-link'
                    to={"/"}
                    onClick={handleLogout}
                    className="text-decoration-none text-white"
                >
                    Log Out
                </Link>

            </div>
            <Outlet />

        </section>
    )
}

export default HomeScreen