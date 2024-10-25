import { Card, Label, Text, Title } from "@ui5/webcomponents-react";

interface INotesCardProps {
  title: string;
  content: string;
  dateModified: string;
}
export function NotesCard({ title, content, dateModified }: INotesCardProps) {
  return (
    <Card className="notesCard">
      <Title style={{ position: "absolute", top: "10%", left: "10px" }}>
        {title}
      </Title>
      <Text style={{ position: "absolute", top: "30%", left: "10px" }}>
        {content}
      </Text>
      <Label style={{ position: "absolute", bottom: "10%", left: "10px" }}>
        {dateModified.slice(0, 10)}
      </Label>
    </Card>
  );
}
