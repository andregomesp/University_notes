import React from 'react';
import {
  IonApp} from '@ionic/react';
import {Route} from 'react-router-dom';
import RecipeList from './screens/recipe/recipeList';
import RecipeRead from './screens/recipe/recipeRead';
import IngredientSelector from './screens/ingredientSelector/IngredientSelector';
import Home from './screens/home/Home';
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
import './theme/variables.css';
import RouteTabs from './components/routeTabs/routeTabs';
import {
  IonReactRouter} from '@ionic/react-router';
import Header from './components/header/header';
import Redirector from './components/routeTabs/redirector';

const App: React.FC = () => (
  <>
    <IonApp>
      <Header/>
      <IonReactRouter>
        <RouteTabs/>
        <Redirector/>
        <Route exact path="/search" component={IngredientSelector}/>
        <Route exact path="/recipeList" component={RecipeList}/>
        <Route exact path="/recipeRead" component={RecipeRead}/>
        <Route exact path="/" component={Home} />
      </IonReactRouter>
    </IonApp>
  </>
);
export default App;
