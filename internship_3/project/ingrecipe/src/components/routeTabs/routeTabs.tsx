import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonLabel, IonRouterOutlet } from '@ionic/react';
import {Route} from 'react-router-dom';
import Home from '../../screens/home/Home';
import Icon from '../icon/Icon';
import IngredientSelector from '../../screens/ingredientSelector/IngredientSelector';
interface ContainerProps {
    sections: {icon: string, section: string}[];
}
const RouteTabs: React.FC<ContainerProps> = (props) => (
    <IonTabs>
    <IonRouterOutlet>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={IngredientSelector}/>
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