import React from 'react';
import * as PropTypes from 'prop-types';
import HeaderBr from '../../components/header/index.jsx';
import FooterBr from '../../components/footer';
import { theme } from '../../styles/theme.js';
import MenuBr from '../../components/menu';

export function Default({ children }) {
  return (
    <>
      <HeaderBr />
      <div className={'container-fluid'}>
        <MenuBr userRoles={[]} />
        <div
          style={theme.content}
          className={'container-fluid'}
          id="main-content"
        >
          {children}
        </div>
      </div>

      <FooterBr />
    </>
  );
}

Default.propTypes = { children: PropTypes.node };
