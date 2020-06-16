import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getWallet, updateWallet} from '../../../actions/projectAction'
import classnames from 'classnames'

class UpdateWallet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id:'',
            name: '',
            regNumber: '',
            semester: '',
            courseName: '',
            courseCode:'',
            creditHours:'',
            priority:'3',
            errors: ''

        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
        if(nextProps.wallet)
        {
            this.setState({
                id:nextProps.wallet.id,
                name: nextProps.wallet.name,
                regNumber: nextProps.wallet.regNumber,
                semester: nextProps.wallet.semester,
                priority: nextProps.wallet.priority,
                courseCode:nextProps.wallet.courseCode,
                courseName:nextProps.wallet.courseName,
                creditHours:nextProps.wallet.creditHours
            })
        }
    }
    componentDidMount (){
        this.props.getWallet(this.props.match.params.id)
    }

    changeHandler = (event, fieldName) => {
        this.setState({
            [fieldName]: event.target.value
        })
    }

    submitHandler = (event) => {
        const updateWallet = {
            id:this.state.id,
            name: this.state.name,
            regNumber: this.state.regNumber,
            semester: this.state.semester,
            priority: this.state.priority,
            courseCode:this.state.courseCode,
            courseName:this.state.courseName,
            creditHours:this.state.creditHours
        }
        this.props.updateWallet(this.state.id,updateWallet,this.props.history)
        event.preventDefault()

    }

    render() {
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Update Event </h5>
                            <hr />
                            <form onSubmit={(event) => this.submitHandler(event)}>
                                <div className="form-group">
                                    <input type="text" value={this.state.name} onChange={(event) => this.changeHandler(event, "name")} className={classnames("form-control form-control-lg", { "is-invalid": this.state.errors.name })} placeholder="Student  Name" />
                                    <p className="text-danger">{this.state.errors.name}</p>
                                </div>

                                <div className="form-group">
                                    <input type="text" value={this.state.regNumber} onChange={(event) => this.changeHandler(event, "regNumber")} className={classnames("form-control form-control-lg", { "is-invalid": this.state.errors.regNumber })} placeholder="Student RegNumber" />
                                    <p className="text-danger">{this.state.errors.regNumber}</p>
                                </div>

                                <div className="form-group">
                                    <textarea value={this.state.semester} onChange={(event) => this.changeHandler(event, "semester")} className={classnames("form-control form-control-lg", { "is-invalid": this.state.errors.semester })} placeholder="Semester"></textarea>
                                    <p className="text-danger">{this.state.errors.semester}</p>
                                </div>



                                <div className="form-group">
                                    <textarea value={this.state.courseName} onChange={(event) => this.changeHandler(event, "courseName")} className={classnames("form-control form-control-lg", { "is-invalid": this.state.errors.courseName })} placeholder="Course Name"></textarea>
                                    <p className="text-danger">{this.state.errors.courseName}</p>
                                </div>

                                <div className="form-group">
                                    <textarea value={this.state.courseCode} onChange={(event) => this.changeHandler(event, "courseCode")} className={classnames("form-control form-control-lg", { "is-invalid": this.state.errors.courseCode })} placeholder="Course Code"></textarea>
                                    <p className="text-danger">{this.state.errors.courseCode}</p>
                                </div>

                                <div className="form-group">
                                    <textarea value={this.state.creditHours} onChange={(event) => this.changeHandler(event, "creditHours")} className={classnames("form-control form-control-lg", { "is-invalid": this.state.errors.creditHours })} placeholder="Credit Hours"></textarea>
                                    <p className="text-danger">{this.state.errors.creditHours}</p>
                                </div>
                                <div className="form-group">
                                    <select value={this.state.priority} className="form-control form-control-lg" onChange={(event) => this.changeHandler(event, "priority")}>
                                        <option value={3}>Event Priority</option>
                                        <option value={1}>High</option>
                                        <option value={2}>Medium</option>
                                        <option value={3}>Low</option>
                                    </select>
                                </div>

                                <input onClick={(event) => this.submitHandler(event)} className="btn btn-primary btn-block mt-4" value="Update" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapToPropos = (state) => ({
    errors: state.errors,
    wallet:state.wallet.wallet
})

export default connect(mapToPropos, { getWallet, updateWallet })(UpdateWallet)
