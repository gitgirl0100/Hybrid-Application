import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

const Projects: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Projects</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      Projects page content
    </IonContent>
  </IonPage>
);

export default Projects;
