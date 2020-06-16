import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteWallet } from '../../actions/projectAction'


class DashboardItem extends Component {

    deleteClickBtn = () => {
        if (window.confirm("Are you use, you wan to delete this wallet")) {
            this.props.deleteWallet(this.props.wallet.id)
        }
    }

    render() {
        const wallet = this.props.wallet
        return (
            <div className="container">
                <div className="card card-body bg-light mb-3">
                    <div className="row" >
                        <div className="col-lg-4 col-md-3 col-6">
                            <h4>Student Name</h4>
                            <h3>{wallet.name} </h3>
                            <h4>Student RegNumber</h4>
                            <h5>{wallet.regNumber}</h5>

                        </div>
                        <div className="col-lg-4 col-md-3 col-6 text-center">
                            <h4>Course Name</h4>
                            <h5>{wallet.courseName}</h5>
                            <h4>Semester</h4>
                            <h5>{wallet.semester} </h5>
                            <h4>Course Code</h4>
                            <h5>{wallet.courseCode}</h5>
                            <h4>Course Credit Hours</h4>
                            <h5>{wallet.creditHours}</h5>
                        </div>
                        <div className="col-md-4 col-12 d-lg-block">
                            <ul className="list-group">
                                <a href="transactions.html">
                                    <li className="list-group-item board text-success">
                                        <i className="fa fa-flag-checkered pr-1"> View Course </i>
                                    </li>
                                </a>
                                <Link to={`/updatecourse/${wallet.id}`}>
                                    <li className="list-group-item update text-info">
                                        <i className="fa fa-edit pr-1"> Update Course Info</i>
                                    </li>
                                </Link>
                                <Link to="/dashboard" onClick={() => this.deleteClickBtn()}>
                                    <li className="list-group-item delete text-danger">
                                        <i className="fa fa-minus-circle pr-1"> Delete Course</i>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { deleteWallet })(DashboardItem)
