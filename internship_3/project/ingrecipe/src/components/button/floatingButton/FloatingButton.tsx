import React from 'react';
import { IonList, IonItem, IonLabel, IonCheckbox, IonFab, IonFabButton } from '@ionic/react';
import { attachProps } from '@ionic/react/dist/types/components/utils';
import Icon from '../../icon/Icon';

interface ContainerProps {
    verticalPos: any,
    horizontalPos: any,
    icon: string
}
const FloatingButton: React.FC<ContainerProps> = (props) => (
    <>
        <IonFab vertical={props.verticalPos} horizontal={props.horizontalPos}>
            <IonFabButton>
                <Icon icon={props.icon}/>
            </IonFabButton>
        </IonFab>
    </>
)

export default FloatingButton;