import { CheckIcon } from '@phosphor-icons/react';
import { LinkedinLogoIcon } from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';
import useSeo from '../../lib/useSeo';
import Header from '../../components/header/Header';
import Button from '../../components/buttonAnimated/Button';
import FormSection from '../../components/formSection/FormSection';
import ZoomImage from '../../components/zoomImage/ZoomImage';
import MaterialIcon from '../../components/materialIcon/MaterialIcon';
import useScrollReveal from '../../hooks/useScrollReveal';
import {
  AboutPageContainer,
  AboutContent,
  MissionSection,
  MissionContent,
  SectionTitle,
  SectionSubtitle,
  AboutSectionTitle,
  BulletList,
  BulletItem,
  MissionImage,
  ValuesSection,
  ValuesImage,
  ValuesContent,
  ValueCards,
  ValueCard,
  ValueIcon,
  ValueText,
  AboutCtaRow,
  TeamSection,
  TeamHeader,
  TeamGrid,
  TeamCard,
  TeamCardContent,
  TeamCardNameLink,
  TeamCardRole,
  TeamCardBio,
  AboutGetStartedSection,
  AboutGetStartedCard,
  AboutGetStartedText,
} from './styleAbout';

export default function About() {
  const { t } = useTranslation();
  useScrollReveal();
  useSeo('/about');

  const missionBullets = [
    t('aboutMissionBullet1'),
    t('aboutMissionBullet2'),
    t('aboutMissionBullet3'),
    t('aboutMissionBullet4'),
  ];

  const values = [
    {
      icon: 'lightbulb',
      title: t('aboutValueTitle1'),
      description: t('aboutValueDescription1'),
    },
    {
      icon: 'handshake',
      title: t('aboutValueTitle2'),
      description: t('aboutValueDescription2'),
    },
    {
      icon: 'eco',
      title: t('aboutValueTitle3'),
      description: t('aboutValueDescription3'),
    },
    {
      icon: 'science',
      title: t('aboutValueTitle4'),
      description: t('aboutValueDescription4'),
    },
    {
      icon: 'shield',
      title: t('aboutValueTitle5'),
      description: t('aboutValueDescription5'),
    },
  ];

  const teamMembers = [
    {
      name: t('aboutTeamMemberName2'),
      role: t('aboutTeamMemberRole2'),
      hoverTitle: t('aboutTeamHoverTitle2'),
      hoverDescription: t('aboutTeamHoverDescription2'),
      linkedIn: t('aboutTeamLinkedin2'),
      imagePath: `${import.meta.env.BASE_URL}assets/muuras-team-gijs.jpg`,
      objectPosition: '75% 50%',
    },
    {
      name: t('aboutTeamMemberName3'),
      role: t('aboutTeamMemberRole3'),
      hoverTitle: t('aboutTeamHoverTitle3'),
      hoverDescription: t('aboutTeamHoverDescription3'),
      linkedIn: t('aboutTeamLinkedin3'),
      imagePath: `${import.meta.env.BASE_URL}assets/muuras-team-lydia.png`,
      // Wider shot than the others — zoom in a touch, anchored to the bottom,
      // so the framing matches the rest of the team.
      imgScale: 1.2,
      imgOrigin: 'center bottom',
    },
    {
      name: t('aboutTeamMemberName1'),
      role: t('aboutTeamMemberRole1'),
      hoverTitle: t('aboutTeamHoverTitle1'),
      hoverDescription: t('aboutTeamHoverDescription1'),
      linkedIn: t('aboutTeamLinkedin1'),
      imagePath: `${import.meta.env.BASE_URL}assets/muuras-team-felipe.png`,
    },
  ];

  return (
    <AboutPageContainer>
      <Header />

      <AboutContent id="about-overview">
        <MissionSection id="about-mission">
          <MissionContent>
            <SectionTitle>{t('aboutMissionTitle')}</SectionTitle>
            <SectionSubtitle>{t('aboutMissionDescription')}</SectionSubtitle>
            <BulletList>
              {missionBullets.map(bullet => (
                <BulletItem key={bullet}>
                  <CheckIcon size={20} weight="bold" />
                  <span>{bullet}</span>
                </BulletItem>
              ))}
            </BulletList>
          </MissionContent>

          <MissionImage
            src={`${import.meta.env.BASE_URL}assets/water-splash-pond-mission.jpg`}
            alt={t('aboutMissionImageAlt')}
          />
        </MissionSection>

        <ValuesSection id="about-values" data-reveal>
          <ValuesImage
            src={`${import.meta.env.BASE_URL}assets/old-trees-sunlight-forest-values.jpg`}
            alt={t('aboutValuesImageAlt')}
          />
          <ValuesContent>
            <AboutSectionTitle>{t('aboutValuesTitle')}</AboutSectionTitle>
            <ValueCards data-reveal-stagger>
              {values.map(value => (
                <ValueCard key={value.title}>
                  <ValueIcon>
                    <MaterialIcon name={value.icon} />
                  </ValueIcon>
                  <ValueText>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </ValueText>
                </ValueCard>
              ))}
            </ValueCards>
          </ValuesContent>
        </ValuesSection>

        <AboutCtaRow>
          <Button
            label={t('aboutValuesCta')}
            scrollTargetId="about-contact"
            fitContent
          />
        </AboutCtaRow>

        <TeamSection id="about-team" data-reveal>
          <TeamHeader>
            <h2>{t('aboutTeamTitle')}</h2>
            <p>{t('aboutTeamDescription')}</p>
          </TeamHeader>

          <TeamGrid data-reveal-stagger>
            {teamMembers.map(member => (
              <TeamCard key={member.name}>
                <img
                  src={member.imagePath}
                  alt={member.name}
                  loading="lazy"
                  style={{
                    objectPosition: member.objectPosition,
                    '--team-img-scale': member.imgScale,
                    '--team-img-origin': member.imgOrigin,
                  }}
                />
                <TeamCardContent>
                  <TeamCardNameLink
                    href={member.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`LinkedIn profile for ${member.name}`}
                  >
                    <span>{member.name}</span>
                    <LinkedinLogoIcon size={16} weight="fill" />
                  </TeamCardNameLink>
                  <TeamCardRole>{member.role}</TeamCardRole>
                  <TeamCardBio>
                    <h4>{member.hoverTitle}</h4>
                    <p>{member.hoverDescription}</p>
                  </TeamCardBio>
                </TeamCardContent>
              </TeamCard>
            ))}
          </TeamGrid>
        </TeamSection>

        <AboutGetStartedSection id="about-get-started" data-reveal>
          <AboutGetStartedCard>
            <ZoomImage
              className="gsImage"
              src={`${import.meta.env.BASE_URL}assets/hands-water-splash-sunlight.png`}
              alt={t('aboutGetStartedImageAlt')}
            />
            <AboutGetStartedText>
              <h3>{t('aboutGetStartedTitle')}</h3>
              <p>{t('aboutGetStartedDescription')}</p>
              <Button
                label={t('aboutGetStartedCta')}
                scrollTargetId="about-contact"
              />
            </AboutGetStartedText>
          </AboutGetStartedCard>
        </AboutGetStartedSection>
      </AboutContent>

      <FormSection sectionId="about-contact" />
    </AboutPageContainer>
  );
}
