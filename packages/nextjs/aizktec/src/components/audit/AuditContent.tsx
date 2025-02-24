import AuditCard from "./AuditCard";

const AuditContent = () => {
  return (
    <section className="flex flex-col gap-4 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-center">Audit Panel</h1>

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
        <p>GDPR Compliance Report - Company A</p>
        <p>ISO 27001 Audit - Company B</p>
        <p>HIPAA Compliance Check - Company C</p>
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
