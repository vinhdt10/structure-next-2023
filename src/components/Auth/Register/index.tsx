import { useState } from 'react';

export function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit() {
    const data = {
      payload: { username, password, email, token: {} },
      message: '',
    };
    if (data.payload && data.payload.token) {
      setTimeout(() => {}, 1000);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Register</legend>
        <div className="mb-3">
          <label htmlFor="emailInput">Email</label>
          <input
            type="email"
            id="emailInput"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
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
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
}
