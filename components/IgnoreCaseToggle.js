import React from 'react';

export const IgnoreCaseToggle = ({ingnorecase}) => {
    return (
        <>
            <label htmlFor="ignore-case">Ignore case?</label>
            <input type="checkbox" id="ignore-case" onChange={(e)=>{ingnorecase(e.target.checked)}}/>
        </>
    )
}