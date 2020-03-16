import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/react';
import Icon from '../icon/Icon';
import { redirectUrl } from './redirector';


let sections: {icon: string, section: string}[] = [
    {icon: "search", section: "search"},
    {icon: "star", section: "favorite"}];

const RouteTabs: React.FC = () => (
    <IonTabs>
    <IonRouterOutlet>
        {/* <Route exact path="/search" component={IngredientSelector}/>
        <Route exact path="/recipeList" component={RecipeList}/>
        <Route exact path="/recipeRead" component={RecipeRead}/>
        <Route exact path="/" component={Home} /> */}
    </IonRouterOutlet>
        <IonTabBar slot="bottom">
            {sections.map((section, index) => {
                return (
                    <IonTabButton key={index} tab={`${section['section']}`} onClick={() => redirectUrl("/" + section['section'])}>
                        <Icon icon={section.icon}/>
                        <IonLabel>{section['section']}</IonLabel>
                    </IonTabButton>
                )
            })}
        </IonTabBar>
     </IonTabs>
)

export default RouteTabs;