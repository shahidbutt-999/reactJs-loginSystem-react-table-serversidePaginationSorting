import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from "../../store/actions/actionTypes";
import dataObj from "../../Data/Sidebar.json";
import { Link, Outlet } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";



const HomeScreen = (props) => {

    const [data, setData] = useState(dataObj);
    const [collapse, setCollapse] = useState(false);
    const navRef = useRef();
    // Logout | Clearing Local Storage, just so will have to re-register before login
    const handleLogout = () => {
        window.localStorage.clear();
        props.onLogOut();
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
                                to={e.name !== "Dashboard" ? "/adminpage/" + e.name : "/adminpage"}
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

const mapStateToProps = (state) => {

    return {
        isLoggedIn: state.isAuthorize.isLoggedIn,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        // dispatching actions returned by action creators
        onLogOut: () => dispatch({ type: actionTypes.LOG_OUT }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);