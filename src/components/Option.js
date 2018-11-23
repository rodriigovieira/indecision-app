import React from 'react'

const Option = (props) =>(
        <div className="option">
            <p className="option__text" key={generatorID()}>
                {`${props.optionIndex + 1}. ${props.optionText}`}
            </p>
              <button className="button button--link" onClick={(event) => {
                  props.handleDelete(props.optionText)
            }} key={generatorID()}>Remove</button>
        </div>
    )

function generatorID() {
    return (Math.random() * 10000000).toFixed(0)
}

export default Option