import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/react';
import {Route} from 'react-router-dom';
import Home from '../../screens/home/Home';
import Icon from '../icon/Icon';
import IngredientSelector from '../../screens/ingredientSelector/IngredientSelector';
import { redirectUrl } from './redirector';
import RecipeList from '../../screens/recipe/recipeList';
import RecipeRead from '../../screens/recipe/recipeRead';


let sections: {icon: string, section: string}[] = [
    {icon: "search", section: "search"},
    {icon: "star", section: "favorite"}];

const RouteTabs: React.FC = () => (
    <IonTabs>
    <IonRouterOutlet>
        <Route exact path="/search" component={IngredientSelector}/>
        <Route exact path="/recipeList" component={RecipeList}/>
        <Route exact path="/recipeRead" component={RecipeRead}/>
        <Route exact path="/" component={Home} />
    </IonRouterOutlet>
        <IonTabBar slot="bottom">
            {sections.map((section, index) => {
                console.log(section);
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