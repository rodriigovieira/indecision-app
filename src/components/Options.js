import React from 'react'
import Option from './Option'

const Options = (props) => (
        <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button className="button button--link" onClick={props.deleter}>Remove All</button>
        </div>
        {props.options.length === 0 &&
        <p className="widget-header__message">Please add an option to get started!</p>}
                {props.options.map((value, index) => {
                    return <Option
                        key={generatorID()}
                        optionText={value}
                        optionIndex={index}
                        handleDelete={props.handleDelete}
                    />
                })
                }
        </div>
    )

function generatorID() {
    return (Math.random() * 10000000).toFixed(0)
}

export default Options