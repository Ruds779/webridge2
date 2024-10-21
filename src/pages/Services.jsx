import ContentBelow from "../components/ContentBelow";
import Head from "../components/Head";
import background from "../images/services_background.png";
import RAF from "../images/RAF_bridge.webp";
import PropImg from "../images/Prop_Icon.webp";
import classes from "../components/Services.module.css";
import Button from "../components/Button";
import AttorneyImg from "../images/Attorney_Serv.webp";
import ProperteyFinImg from "../images/Property_Finance.webp";
import BusinessGrowthImg from "../images/BusinessGrowth.webp";

function Blocks({ left, right }) {
  return (
    <>
      <div className={classes.block_div}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-5 mb-3 mb-md-0">{left}</div>
            <div className="col-md-4 col-lg-5">{right}</div>
          </div>
        </div>
      </div>
    </>
  );
}

function Services() {
  return (
    <>
      <Head imageUrl={background}>
        <h2 className="heading_space">Services</h2>
      </Head>
      <ContentBelow>
        <div className="container m-4 text-center mx-auto">
          <div className="col-md-12 col-lg-12">
            <h2 className={classes.h2}>Bridging Finance Solutions</h2>
            <p>
              We offer comprehensive bridging finance solutions across multiple
              industries
            </p>
          </div>
          <div className="row">
            <div className="col-md-3 col-lg-3">
              <a href="#RAF" className={classes.a}>
                <img
                  src={RAF}
                  width={200}
                  height={200}
                  style={{ backgroundColor: "white", borderRadius: "20px" }}
                />
                <h2>RAF Bridging Finance</h2>
                <p>
                  WeBridge offers advances on settled RAF claims in the form of
                  responsible bridging finance.
                </p>
              </a>
            </div>
            <div className="col-md-3 col-lg-3">
              <a href="#PROPERTY" className={classes.a}>
                <img
                  src={ProperteyFinImg}
                  width={200}
                  height={200}
                  style={{ backgroundColor: "white", borderRadius: "20px" }}
                />
                <h2>Property Bridging Finance</h2>
                <p>
                  If you are waiting for the proceeds from your property sale,
                  you can apply for Property Bridging Finance.
                </p>
              </a>
            </div>
            <div className="col-md-3 col-lg-3">
              <a href="#ATTORNEY" className={classes.a}>
                <img
                  src={AttorneyImg}
                  width={200}
                  height={200}
                  style={{ backgroundColor: "white", borderRadius: "20px" }}
                />
                <h2>Attorney Fee Bridging Finance</h2>
                <p>
                  Unlock your firm's potential by freeing up cash flow with our
                  bridging finance solution.
                </p>
              </a>
            </div>

            <div className="col-md-3 col-lg-3">
              <a href="#BUSINESS" className={classes.a}>
                <img
                  src={BusinessGrowthImg}
                  width={200}
                  height={200}
                  style={{ backgroundColor: "white", borderRadius: "20px" }}
                />
                <h2>Business Growth Finance</h2>
                <p>
                  Put effort into expanding your business and generating profits
                  rather than chasing down invoices for money.
                </p>
              </a>
            </div>
          </div>
        </div>
      </ContentBelow>
      <div className="container bg-light p-3">
        <section id="RAF">
          <Blocks
            right={
              <>
                <h1>RAF BRIDGING FINANCE</h1>
                <p className={classes.p}>
                  RAF Bridging Finance is a financial solution designed to
                  provide immediate funds to individuals who are awaiting
                  compensation from the Road Accident Fund (RAF). This type of
                  financing is particularly useful for those who have
                  successfully lodged a claim with the RAF but face delays in
                  receiving their settlement.
                </p>
                <p className="h5">What you need to apply</p>
                <ol className={classes.ol}>
                  <li>
                    Approved RAF Claim: You must have an approved claim with the
                    Road Accident Fund.
                  </li>
                  <li>Court Order / Settlement Letter</li>
                  <li>ID Document</li>
                  <li>Proof of Residence</li>
                  <li>Attorney Details</li>
                </ol>
                <p className="h5">How Long Until You Receive Your Funds?</p>
                <p className={classes.p}>
                  Once all documents are signed, funds are typically disbursed
                  within 24 to 48 hours. This quick turnaround ensures that you
                  can meet your financial needs without delay.
                </p>
                <Button name="Apply Now" link="/Applynow">
                  Apply Now
                </Button>
              </>
            }
            left={<div className={classes["background-image-div-1"]}></div>}
          ></Blocks>
        </section>
        <section id="PROPERTY">
          <Blocks
            left={
              <>
                <h1>PROPERTY BRIDGING FINANCE</h1>
                <p className={classes.p}>
                  Property Bridging Finance is a short-term financial solution
                  designed to provide immediate access to funds while waiting
                  for a property transaction to be finalized. If you're waiting
                  for the proceeds from your property sale, this type of finance
                  bridges the gap, ensuring you have the necessary liquidity to
                  manage your financial obligations.
                </p>
                <h4>What You Need to Apply:</h4>
                <ol className={classes.ol}>
                  <li>Sale Agreement</li>
                  <li>Personal Identification</li>
                  <li>Property Details</li>
                  <li>Attorney Details</li>
                </ol>
                <h4>How Long Until You Receive Your Funds?</h4>
                <p className={classes.p}>
                  Once all documents are signed, funds are typically disbursed
                  within 24 to 48 hours. This quick turnaround ensures that you
                  can meet your financial needs without delay.
                </p>
                <Button name="Apply Now" link="/Applynow">
                  Apply Now
                </Button>
              </>
            }
            right={
              <>
                <div className={classes["background-image-div-2"]}></div>
              </>
            }
          />
        </section>
        <section id="ATTORNEY">
          <Blocks
            right={
              <>
                <h1>ATTORNEY FINANCE</h1>
                <p className={classes.p}>
                  RAF Attorney Finance is a specialized financial service
                  designed to advance legal fees for attorneys handling Road
                  Accident Fund (RAF) claims. Once a RAF claim has been settled,
                  attorneys often face delays in receiving their fees. RAF
                  Attorney Finance provides an advance on these fees, ensuring
                  that attorneys can maintain their cash flow and continue to
                  operate effectively while waiting for the RAF payout.
                </p>
                <h4>What you need to apply</h4>
                <ol className={classes.ol}>
                  <li>Settled RAF Claim</li>
                  <li>Personal Identification</li>
                  <li>ID Document</li>
                  <li>Legal Practice Information</li>
                </ol>
                <h5>How Long Until You Receive Your Funds?</h5>
                <p className={classes.p}>
                  Funds are typically disbursed within 24 to 48 hours after the
                  all agreements are signed. This swift turnaround ensures that
                  attorneys can cover their immediate expenses without having to
                  wait for the RAF's often lengthy payment process.
                </p>
                <Button name="Apply Now" link="/Applynow">
                  Apply Now
                </Button>
              </>
            }
            left={
              <>
                <div className={classes["background-image-div-3"]}></div>
              </>
            }
          />
        </section>
        <section id="BUSINESS">
          <Blocks
            left={
              <>
                <h1>BUSINESS GROWTH FINANCE</h1>
                <p className={classes.p}>
                  Business Growth Finance is a suite of financial solutions
                  designed to help businesses unlock cash flow and fuel growth
                  by leveraging outstanding invoices, purchase orders, and
                  tenders. Whether you're looking to expand operations, fulfill
                  large orders, or manage working capital, these financing
                  options provide the necessary funds to keep your business
                  moving forward
                </p>
                <h5>What are the types of Business Growth Finance?</h5>
                <ol>
                  <li>Invoice Discounting</li>
                  <p className={classes.p}>
                    Invoice Discounting allows businesses to access immediate
                    cash by selling their outstanding invoices at a discount.
                    This enables companies to maintain cash flow without waiting
                    for customers to pay their invoices, ensuring smooth
                    day-to-day operations.
                  </p>
                  <li>Purchase Order Funding</li>
                  <p className={classes.p}>
                    Purchase Order Funding provides businesses with the capital
                    needed to fulfill large orders. By advancing funds based on
                    confirmed purchase orders, this financing option allows you
                    to cover production costs, supplier payments, and other
                    expenses, ensuring timely delivery to your clients.
                  </p>
                  <li>Tender Funding</li>
                  <p className={classes.p}>
                    Tender Funding is designed for businesses that have been
                    awarded a tender but lack the upfront capital to complete
                    the project. This finance option provides the necessary
                    funds to cover the costs associated with fulfilling the
                    tender, such as materials, labor, and logistics, allowing
                    you to take on larger projects and grow your business.
                  </p>
                </ol>
                <h5>What you need to apply</h5>
                <ol className={classes.ol}>
                  <li>Business Registration</li>
                  <li>Court Order / Settlement Letter</li>
                  <li>Invoices, Purchase Orders, or Tender Documents</li>
                  <li>Financial Statements</li>
                  <li>Personal Identification</li>
                  <li>6 month's bank statements</li>
                </ol>
                <h5>How Long Until You Receive Your Funds?</h5>
                <p className={classes.p}>
                  Once all documents are signed, and GPay has been approved,
                  funds are typically disbursed within a couple of days. This
                  quick turnaround ensures that you can meet your financial
                  needs without delay.
                </p>
                <Button name="Apply Now" link="/Applynow">
                  Apply Now
                </Button>
              </>
            }
            right={
              <>
                <div className={classes["background-image-div-4"]}></div>
              </>
            }
          />
        </section>
      </div>
    </>
  );
}

export default Services;
