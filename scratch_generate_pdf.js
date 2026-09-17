import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'mm',
  format: 'a4'
});

let pageNum = 1;
let curY = 20;

function addHeaderFooter(doc, pNum) {
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(100, 110, 105);
  doc.text('MFDThiru | Investor Education & Mutual Fund Distribution', 195, 12, { align: 'right' });
  
  doc.setDrawColor(200, 215, 205);
  doc.setLineWidth(0.3);
  doc.line(15, 15, 195, 15);
  
  doc.line(15, 280, 195, 280);
  doc.text(`www.mfdthiru.in  |  ARN 26890  |  Page ${pNum}`, 105, 285, { align: 'center' });
}

function checkAddPage(neededHeight = 18) {
  if (curY + neededHeight > 268) {
    doc.addPage();
    pageNum++;
    addHeaderFooter(doc, pageNum);
    curY = 24;
  }
}

function addCallout(doc, text, y, isBold = true) {
  const margin = 15;
  const width = 180;
  
  doc.setFont('Helvetica', isBold ? 'bold' : 'normal');
  doc.setFontSize(10);
  const lines = doc.splitTextToSize(text, width - 16);
  const height = lines.length * 5 + 7;

  if (y + height > 268) {
    doc.addPage();
    pageNum++;
    addHeaderFooter(doc, pageNum);
    y = 24;
  }
  
  doc.setFillColor(240, 247, 236);
  doc.roundedRect(margin, y, width, height, 3, 3, 'F');
  
  doc.setDrawColor(53, 133, 142);
  doc.setLineWidth(0.8);
  doc.line(margin, y, margin, y + height);
  
  doc.setTextColor(35, 41, 38);
  doc.text(lines, margin + 8, y + (height / 2) - ((lines.length - 1) * 2.5) + 1);
  
  return y + height + 6;
}

function drawVectorLogo(doc, startY) {
  // Draw Trend Arrow Icon above text
  doc.setDrawColor(136, 189, 164);
  doc.setLineWidth(1.2);
  doc.line(95, startY, 102, startY - 4);
  doc.setDrawColor(53, 133, 142);
  doc.setLineWidth(1.4);
  doc.line(102, startY - 4, 114, startY - 10);
  
  // Arrow head
  doc.setFillColor(53, 133, 142);
  doc.triangle(111, startY - 11, 116, startY - 10, 113, startY - 6, 'F');

  // MFDthiru Brand Text
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(25);
  doc.setTextColor(48, 55, 51); // Dark MFD
  doc.text('MFD', 90, startY + 6, { align: 'right' });
  doc.setTextColor(53, 133, 142); // Teal thiru
  doc.text('thiru', 91, startY + 6, { align: 'left' });
  
  return startY + 16;
}

// ================= PAGE 1 =================
addHeaderFooter(doc, 1);

// Draw crisp vector logo
curY = drawVectorLogo(doc, 26);

doc.setFont('Helvetica', 'bold');
doc.setFontSize(20);
doc.setTextColor(53, 133, 142);
doc.text('A NOTE FROM THE FOUNDER', 105, curY, { align: 'center' });

curY += 8;
doc.setFont('Helvetica', 'italic');
doc.setFontSize(11.5);
doc.setTextColor(85, 93, 88);
doc.text('What Two Decades with Investors Have Taught Me About Money', 105, curY, { align: 'center' });

curY += 10;
curY = addCallout(doc, 'Money Saved Today Is Wealth Created for Your Future.', curY);

curY += 2;
doc.setFont('Helvetica', 'bold');
doc.setFontSize(13);
doc.setTextColor(35, 41, 38);
doc.text('J. C. Thirumurugan', 105, curY, { align: 'center' });

curY += 5;
doc.setFont('Helvetica', 'normal');
doc.setFontSize(10);
doc.setTextColor(53, 133, 142);
doc.text('Founder - MFDThiru', 105, curY, { align: 'center' });

curY += 5;
doc.setFont('Helvetica', 'italic');
doc.setFontSize(9.5);
doc.setTextColor(85, 93, 88);
doc.text('A personal reflection on saving, investing and financial behaviour', 105, curY, { align: 'center' });

curY += 14;
doc.setFont('Helvetica', 'bold');
doc.setFontSize(13.5);
doc.setTextColor(53, 133, 142);
doc.text('What Experience Has Taught Me', 15, curY);

curY += 7;
doc.setFont('Helvetica', 'normal');
doc.setFontSize(10);
doc.setTextColor(55, 62, 58);
let text1 = "For more than two decades, I have had the opportunity to interact with investors across generations, income levels and different stages of life. During this journey, one thing has become increasingly clear to me:";
let lines1 = doc.splitTextToSize(text1, 180);
doc.text(lines1, 15, curY);
curY += lines1.length * 4.8 + 5;

