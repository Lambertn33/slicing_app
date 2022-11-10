import React from 'react'

export default function Navbar({links, selected}) {
    const {logo, logoUrl, discoverTxt, discoverUrl} = links;
    let classes = 'border border-gray-600 py-1 px-6';
    classes+= selected === 1 ? ' logo-dark' : ''; 
    return (
        <div className='flex justify-between px-4 py-2 bg-transparent items-center'>
            <a href={logoUrl} target="_blank" className={classes}>
                {logo}
            </a>     
            {
                selected === 1 ?
                    <a href={discoverUrl} target="_blank" className='text-xs logo-dark'>
                        {discoverTxt}
                    </a>
                : ''  
            }   
        </div>
    )
}
