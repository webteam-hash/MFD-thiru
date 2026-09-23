import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Scale, ShieldAlert, Info, CheckCircle2 } from 'lucide-react'
import { SectionBlob } from '../../components/WatercolorBg'
import { LegalNav } from './LegalNav'
import { SEO } from '../../components/SEO'

const TEAL = '#35858E'
const MINT = '#88BDA4'
const LIGHT = '#E6F2DD'

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}

export function CalculatorPolicy() {
  return (
    <div style={{ overflowX: 'hidden', background: '#FAFCFA', color: '#303733' }}>
      <SEO
        title="Calculator Policy | MFDthiru — J. C. Thirumurugan (ARN 26890)"
        description="Calculator Policy, terms of usage, and mathematical illustration disclosure for MFDthiru — AMFI Registered Mutual Fund Distributor ARN 26890."
        canonical="/calculator-policy"
      />
      {/* Hero Header */}
      <section style={{ background: 'rgba(230,242,221,0.45)', padding: '72px 24px 56px', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-5%" y="-15%" w={400} h={320} color="#B1D3B9" op={0.45} blur={68} r="56% 44% 36% 64% / 50% 46% 54% 50%" />
        <SectionBlob x="82%" y="10%" w={340} h={280} color="#88BDA4" op={0.32} blur={60} r="40% 60% 56% 44% / 56% 40% 60% 40%" />
        
        <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <FadeUp>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 20, background: LIGHT, color: TEAL, fontSize: 13, fontWeight: 700, marginBottom: 18 }}>
              <Scale size={15} /> Statutory Disclosure Policy
            </span>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 50px)', fontWeight: 800, color: '#303733', marginBottom: 20, lineHeight: 1.2 }}>
              Calculator Policy
            </h1>
            <p style={{ fontSize: 18, color: '#555D58', maxWidth: 760, margin: '0 auto 24px', lineHeight: 1.7 }}>
              Terms of usage and regulatory principles governing digital calculators and mathematical illustrations on MFDthiru.
            </p>
            <div style={{ display: 'inline-block', padding: '8px 20px', background: 'rgba(255,255,255,0.9)', borderRadius: 14, fontSize: 14, color: TEAL, fontWeight: 700, border: '1px solid rgba(136,189,164,0.3)', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
              J. C. Thirumurugan &nbsp;|&nbsp; AMFI Registered Mutual Fund Distributor (ARN 26890)
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Main Content Area */}
      <section style={{ padding: '48px 24px 88px', position: 'relative' }}>
        <SectionBlob x="88%" y="25%" w={320} h={280} color="#B1D3B9" op={0.30} blur={60} r="45% 55% 62% 38% / 58% 42% 58% 42%" />
        <SectionBlob x="-4%" y="55%" w={280} h={240} color="#E6F2DD" op={0.70} blur={55} r="60% 40% 44% 56% / 40% 62% 38% 62%" />

        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          
          {/* Legal Navigation Sub-Bar */}
          <LegalNav />

          <div style={{ background: '#ffffff', borderRadius: 24, border: '1px solid rgba(136,189,164,0.22)', padding: '44px', boxShadow: '0 6px 24px rgba(0,0,0,0.02)', display: 'grid', gap: 28 }}>
            
            <FadeUp delay={0.05}>
              <div style={{ padding: '24px 28px', background: '#F8FDF9', borderRadius: 18, borderLeft: `5px solid ${TEAL}`, border: '1px solid rgba(136,189,164,0.18)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 10 }}>Purpose of the Calculators</h3>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: '0 0 12px 0' }}>
                  The calculators available on the MFDthiru website are provided solely for general education and mathematical illustration. They are intended to help users understand how factors such as investment amount, investment period, assumed rate of return, inflation and withdrawals may affect an indicative financial outcome.
                </p>
                <p style={{ fontSize: 15, fontWeight: 600, color: TEAL, margin: 0 }}>
                  The calculators do not constitute financial planning, investment advice, tax advice or a recommendation to invest in any mutual fund scheme.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div style={{ padding: '24px 28px', background: '#F8FDF9', borderRadius: 18, borderLeft: `5px solid ${MINT}`, border: '1px solid rgba(136,189,164,0.18)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 10 }}>User Selected Inputs and Assumptions</h3>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: '0 0 12px 0' }}>
                  Calculator results are generated using the information and assumptions entered or selected by the user. These may include:
                </p>
                <ul style={{ margin: '0 0 12px 0', paddingLeft: 20, fontSize: 15.5, color: '#444C47', lineHeight: 1.8 }}>
                  <li>SIP or lump-sum investment amount and investment duration.</li>
                  <li>Assumed annual rate of return and inflation rate.</li>
                  <li>Target amount or periodic increase in investment.</li>
                  <li>Withdrawal amount, frequency and expected retirement period.</li>
                </ul>
                <p style={{ fontSize: 15, color: '#555D58', margin: 0 }}>
                  The assumed annual rate used in a calculator is solely for mathematical illustration. It does not represent the expected or assured return of any mutual fund scheme, category or investment strategy.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div style={{ padding: '24px 28px', background: '#F8FDF9', borderRadius: 18, borderLeft: `5px solid ${TEAL}`, border: '1px solid rgba(136,189,164,0.18)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 10 }}>Illustrative Results Only</h3>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: '0 0 12px 0' }}>
                  All results displayed by the calculators are indicative mathematical estimates. They should not be interpreted as:
                </p>
                <ul style={{ margin: '0 0 12px 0', paddingLeft: 20, fontSize: 15.5, color: '#444C47', lineHeight: 1.8 }}>
                  <li>A guarantee or assurance of returns or a prediction of future performance.</li>
                  <li>Confirmation that a financial goal will be achieved.</li>
                  <li>A personalised investment recommendation or recommendation of a mutual fund scheme.</li>
                  <li>A substitute for assessing an investor's financial position, risk profile, objectives or investment horizon.</li>
                </ul>
                <p style={{ fontSize: 15, fontWeight: 600, color: TEAL, margin: 0 }}>
                  Actual investment results may be higher or lower than the calculated value and may also be negative.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div style={{ padding: '24px 28px', background: '#F8FDF9', borderRadius: 18, borderLeft: `5px solid ${MINT}`, border: '1px solid rgba(136,189,164,0.18)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 10 }}>Mutual Fund Returns and Market Risk</h3>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: '0 0 12px 0' }}>
                  Mutual fund returns are market-linked and are affected by several factors, including market movements, interest rates, inflation, credit events, liquidity, economic conditions, taxation, scheme expenses and the performance of the underlying securities.
                </p>
                <p style={{ fontSize: 15.5, color: '#444C47', margin: 0 }}>
                  Past performance of a mutual fund, market index or asset category is not indicative of future performance. No assumed rate used in a calculator should be considered a representation of historical or future mutual fund returns.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.25}>
              <div style={{ padding: '24px 28px', background: '#F8FDF9', borderRadius: 18, borderLeft: `5px solid ${TEAL}`, border: '1px solid rgba(136,189,164,0.18)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 10 }}>Costs, Taxes and Other Adjustments</h3>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: '0 0 12px 0' }}>
                  Unless specifically stated, calculator outputs may not account for:
                </p>
                <ul style={{ margin: '0 0 12px 0', paddingLeft: 20, fontSize: 15.5, color: '#444C47', lineHeight: 1.8 }}>
                  <li>Mutual fund expense ratios, exit loads, stamp duty or transaction charges.</li>
                  <li>Securities Transaction Tax, capital-gains tax or changes in tax laws.</li>
                  <li>Inflation unless entered separately, variations in investment dates or missed SIP instalments.</li>
                  <li>Market fluctuations, changes in withdrawal dates and sequence-of-return risk.</li>
                </ul>
                <p style={{ fontSize: 15, color: '#555D58', margin: 0 }}>
                  Accordingly, the actual value received by an investor may differ materially from the calculated amount.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div style={{ padding: '24px 28px', background: '#F8FDF9', borderRadius: 18, borderLeft: `5px solid ${MINT}`, border: '1px solid rgba(136,189,164,0.18)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 10 }}>SIP and Lump Sum Calculations</h3>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: 0 }}>
                  SIP and lump-sum calculators illustrate the possible future value of regular or one-time investments based on the inputs selected by the user. A SIP is only a method of investing periodically. It does not guarantee returns, protect against losses or ensure achievement of a financial goal.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.35}>
              <div style={{ padding: '24px 28px', background: '#F8FDF9', borderRadius: 18, borderLeft: `5px solid ${TEAL}`, border: '1px solid rgba(136,189,164,0.18)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 10 }}>Retirement and Goal Calculations</h3>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: 0 }}>
                  Retirement, education and other goal-based calculators estimate a possible future requirement based on assumptions such as time horizon, inflation and assumed investment return. These calculations do not guarantee that the estimated corpus will be sufficient or that the goal will be achieved. Actual requirements may change because of inflation, personal circumstances, taxation, market performance and changes in the timing or cost of the goal.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div style={{ padding: '24px 28px', background: '#F8FDF9', borderRadius: 18, borderLeft: `5px solid ${MINT}`, border: '1px solid rgba(136,189,164,0.18)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 10 }}>SWP and Cash Flow Calculations</h3>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: '0 0 12px 0' }}>
                  A Systematic Withdrawal Plan allows an investor to withdraw money by periodically redeeming mutual fund units. SWP withdrawals are not interest payments or guaranteed income.
                </p>
                <p style={{ fontSize: 15.5, color: '#444C47', margin: 0 }}>
                  The investment value may fluctuate and may be depleted depending on market performance, the withdrawal rate, scheme expenses, taxation and the duration of withdrawals. A calculator result should not be interpreted as assurance that a particular cash flow can be maintained for the selected period.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.45}>
              <div style={{ padding: '24px 28px', background: '#F8FDF9', borderRadius: 18, borderLeft: `5px solid ${TEAL}`, border: '1px solid rgba(136,189,164,0.18)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 10 }}>No Automatic Scheme Recommendation</h3>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: '0 0 12px 0' }}>
                  The calculators do not automatically select, rank or recommend any mutual fund scheme. A calculator result is not converted into a personalised investment recommendation solely based on the figures entered by the user.
                </p>
                <p style={{ fontSize: 15.5, color: '#444C47', margin: 0 }}>
                  If a user requests assistance with mutual fund selection, MFDthiru will separately consider relevant information such as the investor's objective, investment horizon, financial position, risk profile and product suitability.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.5}>
              <div style={{ padding: '24px 28px', background: '#F8FDF9', borderRadius: 18, borderLeft: `5px solid ${MINT}`, border: '1px solid rgba(136,189,164,0.18)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 10 }}>Mutual Fund Distribution Status</h3>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: '0 0 12px 0' }}>
                  MFDthiru is the mutual fund distribution brand of J. C. Thirumurugan, AMFI-registered Mutual Fund Distributor - ARN 26890. MFDthiru provides mutual fund distribution services and incidental assistance limited to mutual fund products distributed through MFDthiru. MFDthiru is not a SEBI-registered Investment Adviser and does not provide comprehensive financial planning, legal advice or tax advice.
                </p>
                <p style={{ fontSize: 15.5, color: '#444C47', margin: 0 }}>
                  Investments facilitated through MFDthiru are generally made under Regular Plans. MFDthiru may receive trail commission from Asset Management Companies on investments made under Regular Plans. Please refer to the Commission Disclosure page for further details.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.55}>
              <div style={{ padding: '24px 28px', background: '#F8FDF9', borderRadius: 18, borderLeft: `5px solid ${TEAL}`, border: '1px solid rgba(136,189,164,0.18)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 10 }}>Data and Privacy</h3>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: '0 0 12px 0' }}>
                  Information entered into a calculator is used to generate the requested illustration. Where a user voluntarily submits personal or contact information to request assistance, it will be handled in accordance with MFDthiru's Privacy Policy.
                </p>
                <p style={{ fontSize: 15, fontWeight: 600, color: '#D32F2F', margin: 0 }}>
                  Users should not enter passwords, OTPs, PINs, bank-account credentials or other confidential authentication information into any calculator.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.6}>
              <div style={{ padding: '24px 28px', background: '#F8FDF9', borderRadius: 18, borderLeft: `5px solid ${MINT}`, border: '1px solid rgba(136,189,164,0.18)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 10 }}>User Responsibility</h3>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: '0 0 12px 0' }}>
                  Users should independently review the assumptions selected and determine whether the calculator output is relevant to their circumstances. Before investing, users should read the applicable Scheme Information Document, Key Information Memorandum and Statement of Additional Information and understand the scheme's objectives, risks, expenses and suitability.
                </p>
                <p style={{ fontSize: 15.5, color: '#444C47', margin: 0 }}>
                  Independent professional advice may be obtained where legal, tax or comprehensive financial-planning assistance is required.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.65}>
              <div style={{ padding: '24px 28px', background: '#F8FDF9', borderRadius: 18, borderLeft: `5px solid ${TEAL}`, border: '1px solid rgba(136,189,164,0.18)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 10 }}>Limitation of Liability</h3>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: 0 }}>
                  MFDthiru takes reasonable care in presenting calculator outputs but does not warrant that the calculations will be error-free, complete or suitable for every investor. To the extent permitted by applicable law, MFDthiru shall not be responsible for any investment decision, financial loss, missed opportunity or other consequence arising from reliance solely on a calculator result.
                </p>
              </div>
            </FadeUp>

            {/* Statutory Disclosure Banner */}
            <FadeUp delay={0.7}>
              <div style={{
                background: `linear-gradient(135deg, ${TEAL}, #1e4a4f)`,
                borderRadius: 18, padding: '28px 32px', color: '#ffffff', textAlign: 'left', marginTop: 12,
                boxShadow: '0 8px 24px rgba(53,133,142,0.2)'
              }}>
                <p style={{ fontSize: 15, fontWeight: 700, margin: '0 0 8px 0', color: MINT }}>
                  Important Disclosure
                </p>
                <p style={{ fontSize: 14.5, fontWeight: 500, margin: '0 0 10px 0', lineHeight: 1.7 }}>
                  <strong>Illustration only:</strong> The calculators provide indicative mathematical results based on the inputs and assumptions selected by the user. They do not constitute financial planning or investment advice, recommend any mutual fund scheme, or guarantee any return or achievement of a financial goal. Actual results may vary.
                </p>
                <p style={{ fontSize: 14, fontWeight: 600, margin: 0, lineHeight: 1.65, color: '#e0f0f2' }}>
                  Mutual Fund investments are subject to market risks; read all scheme-related documents carefully before investing.
                </p>
              </div>
            </FadeUp>

          </div>

        </div>
      </section>
    </div>
  )
}
