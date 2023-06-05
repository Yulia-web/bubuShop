import React, { useContext, useState } from "react";
import {observer} from "mobx-react-lite";

import {Link} from "react-router-dom";
import {ROUTES} from '../../utils/routes';

import Facebook from "../../images/icons/social-media/facebookBlue.png";
import Google from "../../images/icons/social-media/google.png";
import Logo from '../../images/pink-logo.png';

import { login } from "../../http/userAPI";
import { Context } from "../../index";

const Login = observer(() => {
  const {user}  = useContext(Context)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = async () => {
    try {
      let data;
      data = await login(email, password)
      user.setUser(user)
      user.setIsAuth(true)
    } catch(e) {
      alert(e.response.data.message)
    }
  }
        return (
            <div className="admission">
                <div className="logo">
                  <Link to={ROUTES.HOME}>
                    <img src={Logo} alt="logo"/>
                  </Link>
                </div>
                <div className="title">
                    <h2>Вхід</h2>
                </div>
                <form className="form">
                <input className="email-input"  placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)}></input>
                    <input className="password-input" placeholder="Пароль" type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                    <a href="#" className="forgot-password-link">Забули пароль?</a>
                    <div className="actions">
                        <Link to={ROUTES.HOME}  onClick={signIn} className="admission-button">Увійти</Link>
                        <Link to={ROUTES.REGISTRATION} className="another-admission-button">У мене немає акаунта</Link>
                    </div>
                </form>
                <p className="or">Або</p>
                <div className="alternative-admission">
                    <div className="title">Увійти за допомогою:</div>
                    <div className="actions">
                        <a href="#">
                            <img src={Google} alt="" className="google"></img>
                        </a>
                        <a href="#">
                            <img src={Facebook} alt="" className="facebook"></img>
                        </a>
                    </div>
                </div>
            </div>
        )
    
});

export default Login;