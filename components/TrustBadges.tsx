
import React from 'react';

const certifications = [
  { name: 'HACCP', description: 'Hazard Analysis and Critical Control Points' },
  { name: 'ISO 22000:2018', description: 'Food Safety Management' },
  { name: 'GLOBAL G.A.P.', description: 'Good Agricultural Practice' },
  { name: 'VIETGAP', description: 'Vietnamese Good Agricultural Practices' },
];

const CertificationIcon: React.FC<{ name: string }> = ({ name }) => (
    <div className="flex items-center justify-center h-16 w-32 bg-slate-100 rounded-lg">
        <span className="font-bold text-navy-blue text-sm text-center">{name}</span>
    </div>
);


const TrustBadges: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {certifications.map((cert) => (
            <div key={cert.name} className="flex flex-col items-center group text-center" title={cert.description}>
                <div className="flex items-center justify-center p-4 transition-transform duration-300 group-hover:scale-110">
                    <CertificationIcon name={cert.name} />
                </div>
                <p className="text-sm text-slate-500 font-medium mt-1">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