curY = addCallout(doc, 'Most people know they need to save and invest. The real challenge is starting, staying disciplined and making financial decisions at the right time.', curY);

let text2 = "I have seen people postpone investing while waiting for a better salary, a better market or simply a better time. But our financial goals do not wait with us. Children's education, retirement and other important responsibilities continue to move closer.";
let lines2 = doc.splitTextToSize(text2, 180);
doc.text(lines2, 15, curY);
curY += lines2.length * 4.8 + 8;

doc.setFont('Helvetica', 'bold');
doc.setFontSize(12);
doc.setTextColor(53, 133, 142);
doc.text('Save First. Spend Next.', 15, curY);
curY += 6;

doc.setFont('Helvetica', 'normal');
doc.setFontSize(10);
doc.setTextColor(55, 62, 58);
let text3 = "Income gives us the ability to live today. What we consistently set aside gives us the ability to prepare for tomorrow.";
let lines3 = doc.splitTextToSize(text3, 180);
doc.text(lines3, 15, curY);
curY += lines3.length * 4.8 + 5;

curY = addCallout(doc, 'Earning - Saving = Spending', curY);

let text4 = "I prefer this to the conventional approach of spending first and saving whatever remains. Save for your future first, and then plan your spending with what remains. It sounds simple, but over the years I have seen how strongly this behavioural change can influence a person's long-term financial journey.";
let lines4 = doc.splitTextToSize(text4, 180);
doc.text(lines4, 15, curY);
curY += lines4.length * 4.8 + 8;


// ================= SECTION 2 =================
checkAddPage(30);
doc.setFont('Helvetica', 'bold');
doc.setFontSize(12);
doc.setTextColor(53, 133, 142);
doc.text("Today Is Yesterday's Tomorrow", 15, curY);
curY += 6;

doc.setFont('Helvetica', 'normal');
doc.setFontSize(10);
doc.setTextColor(55, 62, 58);
let text5 = 'We often tell ourselves: "I will start next month", "I will invest when my income increases", or "I will start when the market is better." But today is the "tomorrow" we spoke about yesterday.';
let lines5 = doc.splitTextToSize(text5, 180);
doc.text(lines5, 15, curY);
curY += lines5.length * 4.8 + 5;

let text6 = "The cost of waiting is rarely visible immediately. Repeatedly postponing long-term investing can mean losing valuable time for compounding.";
let lines6 = doc.splitTextToSize(text6, 180);
doc.text(lines6, 15, curY);
curY += lines6.length * 4.8 + 5;

curY = addCallout(doc, 'Money can be earned again. Time cannot.', curY);

curY += 4;
checkAddPage(30);
doc.setFont('Helvetica', 'bold');
doc.setFontSize(13.5);
doc.setTextColor(53, 133, 142);
doc.text('What I Have Observed in Financial Behaviour', 15, curY);
curY += 7;

