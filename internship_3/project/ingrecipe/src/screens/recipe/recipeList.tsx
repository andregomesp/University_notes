import React from 'react';
import { IonContent, IonChip, IonLabel } from '@ionic/react';
import Icon from '../../components/icon/Icon';
import "./RecipeList.css";
import { redirectUrl } from '../../components/routeTabs/redirector';
interface ContainerProps {
    ingredientList: {id: Number, name: string, minutes: Number}[];
}
const currentRecipes: string[] = ["Caldo de galinha", "Galinha ao molho de feijão", "Galinha assada"]
const RecipeList: React.FC<ContainerProps> = (props) => {
    function openRecipe() {
        redirectUrl("/recipeRead");
    }
    return (
        <>
            <IonContent>
                <div className={"recipelist-screen"}>
                    {currentRecipes.map((recipe, index) => {
                        return (<IonChip key={index} className={"recipelist-item"} onClick={() => openRecipe()}>
                            <IonLabel key={index} className={"recipelist-label"}>{recipe}</IonLabel>
                            <div className={"recipelist-timeinfo"}>
                                <Icon icon={"clock"} addedClass={"recipelist-icon"}/>
                                1:40
                            </div>
                        </IonChip>)
                    })}
                </div>
            </IonContent>
        </>
    )
}

export default RecipeList;