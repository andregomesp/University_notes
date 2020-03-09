import React from 'react';
import { IonContent } from '@ionic/react';
import { categoryList, ingredientList } from './IngredientList';
import CheckList from '../../components/checkList/CheckList';
import FloatingButton from '../../components/button/floatingButton/FloatingButton';


const IngredientSelector: React.FC = () => (
    <>
        <IonContent>
            {categoryList.map((category, index) => {
                return (<CheckList 
                            key={index} 
                            category={category} 
                            list={ingredientList[index]}
                        />)
            })}
            <FloatingButton horizontalPos="end" verticalPos="bottom" icon="search"/>
        </IonContent>
    </>
)

export default IngredientSelector;