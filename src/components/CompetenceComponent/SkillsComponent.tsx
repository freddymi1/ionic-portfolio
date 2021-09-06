import React, { useState } from 'react'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import { AutresSkills } from './Components/AutreSkills'
import { BackEndSkills } from './Components/BackEndSkills'
import { CmsSKills } from './Components/CmsSkills'
import { CSSDEVSkills } from './Components/CSSDevSkills'
import { DesignerSkills } from './Components/DesignerSkills'
import { FrontEndSkills } from './Components/FrontSkills'
import { LanguesSkills } from './Components/LanguesSkills'
import { MobileDevSkills } from './Components/MobileDevSkills'
import 'react-circular-progressbar/dist/styles.css';

import {Priory} from '../../assets/data/data'

export const SkillsComponent: React.FC = ()=> {
    const [tabs1, setTabs1] = useState<boolean>(true)
    const [tabs2, setTabs2] = useState<boolean>(false)
    const [tabs3, setTabs3] = useState<boolean>(false)

    const showtab1 = (e: any)=>{
        e.preventDefault();
        setTabs1(true);
        setTabs2(false)
        setTabs3(false)
    }
    const showtab2 = (e: any)=>{
        e.preventDefault();
        setTabs1(false);
        setTabs2(true);
        setTabs3(false)
    }
    const showtab3 = (e: any)=>{
        e.preventDefault();
        setTabs1(false);
        setTabs2(false);
        setTabs3(true)
    }
    const listReleve: any = []
    Priory.map((item: any, index: any)=>{
        return listReleve.push(
            <div className="itemListP_"  key={index}>
                <div className="headsC_">
                    <div className="items_ " >
                        <div className="_headerSk">
                           <h4 className="_skillstitle">{item.labele}</h4>
                       </div>
                        <div className="_itemCo_">
                        {
                            item.items.map((list: any)=>(
                                <div  key={list.id}>
                                    <div className="skills_items">
                                        <div className="listLabele">
                                            <p className="_titleSkills">{list.title}</p>
                                        </div>
                                        <div className="cardProgres">
                                            <CircularProgressbar
                                                value={list.level}
                                                text={`${list.level}%`}
                                                styles={buildStyles({
                                                    rotation: 0.25,
                                                    strokeLinecap: 'butt',
                                                    textSize: '16px',
                                                    pathTransitionDuration: 0.5,
                                                    pathColor: `#17c382, ${list.level / 100})`,
                                                    textColor: '#f88',
                                                    trailColor: '#d6d6d6',
                                                    backgroundColor: '#1b294b',
                                                })}
                                                className="progressB"
                                            />
                                        </div>
                                    </div>

                                </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    
    return (
        <div>
            <div className="headerContainerSk">
                {listReleve}
            
            </div>
            <div className="_tabContent">
                <div className={tabs1 ? `tabs1 active`: `tabs1`} onClick={(e)=>showtab1(e)}>
                    <h3 className="_tabTitle">Framework</h3>
                </div>
                <div className={tabs2 ? `tabs1 active`: `tabs1`} onClick={(e)=>showtab2(e)}>
                    <h3 className="_tabTitle">Design</h3>
                </div>
                <div className={tabs3 ? `tabs1 active`: `tabs1`} onClick={(e)=>showtab3(e)}>
                    <h3 className="_tabTitle">Autres</h3>
                </div>
            </div>
            <div className="_tabsContainer no-padding">
                {
                    tabs1 && 
                    <div>
                        <div className="listCardIt">
                            <FrontEndSkills/>
                        </div>
                        <div className="listCardIt">
                            <MobileDevSkills/>
                        </div>
                        <div className="listCardIt">
                            <BackEndSkills/>
                        </div>
                        <div className="listCardIt">
                            <CmsSKills/>
                        </div>
                    </div>
                }
                {
                    tabs2 && 
                    <div>
                       
                        <div className="listCardIt">
                            <CSSDEVSkills/>
                        </div>
                        <div className="listCardIt">
                            <DesignerSkills/>
                        </div>
                    </div>
                }
                {
                    tabs3 && 
                    <div>
                        <div className="listCardIt">
                            <LanguesSkills/>
                        </div>
                        <div className="listCardIt">
                            <AutresSkills/>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
