import { BsArrowLeftShort } from 'react-icons/bs';
import scss from './PrivacyPolicy.module.scss';

export default function PrivacyPolicy() {
  return (
    <section className={scss.privacyPolicy}>
      <div className={scss.container}>
        {/* <button onClick={handleBack} className={scss.backButton}>
          <BsArrowLeftShort className={scss.iconBack} />
          Back
        </button> */}

        <div className={scss.content}>
          <h2 className={scss.title}>Privacy Policy</h2>
          <h3 className={scss.sectionTitle}>1. General Provisions</h3>
          <p className={scss.text}>
            We respect your privacy and are committed to protecting your personal data in accordance
            with the General Data Protection Regulation (GDPR) and other applicable laws. This
            Privacy Policy explains how we collect, use, store, and protect your information.
          </p>

          <h3 className={scss.sectionTitle}>2. What Data We Collect</h3>
          <p className={scss.text}>
            We may collect the following personal data when you interact with our website:
          </p>
          <ul className={scss.list}>
            <li>Name, email address, and phone number provided through contact forms.</li>
            <li>
              Website usage data collected through cookies (e.g., IP address, browser type, pages
              you visit).
            </li>
            <li>
              Information provided voluntarily when filling out forms, for example, when ordering a
              Google Ads audit.
            </li>
          </ul>

          <h3 className={scss.sectionTitle}>3. How We Use Your Data</h3>
          <p className={scss.text}>The collected data is used for:</p>
          <ul className={scss.list}>
            <li>Processing your requests, such as ordering a Google Ads audit.</li>
            <li>Improving our website and services by analyzing usage data.</li>
            <li>Sending informational messages if you have given consent for this.</li>
          </ul>

          <h3 className={scss.sectionTitle}>4. Transfer of Data to Third Parties</h3>
          <p className={scss.text}>
            We do not transfer your personal data to third parties, except in the following cases:
          </p>
          <ul className={scss.list}>
            <li>
              Situations where it is necessary to fulfill your requests (for example, payment
              processing).
            </li>
            <li>Cases provided for by law, such as at the request of government authorities.</li>
          </ul>

          <h3 className={scss.sectionTitle}>5. Your Rights</h3>
          <p className={scss.text}>Under GDPR, you have the right to:</p>
          <ul className={scss.list}>
            <li>Access your personal data.</li>
            <li>Correction or deletion of your data.</li>
            <li>Restriction or objection to the processing of your data.</li>
            <li>Data portability.</li>
            <li>Withdraw consent for data processing at any time.</li>
          </ul>
          <p className={scss.text}>
            To exercise these rights, please contact us using the contact information provided
            below.
          </p>

          <h3 className={scss.sectionTitle}>6. Data Protection</h3>
          <p className={scss.text}>
            We use modern technical and organizational measures to protect your data, including
            encryption and access restrictions to information.
          </p>

          <h3 className={scss.sectionTitle}>7. Cookies</h3>
          <p className={scss.text}>
            Our website uses cookies to improve user experience. You can manage cookie settings
            through your browser.
          </p>

          <h3 className={scss.sectionTitle}>8. Changes to the Policy</h3>
          <p className={scss.text}>
            We may periodically update this Privacy Policy. We will notify you of any changes on
            this page.
          </p>

          <h3 className={scss.sectionTitle}>9. Contact Information</h3>
          <p className={scss.text}>
            If you have any questions regarding this Privacy Policy, please contact us:
          </p>
          <ul className={scss.list}>
            <li>
              Email:{' '}
              <a href='mailto:mpdart2013@gmail.com' className={scss.link}>
                mpdart2013@gmail.com
              </a>
            </li>
            <li>Phone: +380734516972</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
