// import { Borough } from "./Borough.tsx";
// import { useFloodData } from "../../hooks/useFloodData";

// export const LondonMap = () => {
//   const floodData = useFloodData();

//   return (
//     <svg viewBox="0 0 500 500">
//       {Object.keys(floodData).map((borough) => (
//         <Borough
//           key={borough}
//           name={borough}
//           data={floodData[borough]}
//         />
//       ))}
//     </svg>
//   );
// };

import { useFloodData } from "../../hooks/useFloodData";

export const LondonMap = () => {
  const { data, loading } = useFloodData();

  if (loading) return <p>Loading...</p>;

  return (
    <svg viewBox="0 0 500 500">
      {Object.entries(data).map(([borough, info]: any) => (
        <g key={borough}>
          <text x={50} y={50}>{borough}</text>
        </g>
      ))}
    </svg>
  );
};