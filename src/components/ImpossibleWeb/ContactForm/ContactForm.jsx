import styles from './ContactForm.module.scss';
import { BsCheckCircle } from 'react-icons/bs';
import ConForm from './Form/Form';

export default function ContactForm() {
  return (
    <div className={styles.formContainer} id='contacts'>
      <div className={styles.container}>
        <div className={styles.contactBlock}>
          <div className={styles.header}>
            <h2>Ready to scale?</h2>
            <p>
              Tell us about your project. We typically respond within 24 hours to schedule a
              discovery call and provide a detailed proposal.
            </p>
            <ul className={styles.features}>
              <li>
                <BsCheckCircle className={styles.iconList} />
                Direct access to senior developers & strategists
              </li>
              <li>
                <BsCheckCircle className={styles.iconList} />
                Transparent pricing and timeline estimates
              </li>
              <li>
                <BsCheckCircle className={styles.iconList} />
                No commitment required for initial consultation
              </li>
            </ul>
          </div>
          <ConForm />
        </div>
      </div>
    </div>
  );
}
