import React from 'react'
import { IonContent, IonPage } from '@ionic/react'
import {FiMoreHorizontal} from 'react-icons/fi';
import { useHistory } from 'react-router';
import { ExperienceComponent } from '../../components/ExperienceComponent/ExperienceComponent';

export const Experiences: React.FC = ()=> {
    const history = useHistory()
    // Pour retourner vers la page precedent
    const goBackFunction = () =>{
        return history.goBack()
    }

    
    return (
        <IonPage>
            <IonContent className="">
                <div className="_skillsHeader ion-padding">
                    <div className="icon-back" onClick={goBackFunction} style={{cursor:"pointer"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M244 400L100 256l144-144"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M120 256h292"/></svg>
                    </div>
                    <div className="_skillsTitle">
                        <h3>Mes expériences</h3>
                    </div>


                    <div className="iconHeaderSkills">
                        <FiMoreHorizontal className="_headerIcon"/>
                    </div>
                </div>
                <div className="_componentskills">
                    <ExperienceComponent/>
                </div>
            </IonContent>
        </IonPage>
    )
}
