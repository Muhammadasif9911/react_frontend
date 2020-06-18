// AliAliAli01import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { createWallet } from '../../../actions/projectAction'
// import classnames from 'classnames'

// class CreateWallet extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             name: '',
//             mobileno: '',
//             gender: '',
//             bloodgroup: '',
//             city:'',
//             area:'',
//             age:'',
//             email: '',
//             password:''

//         }
//     }
//     componentWillReceiveProps(nextProps) {
//         if (nextProps.errors) {
//             this.setState({ errors: nextProps.errors })
//         }
//     }

//     changeHandler = (event, fieldName) => {
//         this.setState({
//             [fieldName]: event.target.value
//         })
//     }

//     submitHandler = (event) => {
//         const newWallet = {
//             name: this.state.name,
//             mobileno: this.state.mobileno,
//             gender: this.state.gender,
//             bloodgroup: this.state.bloodgroup,
//             city:this.state.city,
//             area:this.state.area,
//             email: this.state.email,
//             password:this.state.password,
//             age:this.state.age
//         }
//         this.props.createWallet(newWallet, this.props.history)
//         event.preventDefault()

//     }

//     render() {
//         return (
//             <div className="project">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-8 m-auto">
//                             <h5 className="display-4 text-center">Signup  ! </h5>
//                             <hr />
//                             <form onSubmit={(event) => this.submitHandler(event)}>
//                                 <div className="form-group">
//                                     <input type="text" onChange={(event) => this.changeHandler(event, "name")} className={classnames("form-control form-control-lg", { "is-invalid": this.state.errors.name })} placeholder=" Name" />
//                                     <p className="text-danger">{this.state.errors.name}</p>
//                                 </div>

//                                 <div className="form-group">
//                                     <input type="text" onChange={(event) => this.changeHandler(event, "regNumber")} className={classnames("form-control form-control-lg", { "is-invalid": this.state.errors.mobileno })} placeholder="mobile no" />
//                                     <p className="text-danger">{this.state.errors.mobileno}</p>
//                                 </div>

//                                 <div className="form-group">
//                                     <input onChange={(event) => this.changeHandler(event, "semester")} className={classnames("form-control form-control-lg", { "is-invalid": this.state.errors.gender })} placeholder="gender" />
//                                     <p className="text-danger">{this.state.errors.gender}</p>
//                                 </div>



//                                 <div className="form-group">
//                                 <input onChange={(event) => this.changeHandler(event, "courseName")} className={classnames("form-control form-control-lg", { "is-invalid": this.state.errors.city })} placeholder="city" />
//                                 <p className="text-danger">{this.state.errors.city}</p>
//                                 </div>

//                                 <div className="form-group">
//                                 <input onChange={(event) => this.changeHandler(event, "courseCode")} className={classnames("form-control form-control-lg", { "is-invalid": this.state.errors.area})} placeholder="area" />
//                                 <p className="text-danger">{this.state.errors.area}</p>
//                                 </div>

//                                 <div className="form-group">
//                                 <input onChange={(event) => this.changeHandler(event, "creditHours")} className={classnames("form-control form-control-lg", { "is-invalid": this.state.errors.age })} placeholder="age" />
//                                 <p className="text-danger">{this.state.errors.age}</p>
//                                 </div>
//                                 <div className="form-group">
//                                 <input onChange={(event) => this.changeHandler(event, "courseCode")} className={classnames("form-control form-control-lg", { "is-invalid": this.state.errors.email })} placeholder="email" />
//                                 <p className="text-danger">{this.state.errors.email}</p>
//                                 </div>

//                                 <div className="form-group">
//                                 <input onChange={(event) => this.changeHandler(event, "creditHours")} className={classnames("form-control form-control-lg", { "is-invalid": this.state.errors.password })} placeholder="****" />
//                                 <p className="text-danger">{this.state.errors.password}</p>
//                                 </div>

//                                 <input type="submit" className="btn btn-primary btn-block mt-4" value="Create" />
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
// const mapToPropos = (state) => ({
//     errors: state.errors
// })

// export default connect(mapToPropos, { createWallet })(CreateWallet)
