import React from 'react';

import './Header.scss';

import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';

const Header = () => {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon className='header__icon' fontSize='large'/>
      </IconButton>
      <img
        className='header__logo'
        src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
        alt="tinder logo"
      />
      <IconButton>
        <ForumIcon className='header__icon' fontSize='large'/>
      </IconButton>
    </div>
  );
}

export default Header;