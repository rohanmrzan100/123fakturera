import { useTranslation } from 'react-i18next';
import HtmlContent from '../../components/HtmlContent';
import Navbar from '../../components/Navbar';
import styles from './index.module.css';
const TermsPage = () => {
  const { t } = useTranslation();
  function handleGoBack() {}
  return (
    <div className={'main-page'}>
      <Navbar />
      <div className={styles.content}>
        <Navbar />

        <section className={styles.termsSection}>
          <div className={styles.termsTopText}>
            <h1 className={styles.termsHeading}>{t('Terms')}</h1>
            <button className={styles.goBackButton} onClick={handleGoBack}>
              {t('Close and Go Back')}
            </button>
          </div>

          <div className={styles.backTerms}>
            <HtmlContent htmlString={t('terms-text')} />
          </div>

          <div className={styles.termsTopText}>
            <button className={`${styles.goBackButton}`} onClick={handleGoBack}>
              {t('Close and Go Back')}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;
