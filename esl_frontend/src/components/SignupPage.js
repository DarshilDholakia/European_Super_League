import {useContext, useState} from "react";
import { UserContext } from "./UserContext";

const SignupPage = ({addNewUser, userList}) => {

 // States for registration
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [teamName, setTeamName] = useState('');
 const {login, user} = useContext(UserContext)

 // States for checking the errors
 const [submitted, setSubmitted] = useState(false);
 const [error, setError] = useState(false);

 // Handling the name change
 const handleEmail = (e) => {
   setEmail(e.target.value);
   setSubmitted(false);
 };

 // Handling the email change
 const handlePassword = (e) => {
   setPassword(e.target.value);
   setSubmitted(false);
 };

 // Handling the password change
 const handleTeamName = (e) => {
   setTeamName(e.target.value);
   setSubmitted(false);
 };

 // Handling the form submission
 const handleSubmit = () => {
   if (email === '' || password === '' || teamName === '') {
    //  setError(true);
    alert("Please fill in all fields")
   } 
    //  setSubmitted(true);
    //  setError(false);
    login (userList[userList.length -1].id)
    const newUser = {
        email:email,
        password:password,
        teamName:teamName
    }
    addNewUser(newUser)
 };

 // Showing success message
 const successMessage = () => {
   return (
     <div
       className="success"
       style={{
         display: submitted ? '' : 'none',
       }}>
       <h1> {teamName} successfully registered!!</h1>
     </div>
   );
 };

 // Showing error message if error is true
 const errorMessage = () => {
   return (
     <div
       className="error"
       style={{
         display: error ? '' : 'none',
       }}>
       <h1>Please enter all the fields</h1>
     </div>
   );
 };

 return (
   <div className="form">
     <div>
       <h1>Sign up</h1>
     </div>

     {/* Calling to the methods */}
     <div className="messages">
       {errorMessage()}
       {successMessage()}
     </div>

     <form onSubmit={handleSubmit}>
       {/* Labels and inputs for form data */}
       <label className="label">Email</label>
       <input onChange={handleEmail} className="input"
         value={email} type="email" />

       <label className="label">Password</label>
       <input onChange={handlePassword} className="input"
         value={password} type="password" />

       <label className="label">Team Name</label>
       <input onChange={handleTeamName} className="input"
         value={teamName} type="text" />

        <br></br>
        <br></br>
        <input type="submit" value="Sign-up" className="sign-up-submit-button"/>

       {/* <button onClick={handleSubmit} className="btn" type="submit">Submit</button> */}
       
     </form>
   </div>
   
 );
}
 
export default SignupPage;