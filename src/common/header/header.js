import React from 'react';
import './header.css';
import Button from '@material-ui/core/Button';

class Header extends React.Component
{
    render()
    {
        return(
            <div>
                <Button variant='contained' color='default'>Login</Button>
            </div>
        )
    }
};

export default Header;