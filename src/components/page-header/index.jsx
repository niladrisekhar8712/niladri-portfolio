import React from 'react'
import './styles.scss'
export function PageHeader({headerText, icon}) {
    

    return (
        <div className='wrapper'>
            <h2>{headerText}</h2>
            <span>{icon}</span>
        </div>
    )
}
