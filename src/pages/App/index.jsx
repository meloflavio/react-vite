import * as Styled from './styles';
import P from 'prop-types';

export const App = ({ children }) => {
  return <Styled.Container>{children}
  <button onClick={() => window.location='http://localhost:8000/saml/login'}/></Styled.Container>;
};

App.propTypes = {
  children: P.node.isRequired,
};
