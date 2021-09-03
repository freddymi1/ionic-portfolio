import { IonLabel } from '@ionic/react'
import React from 'react'
import {AiFillHome, AiOutlineAppstore} from 'react-icons/ai'
import { useHistory } from 'react-router'

export default function Tabs() {
    const history = useHistory()
    const goTodashboard = (e: any)=>{
        e.preventDefault()
        history.push("/dashboard")
    }

    const goToMenu = (e: any)=>{
        e.preventDefault()
        history.push("/menu")
    }
    return (
    <div className="homeTabs">
        <div className="tabMenu">
              <div className="menuBtn" onClick={(e: any)=>goTodashboard(e)}>
                <AiFillHome className="iconTab"/>
                <IonLabel className="tabsHomeTitle">ACCUEIL</IonLabel>
              </div>
              
              <div className="menuBtn" onClick={(e: any)=>goToMenu(e)}>
                <AiOutlineAppstore className="iconTab"/>
                <IonLabel className="tabsHomeTitle">PLUS</IonLabel>
              </div>
         </div>
    </div>
    )
}
