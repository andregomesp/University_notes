import React from 'react';
import { IonContent, IonChip, IonLabel } from '@ionic/react';
import Icon from '../../components/icon/Icon';
interface ContainerProps {
    ingredientList: {id: Number, name: string, minutes: Number}[];
}
const currentIngredients: string[] = ["Galinha", "Arroz"]
const notSelectedIngredients: string[] = [];
const ingredientRead: React.FC<ContainerProps> = (props) => (
    <>
        <IonContent>
            <div></div>
            <div></div>
            <div className={"ingredientread-ribbon"}>
                Ingredientes selecionados
            </div>
            {currentIngredients.map((ingredient, index) => {
                <IonChip key={index}>
                    {ingredient}
                </IonChip>
            })}
            {notSelectedIngredients &&
                <>
                    <div className={"ingredientread-ribbon"}>
                    </div>
                    <IonChip></IonChip>
                </>
            }
                <div></div>
        </IonContent>
    </>
)

export default ingredientRead;