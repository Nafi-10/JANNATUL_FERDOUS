import { PERSONAL_INFO } from '../data/portfolioData';

const PAGE_WIDTH = 210;
const PAGE_HEIGHT = 297;
const MARGIN = 18;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

const toPdfText = (value: string) =>
  value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2013\u2014]/g, '-')
    .replace(/\u00B7/g, '|');

export const downloadBioData = async () => {
  const { jsPDF } = await import('jspdf');
  const pdf = new jsPDF({ unit: 'mm', format: 'a4' });
  let y = 18;

  const addPage = () => {
    pdf.addPage();
    pdf.setFillColor(20, 23, 43);
    pdf.rect(0, 0, PAGE_WIDTH, 12, 'F');
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(9);
    pdf.setTextColor(255, 255, 255);
    pdf.text('JANNATUL FERDOUS  |  BIO-DATA', MARGIN, 8);
    y = 22;
  };

  const ensureSpace = (height: number) => {
    if (y + height > PAGE_HEIGHT - 18) addPage();
  };

  const addWrappedText = (value: string, options?: { bold?: boolean; indent?: number }) => {
    const indent = options?.indent ?? 0;
    pdf.setFont('helvetica', options?.bold ? 'bold' : 'normal');
    pdf.setFontSize(10);
    pdf.setTextColor(55, 62, 83);
    const lines = pdf.splitTextToSize(toPdfText(value), CONTENT_WIDTH - indent);
    for (const line of lines) {
      ensureSpace(5.5);
      pdf.text(line, MARGIN + indent, y);
      y += 5.2;
    }
    y += 1.5;
  };

  const addSection = (title: string) => {
    ensureSpace(14);
    y += 3;
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(13);
    pdf.setTextColor(59, 91, 255);
    pdf.text(toPdfText(title.toUpperCase()), MARGIN, y);
    y += 2;
    pdf.setDrawColor(79, 214, 208);
    pdf.setLineWidth(0.5);
    pdf.line(MARGIN, y, PAGE_WIDTH - MARGIN, y);
    y += 7;
  };

  const addBullet = (value: string) => addWrappedText(`- ${value}`, { indent: 2 });

  pdf.setFillColor(20, 23, 43);
  pdf.rect(0, 0, PAGE_WIDTH, 46, 'F');
  pdf.setFillColor(79, 214, 208);
  pdf.rect(MARGIN, 15, 2, 22, 'F');
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(10);
  pdf.setTextColor(174, 185, 214);
  pdf.text('PERSONAL PROFILE', MARGIN + 7, 20);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(25);
  pdf.setTextColor(255, 255, 255);
  pdf.text(toPdfText(PERSONAL_INFO.name), MARGIN + 7, 29);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(11);
  pdf.setTextColor(79, 214, 208);
  pdf.text('Student | Khulna, Bangladesh', MARGIN + 7, 37);
  y = 56;

  addSection('Profile');
  PERSONAL_INFO.bio.split(/\n\s*\n/).forEach((paragraph) => addWrappedText(paragraph));

  addSection('Personal Details');
  [
    ['Date of Birth', '21 November 2007'],
    ['Place of Birth', 'CMH Jashore, Bangladesh'],
    ['Marital Status', 'Single'],
    ['Email', PERSONAL_INFO.email],
    ['Address', '8/1, Haji Ismail Link Road-2, Sonadanga, Khulna City Corporation, Khulna-9100, Bangladesh.'],
  ].forEach(([label, value]) => addWrappedText(`${label}: ${value}`));

  addSection('Education');
  [
    {
      title: 'Higher Secondary Certificate (HSC) | 2026',
      detail: 'Khulna Government College, Khulna, Bangladesh. Science faculty; currently preparing for examinations. Result pending.',
    },
    {
      title: 'Secondary School Certificate (SSC) | 2024',
      detail: "Khulna Collegiate Girls' School, Khulna, Bangladesh. Graduated with high honors in the Science group; GPA 4.94 out of 5.00, with strong performance in Mathematics and Sciences.",
    },
    {
      title: 'Junior School Certificate (JSC) | 2021',
      detail: "Khulna Collegiate Girls' School, Khulna, Bangladesh. No board exam was held; students were evaluated through the national institutional assessment during the COVID-19 pandemic.",
    },
    {
      title: 'Primary School Certificate (PSC) | 2018',
      detail: 'BAF Shaheen School, Jashore, Bangladesh. Graduated with distinction and a GPA of 5.00 out of 5.00.',
    },
  ].forEach(({ title, detail }) => {
    addWrappedText(title, { bold: true });
    addWrappedText(detail);
  });

  addSection('Extracurricular Activities');
  [
    {
      title: 'Computer Training',
      detail: 'Bangladesh Technical Education Board, Dhaka. Government-certified vocational computing program covering operating systems, office suites, and digital workflows.',
    },
    {
      title: 'RCRC Basic & First Aid',
      detail: 'Bangladesh Red Crescent Society. First aid, CPR, disaster relief, and humanitarian response training.',
    },
    {
      title: 'Driving Course',
      detail: 'Jahanabad Military Driving School. Defensive driving, traffic regulations, emergency handling, and road safety.',
    },
    {
      title: 'Singing - Robindro Shongit',
      detail: 'Classical vocal studies, Tagore literature, melodic ragas, and stage performance.',
    },
  ].forEach(({ title, detail }) => {
    addWrappedText(title, { bold: true });
    addWrappedText(detail);
  });

  addSection('Skills & Interests');
  [
    'Emergency first aid, CPR, disaster relief, and humanitarian service.',
    'Defensive driving, traffic regulations, emergency handling, and road safety.',
    'Operating systems, office suites, and digital workflows.',
    'Classical vocalism, Tagore literature, and stage performance.',
  ].forEach(addBullet);

  addSection('Career Interests');
  addWrappedText('Actively seeking Product Design and Frontend Engineering internship opportunities. Open to remote and hybrid roles globally.');

  addSection('Family Information');
  addWrappedText('Father: Md Kazi Saiful Islam', { bold: true });
  addWrappedText('Former Warrant Officer in the Bangladesh Air Force and Notre Dame College (NDC), Dhaka alumnus. Remembered as punctual, disciplined, and well-mannered. Passed away on 23 August 2026.');
  addBullet('Served as a Warrant Officer in the Bangladesh Air Force.');
  addBullet('Educated at Notre Dame College (NDC), Dhaka.');
  addWrappedText('Mother: Jahanara Islam', { bold: true });
  addWrappedText('A devoted and responsible homemaker who brings care, patience, and steady strength to her family. She creates a welcoming and supportive home and encourages kindness, respect, and close family bonds.');
  addWrappedText('Brother: Md Kazi Jawadul Islam', { bold: true });
  addWrappedText('B.Sc. in Computing and Information System, Daffodil International University. Major in Artificial Intelligence. Business Analyst at Akand Engineering.');
  addBullet('Interests: IoT with AI, critical problem solving, and playing football.');
  addWrappedText('Facebook: https://www.facebook.com/jawadul.islam.14490/');
  addWrappedText('LinkedIn: https://www.linkedin.com/in/kazi-jawadul-islam');
  addWrappedText('Portfolio: https://kazi-jawad.netlify.app/');
  addWrappedText("Quote: \"Love yourself, Be yourself. No one's gonna pay your bill's ( Peace)\"");

  addSection('Overall Family Member Overview');
  addWrappedText('Paternal Lineage', { bold: true });
  [
    {
      name: 'Late Mr. Musnim Uddin',
      relation: 'Paternal Grandfather',
      profession: 'Teacher',
      detail: 'Dedicated lifelong educator and beacon of ethical discipline.',
    },
    {
      name: 'Late Mrs. Subaiya Begum',
      relation: 'Paternal Grandmother',
      profession: 'Homemaker',
      detail: 'Pillar of domestic grace, generosity, and familial unity.',
    },
    {
      name: 'Md. Tahier Islam',
      relation: 'Paternal Uncle',
      profession: 'Businessman',
      detail: 'Commercial enterprise leader and business management.',
    },
    ...[1, 2, 3, 4].map((number) => ({
      name: `Paternal Aunt (${number}${number === 1 ? 'st' : number === 2 ? 'nd' : number === 3 ? 'rd' : 'th'})`,
      relation: 'Paternal Aunt',
      profession: 'Not Disclosed',
      detail: 'Extended paternal family lineage and household stewardship.',
    })),
  ].forEach((member) => {
    addWrappedText(`${member.name} | ${member.relation}`, { bold: true });
    addWrappedText(`Occupation: ${member.profession}. ${member.detail}`);
  });

  addWrappedText('Maternal Lineage', { bold: true });
  [
    {
      name: 'Late Khan Solaiman Hossain',
      relation: 'Maternal Grandfather',
      profession: 'Businessman',
      detail: 'Respected business entrepreneur and community benefactor.',
    },
    {
      name: 'Late Monowara Begum',
      relation: 'Maternal Grandmother',
      profession: 'Homemaker',
      detail: 'Remembered for empathy, warm hospitality, and moral foundation.',
    },
    {
      name: 'Ibrahim Khan',
      relation: 'Maternal Uncle',
      profession: 'Businessman',
      detail: 'Commerce, corporate partnerships, and entrepreneurship.',
    },
    {
      name: 'Imtiaz Khan',
      relation: 'Maternal Uncle',
      profession: 'Businessman',
      detail: 'Commercial enterprise, trade development, and management.',
    },
    {
      name: 'Anoara Akhter',
      relation: 'Maternal Aunt',
      profession: 'Maternal Aunt',
      detail: 'Family support, cultural traditions, and guidance.',
    },
    {
      name: 'Reijina Afrin',
      relation: 'Maternal Aunt',
      profession: 'Maternal Aunt',
      detail: 'Compassionate counseling and extended family care.',
    },
    {
      name: 'Gulshan Ara Happy',
      relation: 'Maternal Aunt',
      profession: 'Maternal Aunt',
      detail: 'Warmth, celebration of family milestones, and encouragement.',
    },
  ].forEach((member) => {
    addWrappedText(`${member.name} | ${member.relation}`, { bold: true });
    addWrappedText(`Occupation: ${member.profession}. ${member.detail}`);
  });

  addSection('Vital Members of Family');
  [
    {
      name: 'Harun-ar-Rashid',
      relation: 'Maternal Uncle',
      profession: 'Businessman',
      detail: 'Respected maternal uncle engaged in commercial enterprises and business development. Business Enterprise.',
    },
    {
      name: 'Masud Khan',
      relation: 'Maternal Uncle',
      profession: 'Resides in the USA',
      detail: 'Maternal uncle residing in the United States, fostering international family linkages.',
    },
    {
      name: 'Nurul Sheikh',
      relation: "Husband of Reijina Afrin (Maternal Aunt)",
      profession: 'Retired Navy Officer',
      detail: 'Distinguished naval career with honor and strategic leadership in the Bangladesh Navy.',
    },
    {
      name: 'Md. Masum Billah',
      relation: "Husband of Gulshan Ara Happy (Maternal Aunt)",
      profession: 'Advocate, Supreme Court of Bangladesh',
      detail: 'Practicing senior advocate with constitutional and civil expertise.',
    },
    {
      name: 'Syed Titu',
      relation: "Husband of Anoara Akhter (Maternal Aunt)",
      profession: 'Resides in Oman',
      detail: 'Residing in the Sultanate of Oman with distinguished expatriate professional engagements.',
    },
    {
      name: 'Abdul Kuddus',
      relation: "Paternal Aunt's Husband",
      profession: 'Architect',
      detail: 'Professional architect practicing in the Kingdom of Bahrain.',
    },
    {
      name: 'Md. Billal Hossain Sorkar',
      relation: "Paternal Aunt's Husband",
      profession: 'Professional & Business Executive',
      detail: 'Senior executive and community figure contributing to business administration and social harmony.',
    },
    {
      name: 'Mokhlesur Rahman',
      relation: "Paternal Aunt's Husband",
      profession: 'Corporate Executive, Orion Group',
      detail: 'Senior managerial and executive career within leading conglomerate Orion Group.',
    },
  ].forEach((member) => {
    addWrappedText(`${member.name} | ${member.relation}`, { bold: true });
    addWrappedText(`Profession: ${member.profession}. ${member.detail}`);
  });

  for (let page = 1; page <= pdf.getNumberOfPages(); page += 1) {
    pdf.setPage(page);
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(8);
    pdf.setTextColor(125, 132, 151);
    pdf.text(
      `Jannatul Ferdous | Page ${page} of ${pdf.getNumberOfPages()}`,
      PAGE_WIDTH / 2,
      PAGE_HEIGHT - 8,
      { align: 'center' },
    );
  }

  const pdfUrl = URL.createObjectURL(pdf.output('blob'));
  const downloadLink = document.createElement('a');
  downloadLink.href = pdfUrl;
  downloadLink.download = 'Jannatul-Ferdous-Bio-Data.pdf';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  downloadLink.remove();
  window.setTimeout(() => URL.revokeObjectURL(pdfUrl), 1000);
};
