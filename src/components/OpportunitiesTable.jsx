import React from "react";

function OpportunitiesTable({ opportunities }) {
  if (opportunities.length === 0) return null;

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-xl font-bold mb-4">Oportunidades</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">Nome</th>
            <th className="p-2 border">Stage</th>
            <th className="p-2 border">Empresa</th>
          </tr>
        </thead>
        <tbody>
          {opportunities.map((opp) => (
            <tr key={opp.id} className="hover:bg-blue-50">
              <td className="p-2 border">{opp.name}</td>
              <td className="p-2 border">{opp.stage}</td>
              <td className="p-2 border">{opp.accountName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OpportunitiesTable;
