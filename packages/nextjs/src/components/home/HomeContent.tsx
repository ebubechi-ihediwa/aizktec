import FeatureCard from '@/components/cards/FeatureCard';
import { Button } from "@/components/ui/button";

const HomeContent = () => {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight">Welcome to AI-ZK-TEC</h1>
            
            <div className="flex items-center justify-center mt-8">
                <div className="dark:bg-black/50 bg-gray-50 p-6 rounded-lg border dark:border-white/30 border-black/30">
                    <p className="text-lg dark:text-gray-300 text-gray-600">
                        Revolutionizing data privacy and compliance with Artificial Intelligence,
                        <br />
                        Zero-Knowledge proofs, and the Aztec ecosystem on Ethereum&apos;s L2.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
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

            <div className="mt-12">
                <Button size="lg">Get Started</Button>
            </div>
        </div>
    );
};

export default HomeContent;
