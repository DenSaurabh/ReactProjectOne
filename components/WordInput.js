import React from 'react';

export const WordInput = ({serchwordprops,srctxt}) => {
    
    return (
        <>   
            <label htmlFor="word-input">Enter word to be highlighted here</label>
            <input id="word-input" type={"text"} onChange={(e)=>{serchwordprops(e.target.value)}} vlaue={srctxt}/>
        </>
    )
}