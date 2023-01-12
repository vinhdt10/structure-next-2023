// eslint-disable-next-line import/no-extraneous-dependencies
import { Button, Checkbox, FormControlLabel } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import { pink } from '@mui/material/colors';
import { useEffect, useState } from 'react';

export function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Remove the User's token which saved before.
  }, []);

  function handleSubmit(e: any) {
    e.preventDefault();

    try {
      setIsLoading(true);
      // API call:
      const data = {
        payload: { username, password, rememberMe, token: {} },
        message: '',
      };
      if (data.payload && data.payload.token) {
        setTimeout(() => {}, 1000);
      } else {
        setErrorMessage(data.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend className="mb-3 text-lg font-black">Login</legend>
        <div className="mb-3">
          <input
            type="text"
            id="usernameInput"
            placeholder="Username"
            className="login-input"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            id="passwordInput"
            className="login-input"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <FormControlLabel
            label={'Remember me'}
            onChange={() => {
              setRememberMe(true);
            }}
            control={
              <Checkbox
                defaultChecked
                sx={{
                  color: pink[800],
                  '&.Mui-checked': {
                    color: pink[600],
                  },
                }}
              />
            }
            defaultChecked
          />
        </div>
        {errorMessage && <div role="alert">{errorMessage}</div>}
        <Button
          className="bg-yellow-500 hover:bg-pink-700 text-black font-bold py-2 px-4"
          type="submit"
          disabled={isLoading}
        >
          Login Now
        </Button>
      </fieldset>
    </form>
  );
}
