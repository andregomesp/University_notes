import React from 'react';
import { IonContent, IonChip, IonLabel } from '@ionic/react';
import Icon from '../../components/icon/Icon';
interface ContainerProps {
    ingredientList: {id: Number, name: string, minutes: Number}[];
}
const currentRecipes: string[] = ["Caldo de galinha", "Galinha ao molho de feijão", "Galinha assada"]
const RecipeList: React.FC<ContainerProps> = (props) => (
    <>
        <IonContent>
            {currentRecipes.map((recipe, index) => {
                return (<IonChip key={index}>
                    <IonLabel key={index}>{recipe}</IonLabel>
                    <div>
                        <Icon icon={"clock"}/>
                        1:40
                    </div>
                </IonChip>)
            })}
        </IonContent>
    </>
)

export default RecipeList;