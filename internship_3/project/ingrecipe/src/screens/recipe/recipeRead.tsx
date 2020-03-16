import React from 'react';
import { IonContent, IonChip } from '@ionic/react';
import "./RecipeRead.css";
interface ContainerProps {
    ingredientList: {id: Number, name: string, minutes: Number}[];
}
const currentIngredients: string[] = ["Galinha", "Arroz"]
const notSelectedIngredients: string[] = [];
const RecipeRead: React.FC<ContainerProps> = (props) => {
    console.log("oioi");
    return (
        <>
            <IonContent>
                <div className={"reciperead-screen"}>
                    <div></div>
                    <div></div>
                    <div className={"ingredientread-ribbon"}>
                        Ingredientes selecionados
                    </div>
                    {currentIngredients.map((ingredient, index) => {
                        return (<IonChip key={index}>
                            {ingredient}
                        </IonChip>)
                    })}
                    {notSelectedIngredients &&
                        <>
                            <div className={"ingredientread-ribbon"}>
                            </div>
                            <IonChip></IonChip>
                        </>
                    }
                    <div></div>
                </div>
            </IonContent>
        </>
    )
}

export default RecipeRead;