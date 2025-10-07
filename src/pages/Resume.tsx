import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

const Resume: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Resume</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      Resume page content
    </IonContent>
  </IonPage>
);

export default Resume;
