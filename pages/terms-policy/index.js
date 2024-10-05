import React from "react";
import PageHead from "../Head";
import Context from "@/context/Context";
import Header from "@/components/Header/Header";
import HeaderDashboard from "@/components/Header/HeaderDashboard";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import LeftpanelDashboard from "@/components/Common/LeftpanelDashboard";
import TermsPolicy from "@/components/TermsPolicy/TermsPolicy";

const TermsPolicyPage = () => {
  return (
    <>
      <PageHead title="Terms and Policy" />

      <main className="page-wrapper">
        <Context>
            <Header
              headerTransparent="header-not-transparent"
              headerSticky="header-sticky"
              btnClass="btn-small round"
            />

            <TermsPolicy />
        </Context>
      </main>
    </>
  );
};

export default TermsPolicyPage;
