import React from 'react';
import Pager from 'react-pager';

const Paginator = ({currentPage, totalPages, visiblePages, onPageChanged}) => {
    <Pager total={totalPages} current={currentPage} visiblePages={visiblePages} onPageChanged={onPageChanged} />
}

export default Paginator;