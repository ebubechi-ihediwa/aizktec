import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AuditCardProps {
  children: React.ReactNode;
  title?: string;
  cardContentClassName?: string;
}

const AuditCard = ({
  children,
  title,
  cardContentClassName,
}: AuditCardProps) => {
  return (
    <Card className="dark:bg-black/50 bg-gray-50 p-6 rounded-lg text-left border dark:border-white/30 border-black/30 flex flex-col justify-between h-full">
      {title && (
        <CardHeader className="text-center text-2xl">
          <CardTitle className="capitalize dark:text-white text-black">{title}</CardTitle>
        </CardHeader>
      )}

      <CardContent className={cn("text-center dark:text-gray-300 text-gray-600", cardContentClassName)}>
        {children}
      </CardContent>
    </Card>
  );
};

export default AuditCard;
