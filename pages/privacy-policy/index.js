import React from "react";
import PageHead from "../Head";
import Context from "@/context/Context";
import Header from "@/components/Header/Header";
import HeaderDashboard from "@/components/Header/HeaderDashboard";
import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import LeftpanelDashboard from "@/components/Common/LeftpanelDashboard";

const TermsPolicyPage = () => {
  return (
    <>
      <PageHead title="Privacy Policy" />

      <main className="page-wrapper">
        <Context>
            <Header
              headerTransparent="header-not-transparent"
              headerSticky="header-sticky"
              btnClass="btn-small round"
            />

            <PrivacyPolicy />
        </Context>
      </main>
    </>
  );
};

export default TermsPolicyPage;
