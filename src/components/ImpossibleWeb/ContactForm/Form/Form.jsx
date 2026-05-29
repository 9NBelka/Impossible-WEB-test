import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CustomSelect from '../CustomSelect/CustomSelect';
import { useState } from 'react';
import styles from './Form.module.scss';

export default function ConForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  // Кастомный селект (локальное состояние)
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    { value: 'Web Development', label: 'Web Development' },
    { value: 'Technical SEO', label: 'Technical SEO' },
    { value: 'Workflow Automation', label: 'Workflow Automation' },
    { value: 'Other / General Inquiry', label: 'Other / General Inquiry' },
  ];

  // Схема валидации
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'The name must contain at least 2 characters.')
      .required('Name is required'),
    email: Yup.string().email('Please enter a valid email address.').required('Email is required'),
    phone: Yup.string()
      .matches(
        /^(\+?\d{1,3})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
        'Please enter a valid phone number.',
      )
      .required('Phone number is required'),
    projectType: Yup.string().required('Select project type'),
    details: Yup.string().max(1000, 'Maximum 1000 characters'),
  });

  const handleSubmit = async (values, { resetForm, setFieldValue }) => {
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    const message = `
🔔 Новая заявка!

👤 Имя: ${values.name}
📧 Email: ${values.email}
📱 Телефон: ${values.phone}
📂 Тип проекта: ${values.projectType}
💬 Детали:
${values.details || 'Не указано'}
    `.trim();

    try {
      const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML',
        }),
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Your application has been sent successfully!' });
        resetForm();
        setSelectedOption('');
      } else {
        throw new Error('Sending error');
      }
    } catch (error) {
      console.error(error);
      setStatus({
        type: 'error',
        message: 'Failed to submit your request. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSelect = (value, setFieldValue) => {
    setSelectedOption(value);
    setFieldValue('projectType', value);
    setIsOpen(false);
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', phone: '', projectType: '', details: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {({ isValid, setFieldValue }) => (
        <Form className={styles.form}>
          <div className={styles.formGroupRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Name *</label>
              <Field name='name' type='text' className={styles.input} placeholder='John Doe' />
              <ErrorMessage name='name' component='div' className={styles.error} />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Email *</label>
              <Field
                name='email'
                type='email'
                className={styles.input}
                placeholder='example@mail.com'
              />
              <ErrorMessage name='email' component='div' className={styles.error} />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Phone *</label>
            <Field
              name='phone'
              type='tel'
              className={styles.input}
              placeholder='+380 (99) 091-45-67'
            />
            <ErrorMessage name='phone' component='div' className={styles.error} />
          </div>

          {/* Кастомный селект */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Project Type *</label>
            <CustomSelect
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              selectedOption={selectedOption}
              setFieldValue={setFieldValue}
              handleSelect={handleSelect}
              options={options}
            />
            <ErrorMessage name='projectType' component='div' className={styles.error} />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Brief Details (optional)</label>
            <Field
              name='details'
              as='textarea'
              rows={4}
              className={styles.textarea}
              placeholder='Additional information...'
            />
            <ErrorMessage name='details' component='div' className={styles.error} />
          </div>

          <button type='submit' disabled={isSubmitting || !isValid} className={styles.submitButton}>
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>

          {status.message && (
            <div
              className={`${styles.submitMessage} ${status.type === 'success' ? styles.success : styles.errorMessage}`}>
              {status.message}
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
}
