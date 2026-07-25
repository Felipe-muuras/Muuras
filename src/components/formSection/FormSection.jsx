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
} from './styleFormSection';
import SiteFooter from '../siteFooter/SiteFooter';
import { ArrowRightIcon } from '@phosphor-icons/react';
import emailjs from '@emailjs/browser';

import 'react-phone-number-input/style.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function FormSection({ sectionId = 'contact' }) {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      alert(t('contactConfigError'));
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          organization: organization || '-',
          from_email: email,
          message,
          consent: consent ? 'Yes' : 'No',
          reply_to: email,
          to_email: 'felipe@muuras.nl,gijs@muuras.nl',
          origin: 'Formulário do Site (muuras.nl)',
          subject: `Formulário do Site — Contato de ${name}`,
        },
        {
          publicKey,
        },
      );

      alert(t('contactSubmitSuccess'));
      setName('');
      setOrganization('');
      setEmail('');
      setMessage('');
      setConsent(false);
    } catch {
      alert(t('contactSubmitError'));
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
    </FormSectionContainer>
  );
}
