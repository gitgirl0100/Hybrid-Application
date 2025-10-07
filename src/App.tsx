import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { personOutline, folderOutline, documentTextOutline, settingsOutline } from 'ionicons/icons';

import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Settings from './pages/Settings';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/" render={() => <Redirect to="/profile" />} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="profile" href="/profile">
            <IonIcon icon={personOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>

          <IonTabButton tab="projects" href="/projects">
            <IonIcon icon={folderOutline} />
            <IonLabel>Projects</IonLabel>
          </IonTabButton>

          <IonTabButton tab="resume" href="/resume">
            <IonIcon icon={documentTextOutline} />
            <IonLabel>Resume</IonLabel>
          </IonTabButton>

          <IonTabButton tab="settings" href="/settings">
            <IonIcon icon={settingsOutline} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
