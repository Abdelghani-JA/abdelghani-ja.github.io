import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types";

const ProjectCard = ({ type, title, description, moreUrl }: Project) => {
  return (
    <Card className="relative w-full max-w-[20rem]">
      <CardHeader>
        <Badge>{type}</Badge>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter>
        <Button className="absolute right-[10px] bottom-[10px] bg-secondary-background px-0 py-0">
          <a href={moreUrl} className="px-4 py-2">
            More 🡭
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
