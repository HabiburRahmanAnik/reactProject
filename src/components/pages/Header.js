import React from 'react';

const Header = () => {
    const profileHanlder = (e)=>{
        const menu = document.querySelector('.profile-container');
        menu.style.display='block';

        if(e.target !== menu){
            menu.style.display='none';
        }
    }
  return (
    <div className='header-content'>
      <div className="header">
        <div className="profile">
          <img onClick={profileHanlder}
            src="./165705284_1391399217860789_3212769307992041414_n.npg"
            alt="profile"
          />
        </div>
      </div>
      <div className="profile-container">
        <ul>
          <li>Habibur Rahman</li>
          <li>My Profile</li>
          <li>Change Password</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
