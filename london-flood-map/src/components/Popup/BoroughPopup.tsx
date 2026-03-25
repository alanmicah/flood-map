export const BoroughPopup = ({ name, data, onClose }) => {
  return (
    <foreignObject x={20} y={20} width={200} height={150}>
      <div className="popup">
        <h3>{name}</h3>
        <p>{data?.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </foreignObject>
  );
};