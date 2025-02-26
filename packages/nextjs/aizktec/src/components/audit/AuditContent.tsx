import AuditCard from "./AuditCard";

const AuditContent = () => {
  return (
    <section className="flex flex-col gap-4 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-center dark:text-white text-black">Audit Panel</h1>

      <AuditCard cardContentClassName="p-0">
        <p className="text-center">
          Access encrypted reports to verify compliance using Zero-Knowledge
          proofs.
        </p>
      </AuditCard>
      <AuditCard
        title="available audit reports"
        cardContentClassName="space-y-6"
      >
        <div className="space-y-4">
          <p className="dark:text-gray-300 text-gray-600 hover:opacity-80 cursor-pointer transition-opacity">GDPR Compliance Report - Company A</p>
          <p className="dark:text-gray-300 text-gray-600 hover:opacity-80 cursor-pointer transition-opacity">ISO 27001 Audit - Company B</p>
          <p className="dark:text-gray-300 text-gray-600 hover:opacity-80 cursor-pointer transition-opacity">HIPAA Compliance Check - Company C</p>
        </div>
      </AuditCard>

      <AuditCard title="verification process">
        <p className="text-center">
          Our system uses Zero-Knowledge proofs to verify compliance without
          revealing sensitive information. Click on a report above to start the
          verification process.
        </p>
      </AuditCard>
    </section>
  );
};

export default AuditContent;
