import React, { useMemo } from 'react';
import { Row, Col, Menu } from 'react-dsgov';
import Logo from '../../assets/logo.svg';
import PropTypes from 'prop-types';
import { MenuId } from '../../styles/theme.js';

const menu = [
  {
    icon: 'fas fa-home',
    link: '/dashboard',
    label: 'Inicio',
  },
  {
    icon: 'fas fa-book-open',
    label: 'Administração',
    role: 'ROLE_LIST_USER_NORMAL',
    submenu: [
      {
        icon: 'fas fa-users',
        link: '/admin/usuarios',
        label: 'Usuários',
        role: 'ROLE_LIST_USER_NORMAL',
      },
      {
        icon: 'fas fa-key',
        link: '/admin/permissoes',
        label: 'Permissões',
        role: 'ROLE_LIST_PERMISSAO_NORMAL',
      },
    ],
  },
];

const filterMenu = (menuRoot, roles) => {
  return menuRoot.filter((i) => {
    if (i.submenu) {
      i.submenu = filterMenu(i.submenu, roles);
    }
    return true;
  });
};
/**
 * Componente que renderiza o menu que flutuante do sistema baseado no dsgov
 * */
const MenuBr = ({ userRoles }) => {
  const dataMenu = useMemo(() => filterMenu(menu, userRoles), [userRoles]);

  return (
    <Row>
      <Col>
        <Menu
          id={MenuId}
          shadow
          systemName=""
          systemLogoUrl={Logo}
          data={dataMenu}
          socialNetworks={[
            {
              link: '#',
              icon: 'fab fa-facebook-f',
              name: 'Facebook',
            },
            {
              link: '#',
              icon: 'fab fa-twitter',
              name: 'Twitter',
            },
            {
              link: '#',
              icon: 'fab fa-linkedin-in',
              name: 'Linkedin',
            },
            {
              link: '#',
              icon: 'fab fa-whatsapp',
              name: 'Whatsapp',
            },
          ]}
          info={
            <div className="text-center text-down-01">
              Todo o conteúdo deste site está publicado sob a licença{' '}
              <strong>Creative Commons Atribuição-SemDerivações 3.0</strong>
            </div>
          }
        />
      </Col>
    </Row>
  );
};
MenuBr.defaultProps = {
  userRoles: undefined,
};
MenuBr.propTypes = {
  userRoles: PropTypes.array,
};

export default MenuBr;
