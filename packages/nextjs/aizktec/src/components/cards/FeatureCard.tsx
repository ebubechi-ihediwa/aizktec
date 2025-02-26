import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FeatureCardProps {
    title: string;
    description: string;
    link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, link }) => {
    return (
        <Card className="h-full flex flex-col dark:bg-black/50 bg-gray-50 dark:border-white/30 border-black/30">
            <CardHeader>
                <CardTitle className="dark:text-white text-black">{title}</CardTitle>
                <CardDescription className="dark:text-gray-300 text-gray-600">{description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto pt-6">
                <Button asChild variant="outline" className="w-full dark:border-white/30 border-black/30 dark:hover:bg-white/10 hover:bg-black/10">
                    <Link href={link}>Learn more</Link>
                </Button>
            </CardFooter>
        </Card>
    );
};

export default FeatureCard;
