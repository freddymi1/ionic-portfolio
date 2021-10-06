import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './design/theme/variables.css';
import './design/Home.scss'
import './design/Tabs.scss'
import './design/Menu.scss'
import './design/Competence.scss'
import './design/Amborger.scss'
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Menu } from './pages/Menu/Menu';
import { Skills } from './pages/Competence/Competence';
import { Experiences } from './pages/Experience/Experiences';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/menu" component={Menu}/>
        <Route exact path="/skills" component={Skills}/>
        <Route exact path="/experiences" component={Experiences}/>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
