import { useTranslation } from 'react-i18next';

import useSeo from '../../lib/useSeo';
import Header from '../../components/header/Header';
import SiteFooter from '../../components/siteFooter/SiteFooter';
import {
  PrivacyPageContainer,
  PrivacyContent,
  PrivacyHeader,
  PrivacyUpdated,
  PrivacySection,
} from './stylePrivacy';

export default function Privacy() {
  const { t } = useTranslation();
  useSeo('/privacy');

  const sections = [
    { title: t('privacyControllerTitle'), body: t('privacyControllerBody') },
    { title: t('privacyDataTitle'), body: t('privacyDataBody') },
    { title: t('privacyCookiesTitle'), body: t('privacyCookiesBody') },
    { title: t('privacyAnalyticsTitle'), body: t('privacyAnalyticsBody') },
    { title: t('privacyLegalTitle'), body: t('privacyLegalBody') },
    { title: t('privacySharingTitle'), body: t('privacySharingBody') },
    { title: t('privacyRetentionTitle'), body: t('privacyRetentionBody') },
    { title: t('privacyRightsTitle'), body: t('privacyRightsBody') },
    { title: t('privacyContactTitle'), body: t('privacyContactBody') },
    { title: t('privacyChangesTitle'), body: t('privacyChangesBody') },
  ];

  return (
    <PrivacyPageContainer>
      <Header />
      <PrivacyContent>
        <PrivacyHeader>
          <h1>{t('privacyTitle')}</h1>
          <PrivacyUpdated>{t('privacyUpdated')}</PrivacyUpdated>
          <p>{t('privacyIntro')}</p>
        </PrivacyHeader>

        {sections.map(section => (
          <PrivacySection key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </PrivacySection>
        ))}
      </PrivacyContent>
      <SiteFooter />
    </PrivacyPageContainer>
  );
}
