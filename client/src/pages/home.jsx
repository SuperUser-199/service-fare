import logo from '../logo.svg';
export default function Home() {
  return (
    <>
      <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title"><span id="main-logo">ServiceFare </span> <br/>Website is under construction we will be starting our service from 1 Jan  2022</h1>
    </header>
   
</div>
<div>
  <button><a href="/login">Login</a></button>
  <button><a href="/register">Register</a></button>
  <button><a href="/forgotpassword">Forgot Password</a></button>
  
</div>
    </>
  );
}
