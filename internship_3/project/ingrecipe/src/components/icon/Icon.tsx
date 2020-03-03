import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import {star, search} from 'ionicons/icons';
interface ContainerProps {
    icon: string;
}

function getIcon(icon: string) {
    let iconMap: any = {
        "star": star,
        "search": search
    }
    return iconMap[icon]
}

const Icon: React.FC<ContainerProps> = (props) => (
    <IonIcon icon={getIcon(props.icon)}/>
)

export default Icon;