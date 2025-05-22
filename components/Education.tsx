import React from 'react';
import Section from './Section';
import EducationItem from './EducationItem';
import { EducationalQualification } from '../types';

interface EducationProps {
  qualifications: EducationalQualification[];
}

const Education: React.FC<EducationProps> = ({ qualifications }) => {
  return (
    <Section id="education" title="Educational Qualifications" > {/* Removed className="bg-purple-950" */}
      <div className="max-w-3xl mx-auto">
        {qualifications.map((qual, index) => (
          <EducationItem key={qual.id} qualification={qual} isLast={index === qualifications.length - 1} />
        ))}
      </div>
    </Section>
  );
};

export default Education;