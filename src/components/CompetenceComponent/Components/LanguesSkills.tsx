import { IonProgressBar } from '@ionic/react';
import React, { useRef, useState } from 'react'
import { FaChevronRight, FaGlobe } from 'react-icons/fa';
import {LangueSkills} from '../../../assets/data/data'
export const LanguesSkills: React.FC = ()=> {
    const [active, setActive] = useState<any>('');
    const [height, setHeight] = useState<any>('0px');
    const [rotate, setRotate] = useState<any>('accordion_icon');
    const content = useRef<any>();

    // Pour le accordeo 1
    function toggleAccordion() {
        setActive(active === '' ? 'active' : '');
        setHeight(active === 'active' ? '0px' : `${content.current.scrollHeight}px`);
        setRotate(
            active === 'active' ? 'accordion_icon' : 'accordion_icon rotate'
        );
    }

    const listReleve: any = []
    LangueSkills.map((item: any, index: any)=>{
        return listReleve.push(
            <div className="itemList_"  key={index}>
                <div className="headsC_">
                   <div className="cardSkills1Titlt" onClick={()=> toggleAccordion()}>
                        <div className="_headerSk">
                            <div className="box_icon">
                                <FaGlobe className="iconSkills"/>
                            </div>
                            <h4 className="_skillstitle">{item.labele}</h4>
                        </div>
                        <FaChevronRight className={`${rotate} imgIcon `}/>
                    </div>
                    <div className="items_ accordion_content" ref={content} style={{ maxHeight: `${height}` }}>
                        <div className="_itemCo">
                        {
                            item.items.map((list: any)=>(
                                <div  key={list.id}>
                                    <div className="skills_items">
                                        <div className="listLabele">
                                            <p className="_titleSkills">{list.title}</p>
                                            <p className="_titleSkills">{list.level} <sup>%</sup></p>
                                        </div>
                                        <IonProgressBar color="primary" value={list.level/100}/>
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
           {listReleve} 
        </div>
    )
}
