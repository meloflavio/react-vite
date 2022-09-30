import React, { useEffect, useState } from 'react';
import { Header } from 'react-dsgov';
import AvatarComponent from '../../components/avatar';
import authConfig from '../../services/authConfig';
import Logo from '../../assets/logo.svg';
/**
 * Componente que renderiza a header do sistema baseado no dsgov
 * @returns {JSX.Element}
 * @constructor
 */
const HeaderBr = () => {
  const [compact, setCompact] = useState(false);

  function pushToLogout() {
    window.location.href = authConfig.logoutURL;
  }
  function pushToLogin() {
    window.location.href = authConfig.authURL;
  }
  useEffect(() => {
    const handleScroll = () => {
      setCompact(110 <= window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Header
        urlLogo={Logo}
        systemName=""
        title="Menu de navegação"
        quickAccessLinks={null}
        features={undefined}
        density={'large'}
        loggedIn={true}
        onClickLogin={() => {
          pushToLogin();
        }}
        showSearchBar={false}
        avatar={<AvatarComponent pushToLogout={pushToLogout} />}
        subTitle={''}
        compact={compact}
      />
    </>
  );
};

export default HeaderBr;
