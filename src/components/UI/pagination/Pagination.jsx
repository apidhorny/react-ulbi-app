import React from 'react';
import { getPagesArray } from '../../../utils/pages';

const Pagination = ({ totalPages, page, changePage }) => {
    let pagesArray = getPagesArray(totalPages);

    return (
        <div className='paganation'>
            {pagesArray.map((p) => (
                <button onClick={() => changePage(p)} key={p} className={page === p ? 'page page--active' : 'page'}>
                    {p}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
