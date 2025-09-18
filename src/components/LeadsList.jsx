import React, { useState } from "react";

function LeadsList({ leads, onSelectLead }) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortDesc, setSortDesc] = useState(true);

  // 🔎 Filtra por busca
  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.company.toLowerCase().includes(search.toLowerCase())
  );

  // 🎯 Filtra por status
  const statusFilteredLeads =
    statusFilter === "All"
      ? filteredLeads
      : filteredLeads.filter((lead) => lead.status === statusFilter);

  // 🔽 Ordena por score
  const sortedLeads = [...statusFilteredLeads].sort((a, b) =>
    sortDesc ? b.score - a.score : a.score - b.score
  );

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      {/* Controles */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <input
          type="text"
          placeholder="Buscar por nome ou empresa..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded p-2 w-full sm:w-1/3"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border rounded p-2"
        >
          <option value="All">Todos os Status</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Qualified">Qualified</option>
        </select>

        <button
          onClick={() => setSortDesc(!sortDesc)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Ordenar Score {sortDesc ? "↓" : "↑"}
        </button>
      </div>

      {/* Lista de Leads */}
      {sortedLeads.length === 0 ? (
        <p className="text-gray-500">Nenhum lead encontrado.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">Nome</th>
              <th className="p-2 border">Empresa</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Score</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {sortedLeads.map((lead) => (
              <tr
                key={lead.id}
                className="hover:bg-blue-50 cursor-pointer"
                onClick={() => onSelectLead(lead)}
              >
                <td className="p-2 border">{lead.name}</td>
                <td className="p-2 border">{lead.company}</td>
                <td className="p-2 border">{lead.email}</td>
                <td className="p-2 border">{lead.score}</td>
                <td className="p-2 border">{lead.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default LeadsList;
