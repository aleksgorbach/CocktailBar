import Pager from "react-pager";
import React from "react";

import "./Paginator.module.scss";

const Pagination = props => {
    let { current, total, visiblePages, changePage } = props;
    let titles = {
        first:   '<<',
        prev:    '<',
        prevSet: '...',
        nextSet: '...',
        next:    '>',
        last:    '>>'
    };
    return (<Pager current={current} total={total} visiblePages={visiblePages} titles={titles} onPageChanged={changePage} />)
}

export default Pagination;