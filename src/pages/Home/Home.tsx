import { useNavigate } from 'react-router-dom';
import { Gear } from '../../assets/icons/Gear';
import withTransition from '../../HOC/withTransition';
import { Spotify } from '../../assets/icons/Spotify';

import {
  Container,
  Header,
  HeaderContent,
  LogoContainer,
  Sidebar,
  ContentBlock,
  SettingsButton,
} from './Home.styles';

function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <LogoContainer>
            <a>
              <Spotify width="32px" height="32px" />
            </a>
          </LogoContainer>
          <div>Busqueda</div>
          <SettingsButton onClick={() => navigate('/settings')}>
            <Gear width="1.5em" height="1.5em" />
          </SettingsButton>
        </HeaderContent>
      </Header>
      <Sidebar>Item 2</Sidebar>
      <ContentBlock>Item 3</ContentBlock>
      <ContentBlock css={{ width: '280px' }}>Item 4</ContentBlock>
    </Container>
  );
}

export default withTransition(Home);
