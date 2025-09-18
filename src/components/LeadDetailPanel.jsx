import React from "react";

function LeadDetailPanel({ lead, onClose, onConvert }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Detalhes do Lead</h2>
        <button
          onClick={onClose}
          className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Fechar
        </button>
      </div>
      <p><strong>Nome:</strong> {lead.name}</p>
      <p><strong>Empresa:</strong> {lead.company}</p>
      <p><strong>Email:</strong> {lead.email}</p>
      <p><strong>Status:</strong> {lead.status}</p>

      <button
        onClick={() => onConvert(lead)}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Converter em Oportunidade
      </button>
    </div>
  );
}

export default LeadDetailPanel;
