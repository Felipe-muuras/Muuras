import { EnvelopeOpenIcon, LinkedinLogoIcon } from '@phosphor-icons/react';
import { WrapperBuildingPage, BuildingPageSocialLinks } from './styleBuilding';

export default function Building() {
  return (
    <WrapperBuildingPage>
      <img src={`${import.meta.env.BASE_URL}assets/whiteLogo.svg`} alt="" />
      <h1>Building a new page</h1>
      <p>You can access other links</p>
      <BuildingPageSocialLinks>
        <a href="mailto:elias_junior_sc@hotmail.com" target="_blank">
          <EnvelopeOpenIcon size={32} />
        </a>
        <a href="https://www.linkedin.com/in/eliascolturato/" target="_blank">
          <LinkedinLogoIcon size={32} />
        </a>
      </BuildingPageSocialLinks>
    </WrapperBuildingPage>
  );
}
