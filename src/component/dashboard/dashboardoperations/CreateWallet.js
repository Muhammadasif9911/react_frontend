import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createWallet } from '../../../actions/projectAction'
import classnames from 'classnames'

class CreateWallet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            BlooodGroup: '',
            gender: '',
            mobile: '',
            errors: ''

        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    }

    changeHandler = (event, fieldName) => {
        this.setState({
            [fieldName]: event.target.value
        })
    }

    submitHandler = (event) => {
        const newWallet = {
            name: this.state.name,
            BloodGroup: this.state.BloodGroup,
            gender: this.state.gender,
            mobile: this.state.mobile
        }
        this.props.createWallet(newWallet, this.props.history)
        event.preventDefault()

    }

    render() {
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Donate Now ! </h5>
                            <hr />
                            <form onSubmit={(event) => this.submitHandler(event)}>
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.changeHandler(event, "name")} className={classnames("form-control form-control-lg", { "is-invalid": this.state.errors.name })} placeholder="Name" />
                                    <p className="text-danger">{this.state.errors.name}</p>
                                </div>

                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.changeHandler(event, "BloodGroup")} className={classnames("form-control form-control-lg", { "is-invalid": this.state.errors.regNumber })} placeholder="your blood group" />
                                    <p className="text-danger">{this.state.errors.BloodGroup}</p>
                                </div>

                                <div className="form-group">
                                    <input onChange={(event) => this.changeHandler(event, "gender")} className={classnames("form-control form-control-lg", { "is-invalid": this.state.errors.semester })} placeholder="Gender" />
                                    <p className="text-danger">{this.state.errors.gender}</p>
                                </div>



                                <div className="form-group">
                                <input onChange={(event) => this.changeHandler(event, "mobile")} className={classnames("form-control form-control-lg", { "is-invalid": this.state.errors.courseName })} placeholder="enter mobile No." />
                                <p className="text-danger">{this.state.errors.mobile}</p>
                                </div>

                            

                                <input type="submit" className="btn btn-primary btn-block mt-4" value="Create" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapToPropos = (state) => ({
    errors: state.errors
})

export default connect(mapToPropos, { createWallet })(CreateWallet)
