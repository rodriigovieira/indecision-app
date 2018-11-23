import React from 'react'

const Action = (props) => (
        <div>
            {/* <button className="big-button" onClick={props.chooser}>What should I do?</button> */}

            {props.options.length > 0 ? <button className="big-button" onClick={props.chooser}>What should I do?</button> : <button className="big-button-disabled">What should I do?</button>}
        </div>
    )

export default Action