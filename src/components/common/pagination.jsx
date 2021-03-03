import React, { Component } from 'react';
import _ from 'lodash';

const Pagination = (props) => {
    const {itemsCount, pageSize, currentPage, onPageChange} = props;
    console.log("Current page",currentPage);
    const pagesCount = Math.ceil(itemsCount/pageSize);

    
    if(pagesCount === 1) return null;

    const pages = _.range(1, pagesCount + 1);
    
    // [1,2,3].map()
    
    return <nav>
        <ul className="Pagination">
            {pages.map(page => (
                <li key={page} className={page === currentPage ? 'page-item active': 'page-item'}>
                <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
                </li>
            ))}
        </ul>
    </nav>
    ;
}
 
export default Pagination;