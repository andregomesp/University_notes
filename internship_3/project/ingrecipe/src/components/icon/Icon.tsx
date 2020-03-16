import React from 'react';
import { IonIcon } from '@ionic/react';
import {star, search, time} from 'ionicons/icons';
interface ContainerProps {
    icon: string;
    addedClass?: string;
}

function getIcon(icon: string) {
    let iconMap: any = {
        "star": star,
        "search": search,
        "clock": time
    }
    return iconMap[icon]
}

const Icon: React.FC<ContainerProps> = (props) => (
    <IonIcon icon={getIcon(props.icon)}/>
)

export default Icon;