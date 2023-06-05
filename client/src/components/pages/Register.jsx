import React, { useContext, useState } from "react";
import {observer} from "mobx-react-lite";

import {Link} from "react-router-dom";
import {ROUTES} from '../../utils/routes';

import Facebook from "../../images/icons/social-media/facebookBlue.png";
import Google from "../../images/icons/social-media/google.png";
import Logo from '../../images/pink-logo.png';
import { registration } from "../../http/userAPI";
import { Context } from "../../index";

const RegisterPage = observer(() => {
      const {user}  = useContext(Context)
      //alert(user.isAuth);

      const [name, setName] = useState('')
      const [phone, setPhone] = useState('')
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')

      const signIn = async () => {
        try {
          let data;
          data = await registration(name, phone, email, password)
          user.setUser(user)
          user.setIsAuth(true)
          alert(user.isAuth);
        } catch(e) {
          alert(e.response.data.message)
        }

      }
        return (
            <div className="admission">
                <div className="logo">
                    <img src={Logo} alt="logo"/>
                </div>
                <div className="title">
                    <h2>Реєстрація</h2>
                </div>
                <form className="form">
                    <input className="text-input" placeholder="Ім’я" type="text" value={name} onChange={e => setName(e.target.value)}></input>
                    <input className="phone-input"  placeholder="Телефон " type="tel" value={phone} onChange={e => setPhone(e.target.value)}></input>
                    <input className="email-input"  placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)}></input>
                    <input className="password-input" placeholder="Пароль" type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                    <div className="actions">
                        <Link to={ROUTES.HOME} onClick={signIn} className="admission-button">Зареєструватись</Link>
                        <Link to={ROUTES.LOGIN} className="another-admission-button">У мене є акаунт</Link>
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

export default RegisterPage;