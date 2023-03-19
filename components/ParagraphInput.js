import React, { forwardRef } from 'react';

export const ParagraphInput = forwardRef(({changePara,paradata },paraRef) => {
    
    
    
    return (
        <>
            Enter paragraph here
            <div ref={paraRef} id="paragraph-input"
                 contentEditable onKeyUp={(e)=>changePara(e.target.innerText)} value={paradata}
            >
            </div>
        </>
    ) 
})