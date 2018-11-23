import React from 'react'
import AddOption from './AddOption';
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
    state = {
        options: ['option 1', 'option KILL'],
        selectedOption: null
    }

    componentDidMount() {
        if (JSON.parse(localStorage.getItem('options'))) {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)

            this.setState(() => ({ options }))
        }
    }

    componentDidUpdate(prevProps, prevStates) {
        if (prevStates.options !== this.state.options) {
            localStorage.setItem('options', JSON.stringify(this.state.options))
        }
    }

    handleDeleteAll = () => {
        this.setState(previous => ({ options: [] }))
    }

    handleDelete = optionToRemove => {
        this.setState(previous => ({
            options: previous.options.filter(value => value !== optionToRemove)
        }))
    }

    handleChoice = () => {
        const randomNumber = () => Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNumber()]

        if (this.state.options.length > 0) {
            this.setState(previous => ({
                selectedOption: option
            }))
        } else {
            alert(`My dear, you're so screwed.`)
        }
    }

    handleSubmit = option => {
        this.setState(previous => ({ options: previous.options.concat(option) }))
    }

    handleCloseModal = () => {
        this.setState(previous => ({
            selectedOption: undefined
        }))
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <Action
                    chooser={this.handleChoice}
                    options={this.state.options}
                    />
                    <div className="widget">
                    <Options
                    options={this.state.options}
                    handleDelete={this.handleDelete}
                    deleter={this.handleDeleteAll} 
                    />
                    <AddOption 
                    handleSubmit={this.handleSubmit} 
                    options={this.state.options}
                    />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleCloseModal={this.handleCloseModal}
                 />
            </div>
        )
    }
}
