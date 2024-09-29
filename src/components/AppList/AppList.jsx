import React, { useState } from 'react'
import './AppList.scss'

function AppList() {
    const [appList, setAppList] = useState(false);

    const showAppList = () => {
        setAppList(!appList);
    }
  return (
    <div className='applist'>
        <div className="applist_menu">
            <div className="applist_menu_hamburger" onClick={showAppList}>
                <svg width="20" height="25" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.20312 5.6875H21.7578V8.44375H3.20312V5.6875ZM3.20312 12.6H21.7578V15.4H3.20312V12.6ZM3.20312 19.5563H21.7578V22.3125H3.20312V19.5563Z" fill=" rgb(60, 64, 67)"/>
                </svg>
            </div>
            <div className="applist_menu_newapp">
                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12H18M12 6V18" stroke="rgb(60, 64, 67)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span className={ !appList? 'hidden' : ''}>New App</span>
            </div>
        </div>
    </div>
  )
}

export default AppList