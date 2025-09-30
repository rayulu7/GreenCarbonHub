import React from 'react';
import ExpertSewage from './ExpertSewage';
import EffluentTreatment from './EffluentTreatment';
import WaterManageServices from './WaterManageServices';
import WaterManageTechnologies from './WaterManageTechnologies';
import BenefitsSection from './Benefits';

const WaterManagementPage = () => {
  return (
    <div>
      <ExpertSewage />
      <EffluentTreatment />
      <WaterManageServices />
      <WaterManageTechnologies />
      <BenefitsSection />
    </div>
  );
};

export default WaterManagementPage;