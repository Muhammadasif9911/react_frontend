import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createWallet } from '../../../actions/projectAction'
import classnames from 'classnames'

class CreateWallet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            regNumber: '',
            semester: '',
            courseName: '',
            courseCode:'',
            creditHours:'',
            priority:'',
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
            regNumber: this.state.regNumber,
            semester: this.state.semester,
            courseName: this.state.courseName,
            courseCode:this.state.courseCode,
            creditHours:this.state.creditHours
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
                            <h5 className="display-4 text-center">Register New Course </h5>
                            <hr />
                            <form onSubmit={(event) => this.submitHandler(event)}>
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.changeHandler(event, "name")} className={classnames("form-control form-control-lg", { "is-invalid": this.state.errors.name })} placeholder="Student Name" />
                                    <p className="text-danger">{this.state.errors.name}</p>
                                </div>

                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.changeHandler(event, "regNumber")} className={classnames("form-control form-control-lg", { "is-invalid": this.state.errors.regNumber })} placeholder="Student RegNumber" />
                                    <p className="text-danger">{this.state.errors.regNumber}</p>
                                </div>

                                <div className="form-group">
                                    <input onChange={(event) => this.changeHandler(event, "semester")} className={classnames("form-control form-control-lg", { "is-invalid": this.state.errors.semester })} placeholder="Semester" />
                                    <p className="text-danger">{this.state.errors.semester}</p>
                                </div>



                                <div className="form-group">
                                <input onChange={(event) => this.changeHandler(event, "courseName")} className={classnames("form-control form-control-lg", { "is-invalid": this.state.errors.courseName })} placeholder="Course Name" />
                                <p className="text-danger">{this.state.errors.courseName}</p>
                                </div>

                                <div className="form-group">
                                <input onChange={(event) => this.changeHandler(event, "courseCode")} className={classnames("form-control form-control-lg", { "is-invalid": this.state.errors.courseCode })} placeholder="Course Code" />
                                <p className="text-danger">{this.state.errors.courseCode}</p>
                                </div>

                                <div className="form-group">
                                <input onChange={(event) => this.changeHandler(event, "creditHours")} className={classnames("form-control form-control-lg", { "is-invalid": this.state.errors.creditHours })} placeholder="Course creditHours" />
                                <p className="text-danger">{this.state.errors.creditHours}</p>
                                </div>
                                <div className="form-group">
                                    <select className="form-control form-control-lg" onChange={(event) => this.changeHandler(event, "priority")}>
                                        <option value={3}>Event Priority</option>
                                        <option value={1}>High</option>
                                        <option value={2}>Medium</option>
                                        <option value={3}>Low</option>
                                    </select>
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
