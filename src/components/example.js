import React, { Component } from 'react';

import Timer from './timer'
/**
 * An example that shows how you can interpolate/mix javascript with HTML
 */
class Example extends Component {
    render () {
        const date = new Date().toDateString()
        return (
            <div>
                The date is {date}
                <Timer/>
            </div>
        )
    }
}

export default Example
