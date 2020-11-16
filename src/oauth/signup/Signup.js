import React, { Component } from "react";
import "./Signup.scss";
import { Link, Redirect } from "react-router-dom";
import {
    GOOGLE_AUTH_URL,
    FACEBOOK_AUTH_URL,
    GITHUB_AUTH_URL,
    KAKAO_AUTH_URL,
    NAVER_AUTH_URL,
} from "../constants";
import { signup } from "../util/APIUtils";
import fbLogo from "../img/fb-logo.png";
import googleLogo from "../img/google-logo.png";
import githubLogo from "../img/github-logo.png";
import Alert from "react-s-alert";
import kakaoLogo from "../img/kakaolink_btn_medium.png";
import naverLogo from "../img/naver_green.png";
import ButtonTemplate from "../../icon/view/ButtonTemplate";

class Signup extends Component {
    render() {
        if (this.props.authenticated) {
            return (
                <Redirect
                    to={{
                        pathname: "/",
                        state: { from: this.props.location },
                    }}
                />
            );
        }

        return (
            <div className="signup-container">
                <div className="signup-content">
                    <h1 className="signup-title">Signup to StudyOn</h1>
                    <SignupForm {...this.props} />
                    <span className="login-link">
                        이미 계정이 있으신가요? <Link to="/login">Login!</Link>
                    </span>
                    <div className="social-login">
                        <SocialLogin />
                    </div>
                </div>
            </div>
        );
    }
}

class SocialLogin extends Component {
    render() {
        return (
            <div>
                <a
                    // className="btn btn-block social-btn google"
                    href={GOOGLE_AUTH_URL}
                >
                    <img src={googleLogo} alt="Google" />
                </a>
                {/* <a
                    // className="btn btn-block social-btn facebook"
                    href={FACEBOOK_AUTH_URL}
                >
                    <img src={fbLogo} alt="Facebook" />
                </a> */}
                {/* <a
                    // className="btn btn-block social-btn github"
                    href={GITHUB_AUTH_URL}
                >
                    <img src={githubLogo} alt="Github" />
                </a> */}
                <a
                    // className="btn btn-block social-btn github"
                    href={KAKAO_AUTH_URL}
                >
                    <img src={kakaoLogo} alt="Kakao" />
                </a>
                <a
                    // className="btn btn-block social-btn github"
                    href={NAVER_AUTH_URL}
                >
                    <img src={naverLogo} alt="Naver" />
                </a>
            </div>
        );
    }
}

// class SocialSignup extends Component {
//     render() {
//         return (
//             <div className="social-signup">
//                 <a
//                     className="btn btn-block social-btn google"
//                     href={GOOGLE_AUTH_URL}
//                 >
//                     <img src={googleLogo} alt="Google" /> Sign up with Google
//                 </a>
//                 <a
//                     className="btn btn-block social-btn facebook"
//                     href={FACEBOOK_AUTH_URL}
//                 >
//                     <img src={fbLogo} alt="Facebook" /> Sign up with Facebook
//                 </a>
//                 <a
//                     className="btn btn-block social-btn github"
//                     href={GITHUB_AUTH_URL}
//                 >
//                     <img src={githubLogo} alt="Github" /> Sign up with Github
//                 </a>
//                 <a
//                     className="btn btn-block social-btn github"
//                     href={KAKAO_AUTH_URL}
//                 >
//                     <img src={githubLogo} alt="Kakao" /> Sign up with Kakao
//                 </a>
//                 <a
//                     className="btn btn-block social-btn github"
//                     href={NAVER_AUTH_URL}
//                 >
//                     <img src={githubLogo} alt="Naver" /> Sign up with Naver
//                 </a>
//             </div>
//         );
//     }
// }

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: inputValue,
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const signUpRequest = Object.assign({}, this.state);

        signup(signUpRequest)
            .then((response) => {
                Alert.success(
                    "You're successfully registered. Please login to continue!"
                );
                this.props.history.push("/login");
            })
            .catch((error) => {
                Alert.error(
                    (error && error.message) ||
                        "Oops! Something went wrong. Please try again!"
                );
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-item">
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <div className="form-item">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <div className="form-item">
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <div className="form-item">
                    <ButtonTemplate
                        type="submit"
                        text={"Sign Up"}
                    ></ButtonTemplate>
                </div>
            </form>
        );
    }
}

export default Signup;
