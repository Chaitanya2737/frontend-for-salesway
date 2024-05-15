import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { PiChartDonutFill, PiSquaresFourFill } from 'react-icons/pi';
import { IoStatsChartSharp } from 'react-icons/io5';
import { FaPlug } from 'react-icons/fa';
import { IoIosList } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Menu = () => {
    const location = useLocation();
    const history = useNavigate();

    const [routes, setRoutes] = useState("");

    useEffect(() => {
        // Navigate to the default route when the component mounts
        navigateTo(routes);
    },[]); // Add an empty dependency array to ensure useEffect runs only once

    const navigateTo = (route) => {
        history(route);
        setRoutes(route);
    };

    return (
        <div>
            <Typography style={{ color: 'gray' }} variant="p" color="initial">
                Menu
            </Typography>

            <nav className="Navbar">
                <ul>
                    <li
                        onClick={() => navigateTo('dashboard')}
                        className={location.pathname === '/dashboard' ? 'active' : ''}
                    >
                        <span>
                            <PiSquaresFourFill style={{ width: '22px', height: '22px', }}  />
                        </span>
                        <Typography
                            variant="h6"
                            color="initial"
                            style={{
                                paddingLeft: '20px',
                                paddingBottom: '6px',
                                fontWeight: 500,
                                color : "gray"
                            }}
                           
                        >
                            Dashboard
                        </Typography>
                    </li>
                    <li onClick={() => navigateTo('campaigns')}
                    className={location.pathname === '/campaigns' ? 'active' : ''}>
                        <span>

                        <IoStatsChartSharp style={{ width: '20px', height: '20px' }} />
                        </span>
                        <Typography
                            variant="h6"
                            color="initial"
                            style={{ paddingLeft: '20px', paddingBottom: '6px', color: '#726c6c' }}
                            
                        >
                            Campaigns
                        </Typography>
                    </li>
                    <li onClick={() => navigateTo('flow')}
                    
                    className={location.pathname === '/flow' ? 'active' : ''}>
                        <span>

                        <PiChartDonutFill style={{ width: '20px', height: '20px' }} />
                        </span>
                        <Typography
                            variant="h6"
                            color="initial"
                            style={{ paddingLeft: '20px', paddingBottom: '6px', color: '#726c6c' }}
                          
                        >
                            Flow
                        </Typography>
                    </li>
                    <li onClick={() => navigateTo('integration')}
                    
                    className={location.pathname === '/integration' ? 'active' : ''}>
                        <span>

                        <FaPlug style={{ width: '20px', height: '20px' }} />
                        </span>
                        <Typography
                            variant="h6"
                            color="initial"
                            style={{ paddingLeft: '20px', paddingBottom: '6px', color: '#726c6c' }}
                           
                        >
                            Integration
                        </Typography>
                    </li>
                    <li onClick={() => navigateTo('customers')}
                    
                    className={location.pathname === '/customers' ? 'active' : ''}>
                        <span>

                        <IoIosList style={{ width: '20px', height: '20px' }} />
                        </span>
                        <Typography
                            variant="h6"
                            color="initial"
                            style={{ paddingLeft: '20px', paddingBottom: '6px', color: '#726c6c' }}
                            
                        >
                            Customers
                        </Typography>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;