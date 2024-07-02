 import React from 'react'
 
 export const MobileView = ({props}) => {
    

    return (
        <div className=' flex bg-slate-700  h-screen w-screen justify-center'>
            <div className='bg-slate-400 h-screen items-center w-[25%] overflow-x-hidden overflow-y-auto'>
                {props}

            </div>

        </div>
    )
 }
 
 export default MobileView