import { IonAvatar, IonContent, IonImg, IonLabel, IonPage } from '@ionic/react'
import React from 'react'
import { DashboardComponent } from '../../components/DashboardComponent/DashboardComponent'
import profileImg from '../../assets/images/fm.jpg';
import { FiMoreHorizontal } from 'react-icons/fi';
import {GoDashboard} from 'react-icons/go'
import Tabs from '../Tabs/Tabs';
export const Dashboard: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <div className="_productHeader ion-padding">
                    <div className="icon-backs">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M244 400L100 256l144-144"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M120 256h292"/></svg>
                         */}
                         <GoDashboard/>
                    </div>
                    <div className="_productTitle">
                        <h3>PORTFOLIO</h3>
                    </div>
                    <div className="iconHeader">
                        <FiMoreHorizontal className="_headerIcons"/>
                    </div>
                </div>
                <div className="ion-padding">
                    <div className="card">
                        <div className="logoProfile">
                            <IonAvatar>
                                <IonImg src={profileImg} alt="Mon profile" className="myProfile"/>
                            </IonAvatar> 
                        </div>

                        <div className="profile_container">
                            <IonLabel>
                                <h2>NARISOA HARILALA <span>Freddy Michel</span></h2>
                                
                                <p>Lot IIA 289 Bis, Tanjombato</p>
                                <span>Antananarivo, 102</span>
                                <h3 className="caProfile">Développeur web et mobile</h3>
                            </IonLabel>
                        </div>
                    </div>
                </div>
                <div className="_homeComponent">
                    <DashboardComponent/>
                </div>
            </IonContent>
            <Tabs/>
        </IonPage>
    )
}
