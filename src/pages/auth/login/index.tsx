// eslint-disable-next-line import/no-extraneous-dependencies
import {
  AddReaction,
  Battery30Sharp,
  FiveG,
  LockOpen,
  Wifi,
} from '@mui/icons-material';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Button, ButtonGroup } from '@mui/material';

import { LoginForm } from '@/components/Auth/Login';

export default function Login() {
  return (
    <div className="login__container">
      <div className="left">
        <div className="circle" />
        <div className="content">
          <div className="content--logo">
            <div className="content--logo__image" />
          </div>
          <div className="content--title">Dynamic Island</div>
        </div>
      </div>
      <div className="right">
        <div className="login-form">
          <div className="top-header">
            <div className="top-header--left">9:40</div>
            <div className="top-header--center">
              <div className="first-icon">
                <AddReaction className="first-icon--left" />
              </div>
              <div className="last-icon">
                <LockOpen className="last-icon--right" />
              </div>
            </div>
            <div className="top-header--right">
              <Wifi />
              <FiveG />
              <Battery30Sharp />
            </div>
          </div>
          <div className="login-form__title">Welcom To Login !</div>
          <div className="login-form__menu">
            <ButtonGroup>
              <Button className="login-form__menu--btn-login">Login</Button>
              <Button className="login-form__menu--btn-signup">Sign up</Button>
            </ButtonGroup>
          </div>
          <div className="login-form__input">
            <div className="login-form__input--circle">
              <div className="login-form__input--circle__input--form">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
