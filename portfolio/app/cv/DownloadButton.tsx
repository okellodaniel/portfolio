'use client';

import { Button } from '@/components/ui/button';
import jsPDF from 'jspdf';
import { Download } from 'lucide-react';

const DownloadButton = () => {
    const downloadCV = () => {
        const doc = new jsPDF();

        // Set font styles
        doc.setFont('futura');

        // Header - reduced size and spacing
        doc.setFontSize(16);
        doc.text('Daniel Okello - Resume', 20, 15);

        // Professional Summary - more compact
        doc.setFontSize(12);
        doc.text('Professional Summary', 20, 25);
        doc.setFontSize(10);
        const summary = 'Detail-oriented software support professional with 3+ years of experience in technical troubleshooting, bug triage, and customer support. Proficient in Python, SQL, and cloud technologies (Azure, AWS).';
        doc.text(doc.splitTextToSize(summary, 170), 20, 32);

        // Skills - moved up after summary
        doc.setFontSize(12);
        doc.text('Skills', 20, 45);
        doc.setFontSize(10);
        doc.text('• Python, C#, SQL, Data Engineering, Machine Learning, LLMs & Prompting', 25, 52);
        doc.text('• MongoDB, PostgreSQL, SQL Server, AWS, Azure, Docker, CI/CD', 25, 58);
        doc.text('• Agile Methodologies, Technical Leadership, Mentorship', 25, 64);

        // Work Experience - adjusted spacing
        doc.setFontSize(12);
        doc.text('Work Experience', 20, 77);
        doc.setFontSize(10);

        // First position
        doc.text('Customer Success Engineer - Laboremus Uganda | 2022 - Present', 20, 84);
        doc.text('• Managed bug triage process, gathering details and escalating complex issues', 25, 90);
        doc.text('• Maintained and updated FAQs, reducing repeated inquiries by 30%', 25, 96);
        doc.text('• Analysed recurring issues, collaborating with product team', 25, 102);

        // Second position
        doc.text('Software Developer - Valuer Space Inc. | 2022 - Present', 20, 112);
        doc.text('• Led development of enterprise-level mobile applications using React Native', 25, 118);
        doc.text('• Implemented microservices architecture, improving scalability by 40%', 25, 124);
        doc.text('• Collaborated with stakeholders to align development strategies', 25, 130);

        // Third position
        doc.text('Junior Backend Engineer - Renga Technologies | 2021 - 2022', 20, 140);
        doc.text('• Created automated test cases, contributing to 25% faster QA process', 25, 146);
        doc.text('• Improved application performance, enhancing load times by 20%', 25, 152);

        // Education - at bottom
        doc.setFontSize(12);
        doc.text('Education', 20, 165);
        doc.setFontSize(10);
        doc.text('Python, Blockchain, AWS - CODEIT Institute of Technology (2021-2022)', 20, 172);
        doc.text('Certificate of Software Engineering - Clerk International University (2020-2021)', 20, 178);
        doc.text('BSc. Chemical Engineering - Kyambogo University (2014-2018)', 20, 184);

        doc.save('Daniel_Okello_CV.pdf');
    };

    return (
        <Button
            onClick={downloadCV}
            variant="outline"
            className="fixed bottom-8 right-8 shadow-lg"
        >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
        </Button>
    );
};

export default DownloadButton;