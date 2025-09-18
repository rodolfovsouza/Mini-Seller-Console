import React, { useState, useEffect } from "react";
import leadsData from "./assets/leads.json";
import LeadsList from "./components/LeadsList.jsx";
import LeadDetailPanel from "./components/LeadDetailPanel.jsx";
import OpportunitiesTable from "./components/OpportunitiesTable.jsx";

function App() {
  const [leads, setLeads] = useState([]);
  const [selectedLead, setSelectedLead] = useState(null);
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    // Simula carregamento dos leads
    setTimeout(() => {
      setLeads(leadsData);
    }, 500);
  }, []);

  const convertToOpportunity = (lead) => {
    const newOpportunity = {
      id: Date.now(),
      name: lead.name,
      stage: "Prospecting",
      amount: null,
      accountName: lead.company,
    };
    setOpportunities([...opportunities, newOpportunity]);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Mini Seller Console
      </h1>

      <LeadsList leads={leads} onSelectLead={setSelectedLead} />

      {selectedLead && (
        <LeadDetailPanel
          lead={selectedLead}
          onClose={() => setSelectedLead(null)}
          onConvert={convertToOpportunity}
        />
      )}

      <OpportunitiesTable opportunities={opportunities} />
    </div>
  );
}

export default App;
