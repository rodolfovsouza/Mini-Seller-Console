import { useState, useEffect } from "react";
import leadsData from "./assets/leads.json";
import LeadsList from "./components/LeadsList";
import LeadDetailPanel from "./components/LeadDetailPanel";
import OpportunitiesTable from "./components/OpportunitiesTable";

function App() {
  const [leads, setLeads] = useState([]);
  const [selectedLead, setSelectedLead] = useState(null);
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    // Simula carregamento
    setTimeout(() => {
      setLeads(leadsData);
    }, 1000);
  }, []);

  const convertToOpportunity = (lead) => {
    const newOpportunity = {
      id: Date.now(),
      name: lead.name,
      stage: "Prospecting",
      amount: null,
      accountName: lead.company
    };
    setOpportunities([...opportunities, newOpportunity]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mini Seller Console</h1>
      
      <LeadsList 
        leads={leads} 
        onSelectLead={setSelectedLead} 
      />

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