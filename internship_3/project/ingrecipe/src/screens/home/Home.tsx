import React from 'react';
import { IonContent } from '@ionic/react';
import Card from '../../components/card/Card';
import ricePic from "../../assets/rice.jpg";
import beefPic from "../../assets/beef.jpg";
import "./Home.css";

const categories: string[] = ['Pratos com arroz', 'Pratos com carne'];
const photos: string[] = [ricePic, beefPic]
const Home: React.FC = () => {
    console.log("loading home");
    return (<>
        <IonContent
            scrollEvents={true}
         >
            <div className={"home-content-area"}>
            {categories.map((category, index) => {
                return <Card key={index} text={category} photo={photos[index]} />
            })}
            </div>
            
        </IonContent>

    </>)
}

export default Home;