doc.setFont('Helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(35, 41, 38);
doc.text('We Commit to EMIs Easily. Why Not to Our Future?', 15, curY);
curY += 5.5;

doc.setFont('Helvetica', 'normal');
doc.setFontSize(10);
doc.setTextColor(55, 62, 58);
let text7 = 'We are often comfortable committing tomorrow\'s income today through an EMI - for a car, gadget, holiday or lifestyle upgrade. Immediate gratification makes that decision easier. Yet, when it comes to committing a smaller amount towards a financial goal 10 or 20 years away, we often say, "I will start later."';
let lines7 = doc.splitTextToSize(text7, 180);
doc.text(lines7, 15, curY);
curY += lines7.length * 4.8 + 5;

let text8 = 'There is nothing inherently wrong with borrowing. A home, education, business or productive asset may justify the use of credit. The more useful question is whether we are building assets through our commitments or simply bringing tomorrow\'s consumption into today.';
let lines8 = doc.splitTextToSize(text8, 180);
doc.text(lines8, 15, curY);
curY += lines8.length * 4.8 + 5;

curY = addCallout(doc, 'Less Unnecessary Debt = Greater Financial Freedom', curY);

let text9 = 'Before taking an EMI, I believe we should ask: "Am I creating an asset or simply satisfying an immediate desire?"';
let lines9 = doc.splitTextToSize(text9, 180);
doc.text(lines9, 15, curY);
curY += lines9.length * 4.8 + 8;

checkAddPage(30);
doc.setFont('Helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(35, 41, 38);
doc.text("Do Not Let Someone Else's Lifestyle Decide Yours", 15, curY);
curY += 5.5;

doc.setFont('Helvetica', 'normal');
doc.setFontSize(10);
doc.setTextColor(55, 62, 58);
let text10 = "Peer pressure has become a powerful influence on financial behaviour. Someone buys a bigger car, upgrades a home or takes an expensive holiday. Social media continuously shows us what others are buying and enjoying.";
let lines10 = doc.splitTextToSize(text10, 180);
doc.text(lines10, 15, curY);
curY += lines10.length * 4.8 + 4;

let text11 = "What we do not see are their liabilities, responsibilities, savings or financial preparedness.";
let lines11 = doc.splitTextToSize(text11, 180);
doc.text(lines11, 15, curY);
curY += lines11.length * 4.8 + 5;

curY = addCallout(doc, "Your financial journey should be driven by your goals - not someone else's lifestyle.", curY);

let text12 = "You do not have to prove your success through spending. Sometimes, the wealth you quietly build for your future may be far more important than the lifestyle you display today.";
let lines12 = doc.splitTextToSize(text12, 180);
doc.text(lines12, 15, curY);
curY += lines12.length * 4.8 + 8;


// ================= SECTION 3 =================
checkAddPage(30);
doc.setFont('Helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(35, 41, 38);
doc.text("When Income Grows, Let Savings Grow Too", 15, curY);
curY += 5.5;

doc.setFont('Helvetica', 'normal');
doc.setFontSize(10);
doc.setTextColor(55, 62, 58);
let text13 = "When income increases, lifestyle often expands automatically. Savings do not always increase with the same discipline. Every meaningful increase in salary or business income can therefore be an opportunity to review and increase savings and investments before the additional income is fully absorbed into lifestyle.";
let lines13 = doc.splitTextToSize(text13, 180);
doc.text(lines13, 15, curY);
curY += lines13.length * 4.8 + 8;

checkAddPage(30);
doc.setFont('Helvetica', 'bold');
doc.setFontSize(13.5);
doc.setTextColor(53, 133, 142);
doc.text('What Investors Often Miss', 15, curY);
curY += 7;

doc.setFont('Helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(35, 41, 38);
doc.text('What We Realise Only Later', 15, curY);
curY += 5.5;

doc.setFont('Helvetica', 'normal');
doc.setFontSize(10);
doc.setTextColor(55, 62, 58);
let text14 = 'Financial regret does not always come from one big decision. More often, it can come from a series of small decisions postponed - the SIP that was supposed to start next month, the investment increase that never happened, or savings repeatedly diverted towards immediate wants.';
let lines14 = doc.splitTextToSize(text14, 180);
doc.text(lines14, 15, curY);
curY += lines14.length * 4.8 + 5;

curY = addCallout(doc, 'The biggest cost of postponement may not be the money we failed to invest. It may be the time we can never get back.', curY);

checkAddPage(35);
doc.setFont('Helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(35, 41, 38);
doc.text('Markets Test Behaviour More Than Knowledge', 15, curY);
curY += 5.5;

doc.setFont('Helvetica', 'normal');
doc.setFontSize(10);
doc.setTextColor(55, 62, 58);
let text15 = 'I have seen investors become enthusiastic when markets are rising and anxious when markets fall. This is when emotions can begin to influence investment decisions.';
let lines15 = doc.splitTextToSize(text15, 180);
doc.text(lines15, 15, curY);
curY += lines15.length * 4.8 + 4;

let text16 = 'One common mistake is to stop an ongoing SIP or redeem a long-term investment merely because markets have fallen. Another is trying to time the market - exiting with the hope of re-entering lower, or waiting indefinitely for the "right" level to invest.';
let lines16 = doc.splitTextToSize(text16, 180);
doc.text(lines16, 15, curY);
curY += lines16.length * 4.8 + 4;

let text17 = 'Predicting both the right time to exit and the right time to re-enter is extremely difficult. An SIP invests systematically across market conditions; the same amount generally buys more units when prices decline and fewer when prices rise.';
let lines17 = doc.splitTextToSize(text17, 180);
doc.text(lines17, 15, curY);
curY += lines17.length * 4.8 + 4;

let text18 = 'This does not mean an investment should never be stopped or redeemed. Changes in goals, time horizon, risk profile, liquidity needs or portfolio suitability may justify a review. But fear caused by a temporary market fall should not, by itself, become the investment strategy.';
let lines18 = doc.splitTextToSize(text18, 180);
doc.text(lines18, 15, curY);
curY += lines18.length * 4.8 + 5;

curY = addCallout(doc, 'Invest by plan, not by market prediction. Markets will move. Your goals remain.', curY);

checkAddPage(30);
doc.setFont('Helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(35, 41, 38);
doc.text('Prepare for the Unexpected', 15, curY);
curY += 5.5;

doc.setFont('Helvetica', 'normal');
doc.setFontSize(10);
doc.setTextColor(55, 62, 58);
let text19 = 'Investing should not come at the cost of basic financial preparedness. Maintaining appropriate liquidity for emergencies can help reduce the need to disturb long-term investments when unexpected expenses arise.';
let lines19 = doc.splitTextToSize(text19, 180);
doc.text(lines19, 15, curY);
curY += lines19.length * 4.8 + 6;

checkAddPage(30);
doc.setFont('Helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(35, 41, 38);
doc.text('What Long-Term Investors Have Taught Me', 15, curY);
curY += 5.5;

doc.setFont('Helvetica', 'normal');
doc.setFontSize(10);
doc.setTextColor(55, 62, 58);
let text20 = 'Investors who remain committed to their long-term financial journey are not necessarily those who predict markets correctly. They are often the ones who start early, save consistently, invest with discipline, review periodically, avoid unnecessary reactions to short-term movements and give their investments sufficient time.';
let lines20 = doc.splitTextToSize(text20, 180);
doc.text(lines20, 15, curY);
curY += lines20.length * 4.8 + 5;

curY = addCallout(doc, 'Money saved is not money denied to you today. It is money reserved for the person you will become tomorrow.', curY);

checkAddPage(35);
doc.setFont('Helvetica', 'bold');
doc.setFontSize(12.5);
doc.setTextColor(53, 133, 142);
doc.text('The Philosophy Behind MFDThiru', 15, curY);
curY += 6;

doc.setFont('Helvetica', 'normal');
doc.setFontSize(10);
doc.setTextColor(55, 62, 58);
doc.text('These observations have shaped the philosophy behind MFDThiru.', 15, curY);
curY += 6;

let text21 = 'I do not believe my role ends with facilitating a mutual fund transaction. My endeavour is to help investors understand their goals, organise their investments, maintain financial discipline and make informed investment decisions without unnecessary delay.';
let lines21 = doc.splitTextToSize(text21, 180);
doc.text(lines21, 15, curY);
curY += lines21.length * 4.8 + 5;

doc.text('The final investment decision will always remain yours.', 15, curY);
curY += 8;

doc.setFont('Helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(53, 133, 142);
doc.text('Three Questions Worth Asking', 15, curY);
curY += 5.5;

doc.setFont('Helvetica', 'normal');
doc.setFontSize(9.5);
doc.setTextColor(35, 41, 38);
doc.text('•  Am I saving before I spend?', 20, curY); curY += 4.5;
doc.text('•  Am I building assets as consciously as I am creating expenses?', 20, curY); curY += 4.5;
doc.text('•  Am I giving tomorrow\'s goals enough importance in today\'s financial decisions?', 20, curY); curY += 8;

curY = addCallout(doc, 'Today is yesterday\'s tomorrow. Money Saved Today Is Wealth Created for Your Future.', curY);

curY += 2;
doc.setFillColor(230, 242, 221);
doc.roundedRect(15, curY, 180, 15, 3, 3, 'F');
doc.setFont('Helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(53, 133, 142);
doc.text('Save before you spend.  |  Build assets before lifestyle.', 105, curY + 5.5, { align: 'center' });
doc.text('Do not let today\'s wants compromise tomorrow\'s goals.', 105, curY + 11, { align: 'center' });

curY += 22;
doc.setFont('Helvetica', 'bold');
doc.setFontSize(12);
doc.setTextColor(35, 41, 38);
doc.text('J. C. Thirumurugan', 195, curY, { align: 'right' });
curY += 4.5;
doc.setFont('Helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(53, 133, 142);
doc.text('Founder - MFDThiru', 195, curY, { align: 'right' });

curY += 12;
doc.setFont('Helvetica', 'bold');
doc.setFontSize(8);
doc.setTextColor(85, 93, 88);
doc.text('Important:', 15, curY);

doc.setFont('Helvetica', 'normal');
doc.setFontSize(7);
doc.setTextColor(110, 120, 115);
let discText = "This note reflects general observations and is intended for investor education and awareness. It should not be construed as investment advice, a recommendation, or an assurance of returns. Mutual fund investments are subject to market risks. Read all scheme related documents carefully. Past performance may or may not be sustained in the future. Investors should consider their investment objectives, risk profile and investment horizon before investing.";
let discLines = doc.splitTextToSize(discText, 180);
doc.text(discLines, 15, curY + 3.5);

const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
const outputPath = path.resolve('public/A_Note_From_The_Founder.pdf');
fs.writeFileSync(outputPath, pdfBuffer);
console.log('PDF generated successfully at:', outputPath);
