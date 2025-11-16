import { useState } from 'react';
import Navbar from '../../components/Navbar';
import styles from './index.module.css';

const LoginPage = () => {
  const [showPw, setShowPw] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  function toggleShowPw() {
    setShowPw(!showPw);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className={'main-page'}>
      <div className={'background-container'}>
        <img src="https://storage.123fakturera.se/public/wallpapers/sverige43.jpg" alt="" />
      </div>
      <Navbar />
      <div className={styles.mainBody}>
        <div className={styles.loginBox}>
          <form onSubmit={handleSubmit}>
            <h2 className={styles.loginHeading}>Log in</h2>

            <section className={styles.loginSection}>
              <div className={styles.inputSection}>
                <label>Enter your email address</label>

                <input
                  type="email"
                  required
                  name="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputSection}>
                <label>Enter your password</label>

                <div className={styles.passwordInput}>
                  <input
                    type={!showPw ? 'password' : 'text'}
                    id="password"
                    required
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                  />
                  {!showPw ? (
                    <img
                      className={styles.showPW}
                      src="https://online.123fakturera.se/components/icons/show_password.png"
                      alt=""
                      onClick={() => toggleShowPw()}
                    />
                  ) : (
                    <img
                      className={styles.showPW}
                      src="https://online.123fakturera.se/components/icons/hide_password.png"
                      alt=""
                      onClick={() => toggleShowPw()}
                    />
                  )}
                </div>
              </div>
            </section>
            <div className={styles.loginButtonSection}>
              <button className={styles.loginButton} type="submit">
                Log in
              </button>
            </div>
          </form>

          <section className={styles.bottomSection}>
            <a href="/register">Register</a>
            <a id="forgot-password-link" href="/forgot-password">
              Forgotten password?
            </a>
          </section>
        </div>
      </div>
      <div className={styles.footer}>
        <footer className={styles.footerMain}>
          <div className={styles.footerTop}>
            <div className={styles.fakturaText}>123 Fakturera</div>
            <div className={styles.footerMenu}>
              <a href="https://www.123fakturera.se/index.html">
                <p>Home</p>
              </a>
              <a href="https://www.123fakturera.se/bestall.html">
                <p>Order</p>
              </a>
              <a href="https://www.123fakturera.se/kontaktaoss.html">
                <p>Contact us</p>
              </a>
            </div>
          </div>

          <div className={styles.copyright}>
            <p className={styles.copyrightText}>
              © Lättfaktura, CRO no. 638537, 2025. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LoginPage;
