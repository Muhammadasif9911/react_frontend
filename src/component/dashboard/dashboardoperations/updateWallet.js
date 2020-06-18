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
        if(nextProps.wallet)
        {
            this.setState({
                id:nextProps.wallet.id,
                name: nextProps.wallet.name,
                BloodGroup: nextProps.wallet.BloodGroup,
                gender: nextProps.wallet.gender,
                mobile: nextProps.wallet.mobile
              
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
            BloodGroup: this.state.BloodGroup,
            gender: this.state.gender,
            mobile: this.state.mobile
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
                                    <input type="text" value={this.state.name} onChange={(event) => this.changeHandler(event, "name")} className={classnames("form-control form-control-lg", { "is-invalid": this.state.errors.name })} placeholder=" Name" />
                                    <p className="text-danger">{this.state.errors.name}</p>
                                </div>

                                <div className="form-group">
                                    <input type="text" value={this.state.BloodGroup} onChange={(event) => this.changeHandler(event, "BloodGroup")} className={classnames("form-control form-control-lg", { "is-invalid": this.state.errors.BloodGroup })} placeholder=" " />
                                    <p className="text-danger">{this.state.errors.BloodGroup}</p>
                                </div>

                                <div className="form-group">
                                    <textarea value={this.state.gender} onChange={(event) => this.changeHandler(event, "gender")} className={classnames("form-control form-control-lg", { "is-invalid": this.state.errors.gender })} placeholder="gender "></textarea>
                                    <p className="text-danger">{this.state.errors.gender}</p>
                                </div>



                                <div className="form-group">
                                    <textarea value={this.state.mobile} onChange={(event) => this.changeHandler(event, "mobile")} className={classnames("form-control form-control-lg", { "is-invalid": this.state.errors.mobile })} placeholder="mobile no"></textarea>
                                    <p className="text-danger">{this.state.errors.mobile}</p>
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
