import React from 'react';
import { IonContent } from '@ionic/react';
import { categoryList, ingredientList } from './IngredientList';
import CheckList from '../../components/checkList/CheckList';
import FloatingButton from '../../components/button/floatingButton/FloatingButton';
import { redirectUrl } from '../../components/routeTabs/redirector';



const IngredientSelector: React.FC = () => {
    function loadRecipeResult() {
        redirectUrl("/recipeList");
    }

    return (
        <>
            <IonContent>
                {categoryList.map((category, index) => {
                    return (
                        <CheckList 
                            key={index} 
                            category={category} 
                            list={ingredientList[index]}
                        />
                    )
                })}
                <FloatingButton horizontalPos="end" verticalPos="bottom" icon="search" onClick={() => {loadRecipeResult()}}/>
            </IonContent>
        </>
    )
}

export default IngredientSelector;