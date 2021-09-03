import React, { useState } from 'react'
import {  IonContent, IonItem, IonLabel, IonList, IonPage, IonSearchbar } from '@ionic/react'
import {FiSettings} from 'react-icons/fi';
import Tabs from '../Tabs/Tabs';
import { FaGraduationCap, FaLaptopCode} from 'react-icons/fa';
import {BsCardImage} from 'react-icons/bs';
import {AiTwotoneMail} from 'react-icons/ai'
import { useHistory } from 'react-router';

export const Menu: React.FC = ()=> {
    const [searchText, setSearchText] = useState<string | any>('');
    const history = useHistory()
    const goTo = () =>{
        return history.push("/customer_profile")
    }
    return (
        <IonPage>
            <IonContent className="">
                <div className="_homeHeader ion-padding">
                    <div className="iconHeaderHome" onClick={()=>goTo()}>
                        <FiSettings className="_homeHeaderIcon"/>
                    </div>
                </div>
                <div className="_componentHome">
                    <div className="homeChearch">
                        <IonSearchbar placeholder="Recherche" value={searchText} className="searchHome" onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
                    </div>
                    <div className="bar"></div>
                    <div className="_listMenu">
                        <IonList lines="none">
                            <IonItem routerLink="/comptability">
                                <div className="iconHome">
                                    <FaLaptopCode className="_iconHome"/>
                                </div>
                                <IonLabel>
                                    <h3 className="listTitle">Compétence</h3>
                                    <p className="listTxt">Afficher mes compétence</p>
                                </IonLabel>
                            </IonItem>
                            <IonItem className="lietItems" routerLink="/product">
                                <div className="iconHome1">
                                    <FiSettings className="_iconHome"/>
                                </div>
                                <IonLabel>
                                    <h3 className="listTitle">Expériences</h3>
                                    <p className="listTxt">Afficher mes expériences</p>
                                </IonLabel>
                            </IonItem>
                            <IonItem className="lietItems" routerLink="/provider">
                                <div className="iconHome2">
                                    <FaGraduationCap className="_iconHomeData"/>
                                </div>
                                <IonLabel>
                                    <h3 className="listTitle">Formations</h3>
                                    <p className="listTxt">Afficher mes formations</p>
                                </IonLabel>
                            </IonItem>
                            <IonItem className="lietItems" routerLink="/provider">
                                <div className="iconHome3">
                                    <BsCardImage className="_iconHomeImg"/>
                                </div>
                                <IonLabel>
                                    <h3 className="listTitle">Portfolio</h3>
                                    <p className="listTxt">Afficher mes realisations</p>
                                </IonLabel>
                            </IonItem>
                            <IonItem className="lietItems" routerLink="/provider">
                                <div className="iconHome4">
                                    <AiTwotoneMail className="_iconHomePhone"/>
                                </div>
                                <IonLabel>
                                    <h3 className="listTitle">Contact</h3>
                                    <p className="listTxt">Contactez moi</p>
                                </IonLabel>
                            </IonItem>
                        </IonList>
                    </div>
                </div>
            </IonContent>
            <Tabs/>
        </IonPage>
    )
}
