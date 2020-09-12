import React from 'react';
import './header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const TabContainer = (props) => {
    return(
        <Typography component="div" style={{padding: 0, textAlign:'center'}}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}

class Header extends React.Component
{

    constructor()
    {
        super();
        this.state = {
            modalIsOpen : false,
            value : 0,
            userNameRequired: 'dispNone',
            username: ''
        };
    }

    openModalHandler = () => {
        this.setState({modalIsOpen: true})
    }

    closeModalHandler = () => {
        this.setState({modalIsOpen: false})
    }

    tabChangeHandler = (event, value) => {
        this.setState({value})
    }

    loginClickHandler = () => {
        this.state.username === '' ? this.setState({userNameRequired:'dispBlock'}) : this.setState({userNameRequired:'dispNone'});
    }

    userInputChangeHandler = (e) => {
        this.setState({username: e.target.value})
    }

    render()
    {
        return(
            <div>
                <header className='app-header'>
                    <img src={logo} className='app-logo' alt='logo'></img>
                    <div className='login-btn'>
                        <Button variant='contained' color='default' onClick={this.openModalHandler}>
                            Login
                        </Button>
                    </div>
                </header>
                <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel='Login' onRequestClose={this.closeModalHandler} style={customStyles}>
                        
                    <Tabs className='tabs' value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label='Login' />
                        <Tab label='Register' />
                    </Tabs>
                    {this.state.value === 0 && 
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor='username'>Username</InputLabel>
                            <Input id='username' type='text' autoComplete='off' username={this.state.username} onChange={this.userInputChangeHandler}></Input>
                            <FormHelperText className={this.state.userNameRequired}><span class='red' >Required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor='password'>Password</InputLabel>
                            <Input id='password' type='password' autoComplete='off'></Input>
                        </FormControl><br/><br/>
                        <Button variant='contained' color='primary' onClick={this.loginClickHandler}>
                            Login
                        </Button>
                    </TabContainer>}

                </Modal>
            </div>
            
            
        )
    }
};

export default Header;