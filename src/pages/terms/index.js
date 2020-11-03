import React from "react"
import Footer from "../../components/footer"
import Navbar from "../../components/navbar"

const Terms = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <h1 className="font-weight-bold">Terms and Conditions ("Terms")</h1>
            <p className="font-weight-light">
              Please read these Terms and Conditions ("Terms", "Terms and
              Conditions") carefully before using the https://weebdev.com/
              website (the "Service") operated by weebdev team <br /> <br />{" "}
              Your access to and use of the Service is conditioned on your
              acceptance of and compliance with these Terms. These Terms apply
              to all visitors, users and others who access or use the Service.
            </p>

            <h1 className="font-weight-bold">Accounts</h1>
            <p className="font-weight-light">
              When you create an account with us, you must provide us
              information that is accurate, complete, and current at all times.
              Failure to do so constitutes a breach of the Terms, which may
              result in immediate termination of your account on our Service.
              <br /> <br />
              You are responsible for safeguarding the password that you use to
              access the Service and for any activities or actions under your
              password, whether your password is with our Service or a
              third-party service. <br /> <br /> You agree not to disclose your
              password to any third party. You must notify us immediately upon
              becoming aware of any breach of security or unauthorized use of
              your account.
            </p>

            <h1 className="font-weight-bold">Links To Other Web Sites</h1>
            <p className="font-weight-light">
              Our Service may contain links to third-party web sites or services
              that are not owned or controlled by weebdev teams.
              <br /> <br />
              YukAmal has no control over, and assumes no responsibility for,
              the content, privacy policies, or practices of any third party web
              sites or services. You further acknowledge and agree that YukAmal
              shall not be responsible or liable, directly or indirectly, for
              any damage or loss caused or alleged to be caused by or in
              connection with use of or reliance on any such content, goods or
              services available on or through any such web sites or services.
              <br /> <br /> We strongly advise you to read the terms and
              conditions and privacy policies of any third-party web sites or
              services that you visit.
            </p>

            <h1 className="font-weight-bold">Changes</h1>
            <p className="font-weight-light">
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material we will try to
              provide at least 30 days notice prior to any new terms taking
              effect. What constitutes a material change will be determined at
              our sole discretion.
              <br /> <br />
              By continuing to access or use our Service after those revisions
              become effective, you agree to be bound by the revised terms. If
              you do not agree to the new terms, please stop using the Service.
              <br /> <br />
            </p>
            <h1 className="font-weight-bold">Contact</h1>
            <p className="font-weight-light">
              If you have any questions about these Terms, please contact us.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Terms
