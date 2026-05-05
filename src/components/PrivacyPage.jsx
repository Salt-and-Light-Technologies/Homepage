import LegalPage from './LegalPage'

const sections = [
  {
    intro: 'Salt and Light Technologies ("we," "us," or "our") operates the website saltandlighttechnologies.com (the "Site") and provides custom software development, marketplace engineering, and web services (collectively, the "Services"). This Privacy Policy explains our policies regarding the collection, use, and disclosure of personal data when you use our Services and the choices you have associated with that data.',
  },
  {
    heading: '1. Information We Collect',
    intro: 'We collect several types of information to provide and improve our Services.',
    subsections: [
      {
        label: 'A. Personal Data',
        text: 'While using our Services, we may ask you to provide personally identifiable information that can be used to contact or identify you. This may include: email address, first and last name, phone number, business name and industry details, and billing information.',
      },
      {
        label: 'B. Usage Data',
        text: 'We may also collect information on how the Service is accessed and used. This may include your IP address, browser type and version, the pages you visit, time and date of your visit, time spent on pages, and other diagnostic data.',
      },
    ],
  },
  {
    heading: '2. Use of Data',
    intro: 'Salt and Light Technologies uses collected data for the following purposes:',
    items: [
      'To provide and maintain our Services, including software development and engineering engagements.',
      'To notify you about changes to our Services.',
      'To provide customer support.',
      'To gather analysis so that we can improve our Services.',
      'To monitor the usage of our Services.',
      'To detect, prevent, and address technical issues.',
      'To provide you with relevant information about other services and offerings we provide.',
    ],
  },
  {
    heading: '3. Transfer of Data',
    paragraphs: [
      'Your information, including Personal Data, may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ from those of your jurisdiction. Your consent to this Privacy Policy, followed by your submission of such information, represents your agreement to that transfer.',
    ],
  },
  {
    heading: '4. Disclosure of Data',
    intro: 'Salt and Light Technologies may disclose your Personal Data in the good faith belief that such action is necessary to:',
    items: [
      'Comply with a legal obligation.',
      'Protect and defend the rights or property of Salt and Light Technologies.',
      'Prevent or investigate possible wrongdoing in connection with the Service.',
      'Protect the personal safety of users of the Service or the public.',
      'Protect against legal liability.',
    ],
  },
  {
    heading: '5. Security of Data',
    paragraphs: [
      'The security of your data is important to us. While we strive to use commercially acceptable means to protect your Personal Data, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.',
    ],
  },
  {
    heading: '6. Service Providers',
    paragraphs: [
      'We may employ third-party companies and individuals to facilitate our Service, provide the Service on our behalf, perform Service-related work, or assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks and are obligated not to disclose or use it for any other purpose.',
    ],
  },
  {
    heading: '7. Links to Other Sites',
    paragraphs: [
      'Our Service may contain links to other sites not operated by us. If you click a third-party link, you will be directed to that site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.',
    ],
  },
  {
    heading: '8. Changes to This Privacy Policy',
    paragraphs: [
      'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the updated Privacy Policy on this page and updating the Effective Date at the top. We encourage you to review this Privacy Policy periodically for any changes.',
    ],
  },
  {
    heading: '9. Contact Us',
    intro: 'If you have any questions about this Privacy Policy, please contact us:',
    items: [
      'By visiting: saltandlighttechnologies.com/contact',
      'By email: legal@saltandlighttechnologies.com',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      effectiveDate="May 5, 2026"
      sections={sections}
    />
  )
}
