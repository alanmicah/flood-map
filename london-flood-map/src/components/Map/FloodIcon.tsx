export const FloodIcon = ({ severity }) => {
  const colorMap = {
    severe: "red",
    flooding: "red",
    warning: "orange",
    alert: "green",
  };

  const color = colorMap[severity] || "gray";

  return (
    <circle cx={50} cy={50} r={8} fill={color} />
  );
};