import Card from "./Card";

export default function DashboardCard({
  title,
  value,
}) {
  return (
    <Card>
      <h3>{title}</h3>

      <p className="text-2xl font-bold">
        {value}
      </p>
    </Card>
  );
}