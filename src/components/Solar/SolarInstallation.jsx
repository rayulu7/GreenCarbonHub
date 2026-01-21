import React, { useState } from "react";
import SolarHeroSection from "./SolarHeroSection.jsx";
import CTAButtons from "./CTAButtons.jsx";
import InstallationServices from "./InstallationServices.jsx";
import WhyChooseSolar from "./WhyChooseSolar.jsx";
import GCHBenefits from "./GCHBenefits.jsx";
import OtherBenefits from "./OtherBenefits.jsx";
import { Monitor, DollarSign, Home as HomeIcon, Settings, Leaf } from "lucide-react";
import Weprovide from "./Weprovide.jsx";
import RooftopSolutions from "./RooftopSolutions.jsx";
import FinanceOptions from "./FinanceOptions.jsx";
import Subsidy from "./Subsidy.jsx";
import DocumentRequirements from "./DocumentRequirements.jsx";
import LoanCalculator from "./LoanCalculator.jsx";
import RepaymentTable from "./RepaymentTable.jsx";
import GetALoanForm from "./GetALoanForm.jsx";
import WhyChooseGCH from "./WhyChooseGCH.jsx";

const solarBenefitsTabs = [
  {
    id: 1,
    name: "Renewable & Clean Source Of Energy",
    icon: <Monitor className="text-green-600" />,
    title: "Renewable & Clean Source Of Energy",
    description:
      "As the Solar Energy is a clean and renewable source, you are helping the environment by reducing carbon footprint and protecting it by choosing solar panels in Hyderabad for your home or office."
  },
  {
    id: 2,
    name: "Solar Energy Reduces Electricity Cost",
    icon: <DollarSign className="text-green-600" />,
    title: "Solar Energy Reduces Electricity Cost",
    description:
      "Rooftop Solar Panels can generate a good amount of electricity that can power up your home, office or industry, helping you to save a lot of money on electricity bills year after year."
  },
  {
    id: 3,
    name: "Adds Value To Your Life",
    icon: <HomeIcon className="text-green-600" />,
    title: "Adds Value To Your Life",
    description:
      "Choosing rooftop solar energy adds value to your home, office or other spaces and makes them more attractive to potential buyers. Our experts educate you with all necessary details before starting."
  },
  {
    id: 4,
    name: "Low Maintenance Cost",
    icon: <Settings className="text-green-600" />,
    title: "Low Maintenance Cost",
    description:
      "Rooftop solar panels require less maintenance and therefore incur less cost. As they are stable and do not have any moving parts to generate electricity, they require minimal upkeep like periodic cleaning."
  },
  {
    id: 5,
    name: "Eco-Friendly & Reduces CO2",
    icon: <Leaf className="text-green-600" />,
    title: "Eco-Friendly And Reduces CO2 Emissions",
    description:
      "Solar power is an eco-friendly and sustainable energy resource that produces zero emissions. Solar panels harness the power of the sun to generate electricity for your requirements."
  }
];

function SolarInstallation() {
  const [sharedLoanData, setSharedLoanData] = useState({
    loanAmount: 50_000,
    loanTerm: 0.5,
    activeTab: "residential"
  });

  return (
    <div className="min-w-0 w-full overflow-x-hidden">
      <SolarHeroSection />
      <CTAButtons />
      <InstallationServices />
      <WhyChooseSolar />
      {/* <GCHBenefits /> */}
      <WhyChooseGCH />
      <OtherBenefits tabbedItems={solarBenefitsTabs} />
      <Weprovide type="residential" />
      <RooftopSolutions />
      {/* Order: FinanceOptions -> Subsidy -> DocumentRequirements */}
      <FinanceOptions />
      <Subsidy />
      <DocumentRequirements />
      <LoanCalculator sharedLoanData={sharedLoanData} setSharedLoanData={setSharedLoanData} />
      <RepaymentTable 
        loanAmount={sharedLoanData.loanAmount} 
        loanTerm={sharedLoanData.loanTerm} 
        interestRate={sharedLoanData.activeTab === "housingSociety" ? 9.15 : 7.99} 
      />
      <GetALoanForm />
    </div>
  );
}

export default SolarInstallation;
