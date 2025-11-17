import { useState } from 'react';
import Navbar from '../../components/Navbar';
import styles from './index.module.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPw, setShowPw] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const { t } = useTranslation();
  function toggleShowPw() {
    setShowPw(!showPw);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email) {
      newErrors.email = t('This field cannot be empty');
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = t('Please enter a valid email address');
    }

    if (!form.password) {
      newErrors.password = t('This field cannot be empty');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const res = await fetch('http://localhost:3001/api/v1/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
          credentials: 'include',
        });

        const data = await res.json();
        console.log(data);

        if (!res.ok) {
          if (data.message === 'Invalid Email') {
            setErrors({ email: data.message, password: '' });
          } else if (data.message === 'Incorrect password') {
            setErrors({ email: '', password: data.message });
          }
          return;
        }
        navigate('/pricelist');
      } catch (err) {
        console.error('Login error:', err);
      }
    }
  };

  return (
    <div className={'main-page'}>
      <div className={'background-container'}>
        <img src="https://storage.123fakturera.se/public/wallpapers/sverige43.jpg" alt="" />
      </div>
      <Navbar />
      <div className={styles.mainBody}>
        <div className={styles.loginBox}>
          <form onSubmit={handleSubmit} noValidate>
            <h2 className={styles.loginHeading}>{t('Log in')}</h2>

            <section className={styles.loginSection}>
              <div className={styles.inputSection}>
                <label>{t('Enter your email address')}</label>

                <input
                  type="email"
                  required
                  name="email"
                  placeholder={t('Email address')}
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && <span className={styles.errorLabel}>{errors.email}</span>}
              </div>
              <div className={styles.inputSection}>
                <label>{t('Enter your password')}</label>

                <div className={styles.passwordInput}>
                  <input
                    type={!showPw ? 'password' : 'text'}
                    id="password"
                    required
                    name="password"
                    placeholder={t('Password')}
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
                {errors.password && <span className={styles.errorLabel}>{errors.password}</span>}
              </div>
            </section>
            <div className={styles.loginButtonSection}>
              <button className={styles.loginButton} type="submit">
                {t('Log in')}
              </button>
            </div>
          </form>

          <section className={styles.bottomSection}>
            <a href="/register">{t('Register')}</a>
            <a id="forgot-password-link" href="/forgot-password">
              {t('Forgotten password?')}
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
                <p>{t('Home')}</p>
              </a>
              <a href="https://www.123fakturera.se/bestall.html">
                <p>{t('Order')}</p>
              </a>
              <a href="https://www.123fakturera.se/kontaktaoss.html">
                <p>{t('Contact us')}</p>
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
