import Header from '../../components/header/Header';

export default function Home() {
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
          padding: '110px 24px',
          width: '100%',
          alignItems: 'start',
          flexDirection: 'row',
          justifyContent: 'center',
          display: 'flex',
          backgroundColor: '#eee',
          backgroundImage: 'url(../../assets/heroBackground.gif)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'fill',
          height: '65vh',
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
          <h1 style={{ fontSize: '80px' }}>Growing Resilient Cities</h1>
          <p style={{ fontSize: '20px', fontWeight: '300' }}>
            Muuras fosters bio-based solutions that support sustainable urban
            ecosystems.
          </p>
        </div>
      </div>
    </div>
  );
}
