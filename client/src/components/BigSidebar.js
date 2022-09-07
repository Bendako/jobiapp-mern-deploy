import React from 'react';

import Wrapper from '../assets/wrappers/BigSidebar';
import { useAppContext } from '../context/appContext';
import { NavLinks } from './index';

const BigSidebar = () => {
  const { showSidebar } = useAppContext();

  return (
    <Wrapper>
        <div 
          className={showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
          }
        >
          <div className='content'>
            <NavLinks />
          </div>
        </div>
    </Wrapper>
  )
};

export default BigSidebar;