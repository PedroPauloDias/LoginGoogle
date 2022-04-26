import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import Api from '../../Api'

import { AreaLogin } from "./styled";
import { BtnDefaultIcons, BtnDefault } from "../../components/styled";
import { BsFacebook } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";

export default ({onReceiveGoogle}) => {

  const actionLoginGoogle = async () => {
    let result = await Api.googleLogar();
    
    if (result) {
      onReceiveGoogle(result.user);
      

    }else {
      alert('error');
    }

}


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/registrar">
          <AreaLogin>
            <h1 className="organize">
              <Link to="/"> <BsArrowLeftShort />
              </Link>
              
              Crie sua conta</h1>

            <p>Crie sua conta, é grátis</p>

            <form>
            <div className="form-input">
                <label>Nome</label>
                <input type="text"></input>
              </div>
              <div className="form-input">
                <label>E-mail</label>
                <input type="email"></input>
              </div>
              <div className="form-input">
                <label>Senha</label>
                <input type="password"></input>
              </div>
              <BtnDefault>Comece agora </BtnDefault>
              <div className="footerLogin">
               Já tem uma conta?
                <Link to="/">Faça login</Link>
              </div>
            </form>
          </AreaLogin>
        </Route>
        <Route exact path="*">
          <AreaLogin>
            <h1>Faça login em sua conta</h1>
            <BtnDefaultIcons>
              <BsFacebook />
              <div className="center">Fazer login com o facebook</div>
            </BtnDefaultIcons>

            <BtnDefaultIcons onClick={actionLoginGoogle}>
              <BsGoogle />
              <div className="center">Fazer login com o google</div>
            </BtnDefaultIcons>

            <p>OU</p>
            <form>
              <div className="form-input">
                <label>E-mail</label>
                <input type="email"></input>
              </div>
              <div className="form-input">
                <label>Senha</label>
                <input type="password"></input>
              </div>
              <BtnDefault>Entrar </BtnDefault>
              <div className="footerLogin">
                Não tem uma conta?
                <Link to="/registrar"> Registre-se </Link>
              </div>
            </form>
          </AreaLogin>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
