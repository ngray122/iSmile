// import React, { useState } from 'react';


// const formStyle = {
//     width: '400px'
// };



// const User = props => {

//     let [firstName, setFirstname] = useState('');
//     let [lastName, setLastname] = useState('');
//     let [email, setEmail] = useState('');
//     let [password, setPassword] = useState('');
//     let [confirmPassword, setConfirmPassword] = useState('');



//     return (
//         <div >
//             <div style={formStyle} className="container">
//                 <h1>Registration</h1>

//                 <form action="">
//                     <div className="form-group">
//                         <label htmlFor="" className="form-label">First Name:</label>
//                         <input type="text" className="form-control" onChange={(e) => setFirstname(e.target.value)} />

//                         {
//                             firstName.length < 2 && firstName.length > 0
//                                 ?
//                                 <p className="text-danger">First Name must be at least 2 characters, length is {firstName.length}!</p>
//                                 :
//                                 ""
//                         }


//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="" className="form-label">Last Name:</label>
//                         <input type="text" className="form-control" onChange={(e) => setLastname(e.target.value)} />

//                         {
//                             lastName.length < 2 && lastName.length > 0
//                                 ?
//                                 <p className="text-danger">Last Name must be at least 2 characters, length is {lastName.length}!</p>
//                                 :
//                                 ""
//                         }

//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="" className="form-label">Email</label>
//                         <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />

//                         {
//                             email.length < 5 && email.length > 0
//                                 ?
//                                 <p className="text-danger">Email must be at least 5 characters, length is {email.length}!</p>
//                                 :
//                                 ""
//                         }

//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="" className="form-label">Password:</label>
//                         <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
//                         {
//                             password.length < 8 && password.length > 0
//                                 ?
//                                 <p className="text-danger">Password must be at least 8 characters, length is {password.length}!</p>
//                                 :
//                                 ""
//                         }

//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="" className="form-label">Confirm Password:</label>
//                         <input type="password" className="form-control" onChange={(e) => setConfirmPassword(e.target.value)} />

//                         {
//                             confirmPassword.length > 0 || confirmPassword !== password 
//                             ?
//                                 <p className="text-danger">Passwords must match!</p> 
//                             : 
//                                 ""
//                         }


// {/* const validatePassword = (e) => {

// if (confirmPassword.length < 8 && confirmPassword !== password) {
//     setConfirmPassword(e)
//     return (<p className="text-danger">Passwords must match!</p>)
// } else if (confirmPassword < 8 && confirmPassword > 0) {
//     return (<p>"Hello"</p>)
// }
// } */}

//                     </div>

//                     <input type="submit" />
//                 </form>
//                 <hr />
//                 <p>First Name: {firstName}</p>
//                 <p>Last Name: {lastName}</p>
//                 <p>Email: {email}</p>
//                 <p>Password: {password}</p>
//                 <p>Confirm Password: {confirmPassword}</p>
//             </div>

//         </div>
//     );
// }
// export default User;