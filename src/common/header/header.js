import React from 'react';
import './header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';


class Header extends React.Component
{
    render()
    {
        return(
            <div>
                <header className='app-header'>
                    <img src={logo} className='app-logo' alt='app-logo'></img>
                    <div className='login-btn'>
                        <Button variant='contained' color='default'>
                            Login
                        </Button>
                    </div>
                </header>
            </div>
            
            
        )
    }
};

export default Header;