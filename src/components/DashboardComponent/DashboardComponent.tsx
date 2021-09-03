import { IonCard, IonCardContent } from '@ionic/react'
import React from 'react'
import {FaInfo} from 'react-icons/fa'
import {RiLinkedinFill} from 'react-icons/ri'
import {AiFillGithub} from 'react-icons/ai'

export const DashboardComponent: React.FC = ()=> {
    return (
        <IonCard>
            <IonCardContent className="_cardHContent">
                <div className="homecardHeader">
                    <h3 className="title">
                        A propos de moi
                    </h3>
                    <div className="homeIconInfo">
                        <FaInfo className="infoIc"/>
                    </div>
                </div>
                <div className="_blocks">
                    <div className="_block1"></div>
                    <div className="_block2"></div>
                </div>
                <div className="homeSocialIcon">
                    <div className="_icon">
                        <div className="iconSosial">
                            <RiLinkedinFill className="icon_"/>
                        </div>
                        <h3>LinkedIn</h3>
                    </div>
                    <div className="_icon">
                        <div className="iconSosial">
                            <AiFillGithub className="icon_"/>
                        </div>
                        <h3>GitHub</h3>
                    </div>
                </div>

                <div className="contact_">
                    <div className="outputC">
                        <p>Téléphone</p>
                        <h3>+261(0)34 21 243 19</h3>
                    </div>
                    <div className="inputC">
                        <p>Adresse email</p>
                        <h3>michelfreddy1992@gmail.com</h3>
                    </div>
                </div>
                
            </IonCardContent>
        </IonCard>
    )
}
