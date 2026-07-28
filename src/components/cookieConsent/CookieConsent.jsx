import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { getConsent, setConsent, loadAnalytics } from '../../lib/analytics';
import {
  Banner,
  BannerText,
  BannerActions,
  RejectButton,
  AcceptButton,
} from './styleCookieConsent';

/**
 * GDPR/ePrivacy cookie consent. Analytics (GA + Clarity) stay unloaded until
 * the visitor accepts; the choice is remembered so the banner only shows once.
 */
export default function CookieConsent() {
  const { t } = useTranslation();
  // Lazy init from storage so we never setState inside the effect. This
  // component only renders on the client, so localStorage is available here.
  const [visible, setVisible] = useState(() => getConsent() === null);

  useEffect(() => {
    if (getConsent() === 'granted') loadAnalytics();
  }, []);

  const accept = () => {
    setConsent('granted');
    loadAnalytics();
    setVisible(false);
  };

  const reject = () => {
    setConsent('denied');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <Banner role="dialog" aria-label={t('cookieAriaLabel')}>
      <BannerText>
        {t('cookieMessage')} <Link to="/privacy">{t('cookiePolicyLink')}</Link>
      </BannerText>
      <BannerActions>
        <RejectButton type="button" onClick={reject}>
          {t('cookieReject')}
        </RejectButton>
        <AcceptButton type="button" onClick={accept}>
          {t('cookieAccept')}
        </AcceptButton>
      </BannerActions>
    </Banner>
  );
}
