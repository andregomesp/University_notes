import React from 'react';
import { IonList, IonItem, IonLabel, IonCheckbox } from '@ionic/react';

interface ContainerProps {
    category: string;
    list: string[];
}
const CheckList: React.FC<ContainerProps> = (props) => (
    <>
        <IonList>
            {props.list.map((item, index) => {
                return (<IonItem key={index}>
                   <IonLabel>{item}</IonLabel>
                   <IonCheckbox slot="start" value={item}/> 
                </IonItem>)
            })}
        </IonList>
    </>
)

export default CheckList;