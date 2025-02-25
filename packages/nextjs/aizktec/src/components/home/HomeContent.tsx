import FeatureCard from '@/components/cards/FeatureCard';

const HomeContent = () => {
    return (
        <main className="text-center p-10">
            <h2 className="text-3xl font-bold">Welcome to AI-ZK-TEC</h2>
            <div className="flex items-center justify-center">
                <div className="mt-8 text-gray-300 bg-customGray font-semibold p-6 rounded-lg border border-white/30 w-fit">
                    <p>Revolutionizing data privacy and compliance with Artificial Intelligence,</p>
                    <p>Zero-Knowledge proofs, and the Aztec ecosystem on Ethereum&apos;s L2.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <FeatureCard
                    title="Data Rights Management"
                    description="Upload your data, set permissions, and monitor usage."
                    link="/data-rights"
                />
                <FeatureCard
                    title="Compliance Verification"
                    description="Upload templates and generate proof of compliance."
                    link="/compliance"
                />
                <FeatureCard
                    title="Audit Panel"
                    description="Access encrypted reports to verify compliance."
                    link="/audit"
                />
            </div>

            <button className="mt-6 bg-white text-black px-6 py-2 rounded">Get Started</button>
        </main>
    );
};

export default HomeContent;
