import React, {Component} from 'react';
import Pager from 'react-pager';

class Paginator extends Component {
    render() {
        return (
            <Pager total={this.props.total} current={this.props
                    .current} visiblePages={this.props.visiblePages} onPageChanged={this.props.onPageChanged}/>
        );
    }
}

export default Paginator;