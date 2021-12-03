import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from 'components/common/common';
import { AppRoute } from 'constants/constants';
import Home from 'components/home/home';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import NotFound from 'components/not-found/not-found';
import { appTheme } from './common';
import * as S from './app.styled';

const App: React.FC = () => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <Router>
      <Switch>
        <Route exact path={AppRoute.Root()}>
          <Home />
        </Route>
        <Route exact path={AppRoute.DetailedQuest()}>
          <DetailedQuest />
        </Route>
        <Route exact path={AppRoute.Contacts()}>
          <Contacts />
        </Route>
        <Route path={AppRoute.NotFound()} exact>
          <NotFound />
        </Route>
        <Route>
          <Redirect to={AppRoute.NotFound()} />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
