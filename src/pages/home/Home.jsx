import Header from '../../components/header/Header';
import { useTranslation } from 'react-i18next';
import ScrollButton from '../../components/scrollButton/ScrollButton';

export default function Home() {
  const { t } = useTranslation();
  //I need to create this to use the translation in the hero section, but I can also
  // use it in the header component, so I will create it there as well and pass the t function as a prop to the header
  // component, so I can use it there as well.
  return (
    <div
      className="HomePage"
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
      }}
    >
      <Header />
      <div
        className="HeroSection"
        style={{
          padding: '110px 24px 0px 24px ',
          width: '100%',
          height: '80vh',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          display: 'flex',
          backgroundImage: 'url(../../assets/heroBackground.gif)',
          backgroundSize: 'fill',
        }}
      >
        <div
          className="HeroContent"
          style={{
            maxWidth: '1200px',
            width: '100%',
            height: '100%',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            rowGap: '2rem',
          }}
        >
          <img src="../../assets/whiteLogo.svg" alt="" />
          <h1 style={{ fontSize: '80px' }}>{t('heroTitle')}</h1>
          <p style={{ fontSize: '20px', fontWeight: '300' }}>
            {t('heroSubtitle')}
          </p>
        </div>
        <ScrollButton test={t('homeScrollButton')} />
      </div>
    </div>
  );
}
