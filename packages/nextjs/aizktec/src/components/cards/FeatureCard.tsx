import Link from 'next/link';

interface FeatureCardProps {
    title: string;
    description: string;
    link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, link }) => {
    return (
        <div className="bg-customGray p-6 rounded-lg text-left border border-white/30 flex flex-col justify-between h-full">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-400 mt-2">{description}</p>
            <Link href={link} className="mt-9 inline-block bg-black w-full px-4 py-2 text-center rounded border border-white/30">
                Learn more
            </Link>
        </div>
    );
};

export default FeatureCard;
