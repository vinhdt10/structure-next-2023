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
        <legend>Login</legend>
        <div className="mb-3">
          <label htmlFor="usernameInput">Username</label>
          <input
            type="text"
            id="usernameInput"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordInput">Password</label>
          <input
            type="password"
            id="passwordInput"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <div>
            <input
              type="checkbox"
              id="RememberMeInput"
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="RememberMeInput">Remember Me</label>
          </div>
        </div>
        {errorMessage && <div role="alert">{errorMessage}</div>}
        <button type="submit" disabled={isLoading}>
          Login
        </button>
      </fieldset>
    </form>
  );
}
