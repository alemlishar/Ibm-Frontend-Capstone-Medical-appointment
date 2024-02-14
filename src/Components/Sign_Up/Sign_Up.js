
import React from "react";
import "./Sign_Up.css";

const Sign_Up = () => {
    const styleColor = { color: "#2190FF" }
    const styleMarign = { margintop: "5%" }
    const styleTet = { textalign: "left" }


return ( 
<div class="container" style={styleMarign}>
        <div class="signup-grid">
            <div class="signup-text">
                <h1>Sign Up</h1>
            </div>
            <div class="signup-text1" style={styleTet}>
                Already a member? <span><a href="../Login/Login.html" style={styleColor}> Login</a></span>
            </div>
            <div class="signup-form">
                <form>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" required class="form-control" placeholder="Enter your name" aria-describedby="helpId" />
                    <div class="form-group">
                        <label for="phone">Phone</label>
                        <input type="tel" name="phone" id="phone" required class="form-control" placeholder="Enter your phone number" aria-describedby="helpId" />
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" required class="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input name="password" id="password" required class="form-control" placeholder="Enter your password" aria-describedby="helpId" />
                    </div>
                    <div class="btn-group">
                        <button type="submit" class="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                        <button type="reset" class="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    );
};

export default Sign_Up;