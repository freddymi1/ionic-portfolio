import { IonLabel } from '@ionic/react'
import React from 'react'
import {AiOutlineAppstore} from 'react-icons/ai'
import {IoHomeOutline} from 'react-icons/io5'
import { useHistory } from 'react-router'

export default function Tabs() {
    const history = useHistory()
    const goTodashboard = (e: any)=>{
        e.preventDefault()
        return history.push("/dashboard")
    }

    const goToMenu = (e: any)=>{
        e.preventDefault()
        return history.push("/menu")
    }
    return (
    <div className="homeTabs">
        <div className="tabMenu">
              <div className="menuBtn" onClick={(e: any)=>goTodashboard(e)}>
                <IoHomeOutline className="iconTab"/>
                <IonLabel className="tabsHomeTitle">ACCUEIL</IonLabel>
              </div>
              
              <div className="menuBtn" onClick={(e: any)=>goToMenu(e)}>
                <AiOutlineAppstore className="iconTab"/>
                <IonLabel className="tabsHomeTitle">MENU</IonLabel>
              </div>
         </div>
    </div>
    )
}
