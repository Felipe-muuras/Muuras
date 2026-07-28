import {
  FormSectionContainer,
  FormSectionSizeControll,
  BringMuuras,
  ImageFrame,
  FormContainer,
  FormRowTwoInputs,
  FormField,
  FormFieldLabel,
  ConsentRow,
  SubmitButton,
  Toast,
  ToastIcon,
  ToastText,
  ToastClose,
} from './styleFormSection';
import SiteFooter from '../siteFooter/SiteFooter';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  WarningCircleIcon,
  XIcon,
} from '@phosphor-icons/react';
import emailjs from '@emailjs/browser';

import 'react-phone-number-input/style.css';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function FormSection({ sectionId = 'contact' }) {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'success' | 'error', text }

  // Auto-dismiss the toast after a few seconds.
  useEffect(() => {
    if (!toast) return undefined;
    const id = setTimeout(() => setToast(null), 6000);
    return () => clearTimeout(id);
  }, [toast]);

  const handleSubmit = async e => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // EmailJS not configured yet — fall back to the visitor's mail client so
    // the form still works (opens a pre-filled email to the team).
    if (!serviceId || !templateId || !publicKey) {
      const subject = encodeURIComponent(
        `Formulário do Site — Contato de ${name}`,
      );
      const body = encodeURIComponent(
        `Nome: ${name}\n` +
          `Organização: ${organization || '-'}\n` +
          `E-mail: ${email}\n\n` +
          `Mensagem:\n${message}`,
      );
      window.location.href = `mailto:felipe@muuras.nl,gijs@muuras.nl?subject=${subject}&body=${body}`;
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          // Variable names must match the EmailJS template placeholders.
          name,
          organization: organization || '-',
          email,
          message,
          consent: consent ? 'Sim' : 'Não',
        },
        {
          publicKey,
        },
      );

      setToast({ type: 'success', text: t('contactSubmitSuccess') });
      setName('');
      setOrganization('');
      setEmail('');
      setMessage('');
      setConsent(false);
    } catch {
      setToast({ type: 'error', text: t('contactSubmitError') });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormSectionContainer id={sectionId} data-reveal data-header-theme="light">
      <FormSectionSizeControll>
        <BringMuuras>
          <h2>{t('contactSectionTitle')}</h2>
          <span>
            {t('contactSectionDescription')}
          </span>
          <ImageFrame>
            <img
              src={`${import.meta.env.BASE_URL}assets/muuras-wetland-wall-prototype.png`}
              alt={t('contactImageAlt')}
              loading="lazy"
            />
          </ImageFrame>
        </BringMuuras>

        <FormContainer as="form" onSubmit={handleSubmit}>
          <h2>{t('contactFormTitle')}</h2>

          <FormField>
            <FormFieldLabel htmlFor={`${sectionId}-name`}>
              {t('contactNameLabel')}
            </FormFieldLabel>
            <input
              id={`${sectionId}-name`}
              type="text"
              placeholder={t('contactNamePlaceholder')}
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </FormField>

          <FormRowTwoInputs>
            <FormField>
              <FormFieldLabel htmlFor={`${sectionId}-organization`}>
                {t('contactOrganizationLabel')}
              </FormFieldLabel>
              <input
                id={`${sectionId}-organization`}
                type="text"
                placeholder={t('contactOrganizationPlaceholder')}
                value={organization}
                onChange={e => setOrganization(e.target.value)}
              />
            </FormField>

            <FormField>
              <FormFieldLabel htmlFor={`${sectionId}-email`}>
                {t('contactEmailLabel')}
              </FormFieldLabel>
              <input
                id={`${sectionId}-email`}
                type="email"
                placeholder={t('contactEmailPlaceholder')}
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </FormField>
          </FormRowTwoInputs>

          <FormField>
            <FormFieldLabel htmlFor={`${sectionId}-message`}>
              {t('contactMessageLabel')}
            </FormFieldLabel>
            <textarea
              id={`${sectionId}-message`}
              placeholder={t('contactMessagePlaceholder')}
              value={message}
              rows={8}
              onChange={e => setMessage(e.target.value)}
            />
          </FormField>

          <ConsentRow>
            <input
              id={`${sectionId}-consent`}
              type="checkbox"
              checked={consent}
              onChange={e => setConsent(e.target.checked)}
              required
            />
            <label htmlFor={`${sectionId}-consent`}>
              {t('contactConsent')}
            </label>
          </ConsentRow>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? t('contactSendingButton') : t('contactSendButton')}
            {!isSubmitting && <ArrowRightIcon size={18} weight="bold" />}
          </SubmitButton>
        </FormContainer>
      </FormSectionSizeControll>
      <SiteFooter />

      {toast && (
        <Toast $type={toast.type} role="status" aria-live="polite">
          <ToastIcon $type={toast.type}>
            {toast.type === 'error' ? (
              <WarningCircleIcon size={22} weight="fill" />
            ) : (
              <CheckCircleIcon size={22} weight="fill" />
            )}
          </ToastIcon>
          <ToastText>{toast.text}</ToastText>
          <ToastClose
            type="button"
            onClick={() => setToast(null)}
            aria-label="Close"
          >
            <XIcon size={16} weight="bold" />
          </ToastClose>
        </Toast>
      )}
    </FormSectionContainer>
  );
}
