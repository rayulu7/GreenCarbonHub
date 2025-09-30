import React, { useState } from "react";
import CTAButtons from "./CTAButtons.jsx";
import InstallationServices from "./InstallationServices.jsx";
import WhyChooseSolar from "./WhyChooseSolar.jsx";
import GCHBenefits from "./GCHBenefits.jsx";
import SolarBenefits from "./SolarBenefits.jsx";
import Weprovide from "./Weprovide.jsx";
import Subsidy from "./Subsidy.jsx";
import RooftopSolutions from "./RooftopSolutions.jsx";
import FinanceOptions from "./FinanceOptions.jsx";
import DocumentRequirements from "./DocumentRequirements.jsx";
import LoanCalculator from "./LoanCalculator.jsx";
import RepaymentTable from "./RepaymentTable.jsx";
import GetALoanForm from "./GetALoanForm.jsx";
import Components from "./Components.jsx";

function SolarInstallation() {
  // Shared loan state for both components
  const [sharedLoanData, setSharedLoanData] = useState({
    loanAmount: 50_000,
    loanTerm: 0.5,
    activeTab: "residential"
  });

  return (
    <>
      <CTAButtons />
      <InstallationServices />
      <WhyChooseSolar />
      <GCHBenefits />
      <SolarBenefits />
      <Weprovide type="residential" />
      <Subsidy />
      <RooftopSolutions />
      <FinanceOptions />
      <DocumentRequirements />
      <LoanCalculator sharedLoanData={sharedLoanData} setSharedLoanData={setSharedLoanData} />
      <RepaymentTable 
        loanAmount={sharedLoanData.loanAmount} 
        loanTerm={sharedLoanData.loanTerm} 
        interestRate={sharedLoanData.activeTab === "housingSociety" ? 9.15 : 7.99} 
      />
      <GetALoanForm />
      <Components />
    </>
  );
}

export default SolarInstallation;