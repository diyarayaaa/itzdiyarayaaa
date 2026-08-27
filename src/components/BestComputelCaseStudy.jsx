import TiltCard from './TiltCard'
import { ArrowLeft, Sparkles } from 'lucide-react'
import '../styles/BestComputelCaseStudy.css'

function BestComputelCaseStudy({ onBack }) {
  return (
    <section className="case-study-page">
      {/* BACK BUTTON */}
      <button className="case-study-back" onClick={onBack}>
        <ArrowLeft size={18} />
        <span>Back to Projects</span>
      </button>

      {/* HERO */}
      <div className="case-study-hero">
        <div className="case-study-label">
          <Sparkles size={14} className="text-orange" />
          <span>CASE STUDY · SYSTEM ADMINISTRATION</span>
        </div>

        <h1>
          Best Computel Service
          <span> & RMA Management System</span>
        </h1>

        <p className="case-study-intro">
          A centralized service and warranty management system developed to organize
          device intake, service processes, RMA tracking, distributor handling, and
          operational monitoring at Best Computel.
        </p>

        <div className="case-study-tech">
          <span>Google Sheets</span>
          <span>AppSheet</span>
          <span>Google Apps Script</span>
          <span>JavaScript</span>
        </div>
      </div>

      {/* OVERVIEW */}
      <div className="case-study-section">
        <div className="case-study-label">01 · OVERVIEW</div>

        <h2>From manual records to a centralized system.</h2>

        <p>
          Before the system was developed, managing incoming devices, service records,
          and warranty processes required a lot of manual recording and memory.
        </p>

        <p>
          This made it difficult to keep track of devices, remember ongoing processes,
          and quickly find information when a customer or internal team needed it.
        </p>

        <p>
          The system was developed to centralize this information so that service and
          RMA data could be recorded, searched, monitored, and processed in one
          connected workflow.
        </p>
      </div>

      {/* PROBLEM */}
      <div className="case-study-section">
        <div className="case-study-label">02 · THE PROBLEM</div>

        <h2>The challenge was not just recording data.</h2>

        <div className="case-study-grid">
          <TiltCard className="case-study-tilt-wrap" maxTilt={10} scale={1.02}>
            <div className="case-study-card">
              <h3>Manual Recording</h3>
              <p>
                Device information was previously written manually when customers
                brought their devices for service.
              </p>
            </div>
          </TiltCard>

          <TiltCard className="case-study-tilt-wrap" maxTilt={10} scale={1.02}>
            <div className="case-study-card">
              <h3>Memory Dependency</h3>
              <p>
                Keeping track of incoming devices and ongoing processes relied heavily
                on remembering what was currently being handled.
              </p>
            </div>
          </TiltCard>

          <TiltCard className="case-study-tilt-wrap" maxTilt={10} scale={1.02}>
            <div className="case-study-card">
              <h3>Scattered Information</h3>
              <p>
                Finding information about a particular device could become difficult
                when the data was not centralized.
              </p>
            </div>
          </TiltCard>

          <TiltCard className="case-study-tilt-wrap" maxTilt={10} scale={1.02}>
            <div className="case-study-card">
              <h3>Manual Reporting</h3>
              <p>
                Creating reports and communicating RMA information required additional
                manual work.
              </p>
            </div>
          </TiltCard>
        </div>
      </div>

      {/* SOLUTION */}
      <div className="case-study-section">
        <div className="case-study-label">03 · THE SOLUTION</div>

        <h2>A connected workflow for service and RMA operations.</h2>

        <p>
          The solution combines AppSheet as the operational interface, Google Sheets as
          the centralized database, and Google Apps Script for automation and
          reporting.
        </p>

        <div className="workflow">
          <div className="workflow-step">
            <strong>01</strong>
            <span>Customer brings device</span>
          </div>

          <div className="workflow-arrow">→</div>

          <div className="workflow-step">
            <strong>02</strong>
            <span>Data entered through AppSheet</span>
          </div>

          <div className="workflow-arrow">→</div>

          <div className="workflow-step">
            <strong>03</strong>
            <span>Data stored in Google Sheets</span>
          </div>

          <div className="workflow-arrow">→</div>

          <div className="workflow-step">
            <strong>04</strong>
            <span>Process monitored and automated</span>
          </div>
        </div>
      </div>

      {/* BARANG MASUK */}
      <div className="case-study-section">
        <div className="case-study-label">04 · DEVICE INTAKE</div>

        <h2>Barang Masuk & Tanda Terima</h2>

        <p>
          When a customer brings a device to Best Computel, the device is first recorded
          through the AppSheet application.
        </p>

        <p>
          The system records information such as customer details, device information,
          serial number, complaint, accessories, technician, estimated completion date,
          and process type.
        </p>

        <TiltCard className="case-study-tilt-wrap" maxTilt={8} scale={1.01}>
          <div className="case-study-card featured-card">
            <h3>From AppSheet input to a digital receipt</h3>
            <p>
              After the data is submitted, it is stored in Google Sheets and processed
              into a structured service/RMA receipt.
            </p>
            <p>
              This provides the customer with a clear record of the device that has been
              handed over to Best Computel and gives the team a reference for tracking
              the device throughout the process.
            </p>
          </div>
        </TiltCard>

        {/* SCREENSHOT SLOT */}
        <div className="case-study-screenshot">
          <img
            src={`${import.meta.env.BASE_URL}images/case-study/appsheet-intake.png`}
            alt="Best Computel AppSheet Device Intake"
            onError={(e) => {
              e.target.parentElement.style.display = 'none'
            }}
          />
          <p>AppSheet Device Intake</p>
        </div>

        <div className="case-study-screenshot">
          <img
            src={`${import.meta.env.BASE_URL}images/case-study/tanda-terima.png`}
            alt="Best Computel Service Receipt"
            onError={(e) => {
              e.target.parentElement.style.display = 'none'
            }}
          />
          <p>Digital Service & RMA Receipt</p>
        </div>
      </div>

      {/* SERVICE */}
      <div className="case-study-section">
        <div className="case-study-label">05 · SERVICE WORKFLOW</div>

        <h2>Service Process</h2>

        <div className="process-flow">
          <div>Device Received</div>
          <span>→</span>
          <div>Service</div>
          <span>→</span>
          <div>Completed</div>
          <span>→</span>
          <div>Customer Notified</div>
          <span>→</span>
          <div>Picked Up</div>
        </div>
      </div>

      {/* WARRANTY */}
      <div className="case-study-section">
        <div className="case-study-label">06 · WARRANTY WORKFLOW</div>

        <h2>Warranty & Distributor Tracking</h2>

        <p>
          Warranty devices can be tracked from the moment they are sent to the
          distributor until they return to Best Computel.
        </p>

        <div className="process-flow">
          <div>Device Received</div>
          <span>→</span>
          <div>Warranty</div>
          <span>→</span>
          <div>Sent to Distributor</div>
          <span>→</span>
          <div>At Vendor</div>
          <span>→</span>
          <div>Returned</div>
          <span>→</span>
          <div>Customer Pickup</div>
        </div>
      </div>

      {/* SERVICE KELUAR */}
      <div className="case-study-section">
        <div className="case-study-label">07 · EXTERNAL SERVICE</div>

        <h2>Service Keluar</h2>

        <p>
          The system also supports devices that need to be sent to an external vendor
          for service.
        </p>

        <div className="process-flow">
          <div>Device Received</div>
          <span>→</span>
          <div>External Service</div>
          <span>→</span>
          <div>Vendor</div>
          <span>→</span>
          <div>Returned</div>
          <span>→</span>
          <div>Completed</div>
        </div>
      </div>

      {/* DASHBOARD */}
      <div className="case-study-section">
        <div className="case-study-label">08 · MONITORING</div>

        <h2>Dashboard & Operational Monitoring</h2>

        <p>
          A dashboard was developed to provide a quick overview of the current
          operational condition without requiring the team to manually inspect the
          database.
        </p>

        <div className="case-study-grid">
          <TiltCard className="case-study-tilt-wrap" maxTilt={10} scale={1.02}>
            <div className="case-study-card">
              <h3>Service in Progress</h3>
              <p>
                Monitor devices currently being handled by the service team.
              </p>
            </div>
          </TiltCard>

          <TiltCard className="case-study-tilt-wrap" maxTilt={10} scale={1.02}>
            <div className="case-study-card">
              <h3>RMA at Distributor</h3>
              <p>Track devices that are currently outside Best Computel.</p>
            </div>
          </TiltCard>

          <TiltCard className="case-study-tilt-wrap" maxTilt={10} scale={1.02}>
            <div className="case-study-card">
              <h3>Completed Devices</h3>
              <p>
                Monitor completed devices that are waiting for customer pickup.
              </p>
            </div>
          </TiltCard>

          <TiltCard className="case-study-tilt-wrap" maxTilt={10} scale={1.02}>
            <div className="case-study-card">
              <h3>KPI & Calendar</h3>
              <p>Provide operational summaries and schedule visibility.</p>
            </div>
          </TiltCard>
        </div>

        <div className="screenshot-placeholder">
          <span>SYSTEM DASHBOARD</span>
          <p>Best Computel Live Operational Dashboard</p>
        </div>
      </div>

      {/* AUTOMATION */}
      <div className="case-study-section">
        <div className="case-study-label">09 · AUTOMATION</div>

        <h2>Automated WhatsApp Reporting</h2>

        <p>
          Google Apps Script is used to process operational data and generate structured
          reports for WhatsApp.
        </p>

        <p>
          Reports can be organized according to RMA type, status, distributor, date, and
          other operational requirements.
        </p>

        <div className="screenshot-placeholder">
          <span>AUTOMATION MODULE</span>
          <p>Automated WhatsApp RMA Report Dispatcher</p>
        </div>
      </div>

      {/* IMPACT */}
      <div className="case-study-section">
        <div className="case-study-label">10 · IMPACT</div>

        <h2>Less remembering. More control.</h2>

        <p>
          The biggest impact of the system was not simply having a digital database. It
          reduced the amount of information that had to be remembered manually during
          daily operations.
        </p>

        <p>
          When a device was forgotten or needed to be checked, the information could be
          searched directly through AppSheet instead of relying on memory or manually
          searching through written notes.
        </p>

        <p>
          The intake process also became more structured. Instead of manually writing
          down customer and device information, the data could be entered through
          AppSheet and automatically connected to the centralized database and receipt
          workflow.
        </p>

        <div className="impact-highlight">
          <strong>
            A system built to make daily work calmer, clearer, and easier to control.
          </strong>
        </div>
      </div>

      {/* TECHNOLOGY */}
      <div className="case-study-section">
        <div className="case-study-label">11 · TECHNOLOGY</div>

        <h2>Technology Stack</h2>

        <div className="case-study-tech large-tech">
          <span>Google Sheets</span>
          <span>AppSheet</span>
          <span>Google Apps Script</span>
          <span>JavaScript</span>
          <span>AppSheet Expressions</span>
          <span>WhatsApp Integration</span>
        </div>
      </div>

      {/* FOOTER */}
      <div className="case-study-end">
        <h2>Built from a real operational problem.</h2>

        <p>
          This project represents the process of turning a real-world operational
          problem into a working information system.
        </p>

        <button className="case-study-back" onClick={onBack}>
          <ArrowLeft size={18} />
          <span>Back to Projects</span>
        </button>
      </div>
    </section>
  )
}

export default BestComputelCaseStudy
