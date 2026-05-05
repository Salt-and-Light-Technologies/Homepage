import LegalPage from './LegalPage'

const sections = [
  {
    intro: 'Welcome to Salt and Light Technologies. These Terms of Use ("Terms") govern your access to and use of the website located at saltandlighttechnologies.com (the "Site") and the services provided by Salt and Light Technologies ("Company," "we," "us," or "our"). By accessing our Site or using our services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, please refrain from using our Site and services.',
  },
  {
    heading: '1. Description of Services',
    intro: 'Salt and Light Technologies provides professional software engineering services, including but not limited to:',
    items: [
      'Custom website and application development.',
      'Marketplace, mobile app, and backend platform engineering.',
      'Website maintenance, security updates, and performance optimization.',
    ],
  },
  {
    heading: '2. Eligibility',
    paragraphs: [
      'By using this Site, you represent and warrant that you are at least 18 years of age and have the legal capacity to enter into a binding agreement. If you are using the Site on behalf of a business entity, you represent that you have the authority to bind that entity to these Terms.',
    ],
  },
  {
    heading: '3. Intellectual Property Rights',
    paragraphs: [
      'Unless otherwise indicated, the Site and its entire contents, features, and functionality — including all information, software, text, displays, images, video, and audio — are owned by Salt and Light Technologies and are protected by United States and international copyright, trademark, and other intellectual property laws.',
      'Regarding client projects: ownership of custom-developed code and assets is governed by the specific Service Agreement executed between the Company and the Client. Upon full payment, all intellectual property generated during a project transfers to the Client as outlined in that agreement. Until full payment is received, all such intellectual property remains the property of Salt and Light Technologies.',
    ],
  },
  {
    heading: '4. User Conduct and Prohibited Uses',
    intro: 'You agree to use the Site only for lawful purposes. You are prohibited from:',
    items: [
      'Using the Site in any way that violates any applicable federal, state, local, or international law.',
      'Engaging in any conduct that restricts or inhibits anyone\'s use or enjoyment of the Site.',
      'Attempting to interfere with the proper working of the Site, including through the use of viruses, Trojan horses, or other malicious code.',
      'Unauthorized framing of or linking to the Site.',
      'Attempting to gain unauthorized access to any portion of the Site or our servers.',
    ],
  },
  {
    heading: '5. Payment and Fees',
    paragraphs: [
      'Quotes and project estimates are valid for the period specified in the individual proposal. Payments for services rendered are due according to the milestones outlined in your specific Service Agreement. Payment schedules must be adhered to for the continuation of work. Late payments may result in a suspension of services or maintenance.',
    ],
  },
  {
    heading: '6. Disclaimer of Warranties',
    paragraphs: [
      'The Site and services are provided on an "as is" and "as available" basis. Salt and Light Technologies makes no warranties, expressed or implied, regarding the operation of the Site or the information, content, or materials included therein. To the full extent permissible by law, we disclaim all warranties, including but not limited to implied warranties of merchantability and fitness for a particular purpose.',
    ],
  },
  {
    heading: '7. Limitation of Liability',
    paragraphs: [
      'In no event shall Salt and Light Technologies, its directors, employees, or partners be liable for any indirect, incidental, special, consequential, or punitive damages — including without limitation, loss of profits, data, use, goodwill, or other intangible losses — resulting from (i) your access to or use of, or inability to access or use, the services; (ii) any conduct or content of any third party on the services; or (iii) unauthorized access, use, or alteration of your transmissions or content.',
    ],
  },
  {
    heading: '8. Indemnification',
    paragraphs: [
      'You agree to defend, indemnify, and hold harmless Salt and Light Technologies and its affiliates from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys\' fees) arising out of or relating to your violation of these Terms or your use of the Site.',
    ],
  },
  {
    heading: '9. External Links',
    paragraphs: [
      'Our Site may contain links to third-party websites. These links are provided for convenience only. We have no control over the contents of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.',
    ],
  },
  {
    heading: '10. Governing Law and Jurisdiction',
    paragraphs: [
      'All matters relating to the Site and these Terms, and any dispute or claim arising therefrom, shall be governed by and construed in accordance with the internal laws of the State of Illinois, without giving effect to any choice or conflict of law provision. Any legal suit, action, or proceeding arising out of or related to these Terms shall be instituted exclusively in the federal or state courts located in the United States.',
    ],
  },
  {
    heading: '11. Changes to Terms',
    paragraphs: [
      'We reserve the right to withdraw or amend these Terms at our sole discretion without notice. Your continued use of the Site following the posting of revised Terms means that you accept and agree to the changes.',
    ],
  },
  {
    heading: '12. Contact Information',
    intro: 'To ask questions or comment about these Terms of Use, contact us at:',
    items: [
      'Email: legal@saltandlighttechnologies.com',
      'Website: saltandlighttechnologies.com',
    ],
  },
]

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      effectiveDate="May 5, 2026"
      sections={sections}
    />
  )
}
