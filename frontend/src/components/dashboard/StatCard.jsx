export default function StatCard({
  title,
  value,
  color,
  icon
}) {

  return (
    <div
      className="stat-card"
      style={{
        borderLeft: `5px solid ${color}`
      }}
    >
      <div className="stat-icon">
        {icon}
      </div>

      <div className="stat-info">
        <h4>{title}</h4>
        <h2>{value}</h2>
      </div>
    </div>
  );
}