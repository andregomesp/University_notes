import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import {star, search} from 'ionicons/icons';
import {Route} from 'react-router-dom';
import Home from '../../screens/home/Home';
import Icon from '../icon/Icon';
interface ContainerProps {
    sections: {icon: string, section: string}[];
}
const RouteTabs: React.FC<ContainerProps> = (props) => (
    <IonTabs>
    <IonRouterOutlet>
        <Route path="/" component={Home} />
    </IonRouterOutlet>
        <IonTabBar slot="bottom">
            {props.sections.map((section, index) => {
                console.log(section);
                return (
                    <IonTabButton key={index} tab={section['section']}>
                        <Icon icon={section.icon}/>
                        <IonLabel>{section['section']}</IonLabel>
                    </IonTabButton>
                )
            })}
        </IonTabBar>
     </IonTabs>
)

export default RouteTabs;