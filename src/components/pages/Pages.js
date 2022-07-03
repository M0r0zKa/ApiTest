import React from 'react';

import css from './Style.css'
function Pages({pages: {total, per_page},pageTool}) {
    let arrPageNumber = []
    let title = total
    let pages = 1

    do{
        title -=per_page
        arrPageNumber.push(pages)
        pages +=1
    }while (title > 0)

    return (
        <div className={'wrap'}>
            {
                arrPageNumber.map(page => <button  key={page} onClick={(e)=> pageTool(e)}>{page}</button>)
            }

        </div>
    )
}


export {Pages};