import React from 'react'

export default class AddOption extends React.Component {
    state = {
        error: null,
        existing: null
    }

    handleSubmit = event => {
        event.preventDefault()
        const option = event.target.elements.creationInput.value
        const exists = this.props.options.includes(option)

        if (option && !exists) {
            this.props.handleSubmit(option)
            this.setState(() => ({ error: null, existing: null }))
            event.target.elements.creationInput.value = ``
        } else if (exists) {
            this.setState(() => ({ existing: true, error: null }))
        } else {
            this.setState(() => ({ error: true, existing: null}))
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">Please insert a valid value.</p>}
                {this.state.existing && <p className="add-option-error">This value already exists.</p>}

                <form className="add-option" onSubmit={this.handleSubmit}>
                        <input id="creationInput" placeholder="Type here" className="add-option__input" type="text" />
                        <input value="Submit Option" id="creationSubmit" className="button" type="submit"/>
                </form>
            </div>
        )
    }
}
