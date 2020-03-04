import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle } from '@ionic/react';
import "./Card.css";
interface ContainerProps {
    text: string;
    photo: any;
}

const Card: React.FC<ContainerProps> = (props) => (
    <IonCard className={"card-size"}>
        <img src={props.photo} alt="food_img" className={"card-img-stretch"}/>
        <IonCardHeader>
            <IonCardSubtitle>{props.text}</IonCardSubtitle>
        </IonCardHeader>
    </IonCard>
)

export default Card;