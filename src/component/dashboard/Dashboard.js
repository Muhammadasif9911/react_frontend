import React, { Component } from 'react'
import DashboardItem from './DashboardItem'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getWallets } from '../../actions/projectAction'


class Dashboard extends Component {

    componentDidMount() {
        this.props.getWallets()
    }

    render() {
        const wallets = this.props.wallets
        const walletComponet = wallets.map(wallet => (<DashboardItem key={wallet.id} wallet={wallet} />))

        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Course Regestration</h1>
                            <br />
                            <div className="btn-group">
                                <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Create new
                            </button>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/createcourse">New Course</Link>
                                    <button disabled className="dropdown-item">..</button>
                                </div>
                            </div>
                            <br />
                            <div className="card text-center">
                                <div className="card-header bg-success text-white">
                                    <h4>Current Course </h4>
                                    
                                </div>
                            </div>
                            <hr />

                            {

                                //<!-- Project Item Component -->
                            }
                            {walletComponet}

                            {
                                // <!-- End of Project Item Component -->
                            }

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStatToProp = (state) => ({
    wallets: state.wallet.wallets 
})

export default connect(mapStatToProp, { getWallets })(Dashboard)
