
import React, { useState, useEffect } from 'react';
import { PageType } from '../App';

interface AuditManagementPageProps {
  onNavigate: (page: PageType) => void;
}

const STORAGE_KEY = 'maple_operational_audits';

const AuditManagementPage: React.FC<AuditManagementPageProps> = ({ onNavigate }) => {
  const [audits, setAudits] = useState<any[]>([]);
  const [selectedAuditIds, setSelectedAuditIds] = useState<number[]>([]);
  const [activeView, setActiveView] = useState<'list' | 'compare'>('list');

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    setAudits(data);
  }, []);

  const handleToggleSelect = (id: number) => {
    setSelectedAuditIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const deleteAudit = (id: number) => {
    if (!confirm('Are you sure you want to permanently delete this audit record?')) return;
    const filtered = audits.filter(a => a.id !== id);
    setAudits(filtered);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  };

  const clearAll = () => {
    if (!confirm('DANGER: Clear all stored audit data?')) return;
    setAudits([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  const compareData = audits.filter(a => selectedAuditIds.includes(a.id));

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <header className="bg-slate-900 text-white py-12 border-b-4 border-red-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <button 
                onClick={() => onNavigate('employer-portal')} 
                className="text-xs font-black text-red-500 uppercase tracking-widest hover:text-white transition-colors"
              >
                ← Back to Portal
              </button>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none">
              Audit <br/><span className="text-red-600">Intelligence.</span>
            </h1>
            <p className="text-slate-400 font-medium mt-4">Review and compare submitted operational architectures.</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={clearAll}
              className="px-6 py-3 bg-white/5 border border-white/10 text-white text-xs font-black uppercase tracking-widest hover:bg-red-600 transition-all"
            >
              Clear DB
            </button>
            <button 
              disabled={selectedAuditIds.length < 2}
              onClick={() => setActiveView(activeView === 'compare' ? 'list' : 'compare')}
              className={`px-8 py-4 font-black uppercase tracking-widest text-sm transition-all shadow-xl ${selectedAuditIds.length >= 2 ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-slate-800 text-slate-500 cursor-not-allowed'}`}
            >
              {activeView === 'compare' ? 'Back to List' : `Compare Selected (${selectedAuditIds.length})`}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16">
        {activeView === 'list' ? (
          <div className="bg-white border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 w-12"></th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Submitted</th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Company</th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Staff</th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Software</th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Admin Hrs</th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {audits.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-6 py-20 text-center text-slate-400 font-bold uppercase tracking-widest">No audit data available</td>
                    </tr>
                  ) : (
                    audits.map((a) => (
                      <tr key={a.id} className={`hover:bg-slate-50 transition-colors group ${selectedAuditIds.includes(a.id) ? 'bg-red-50/30' : ''}`}>
                        <td className="px-6 py-4">
                          <input 
                            type="checkbox" 
                            checked={selectedAuditIds.includes(a.id)}
                            onChange={() => handleToggleSelect(a.id)}
                            className="w-4 h-4 accent-red-600 cursor-pointer"
                          />
                        </td>
                        <td className="px-6 py-4 text-xs font-bold text-slate-500">{new Date(a.submittedAt).toLocaleDateString()}</td>
                        <td className="px-6 py-4">
                          <p className="font-black text-slate-900 text-sm uppercase">{a.company}</p>
                          <p className="text-[10px] text-slate-400 font-bold tracking-tight">{a.name} ({a.title})</p>
                        </td>
                        <td className="px-6 py-4 text-sm font-black text-slate-700">{a.totalEmployees}</td>
                        <td className="px-6 py-4 text-sm font-bold text-red-600 uppercase tracking-tighter">{a.software}</td>
                        <td className="px-6 py-4 text-sm font-black text-slate-900">{a.processingTime}h</td>
                        <td className="px-6 py-4 text-right">
                          <button 
                            onClick={() => deleteAudit(a.id)}
                            className="text-slate-300 hover:text-red-600 transition-colors"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="animate-in zoom-in-95 duration-500">
            <div className="grid md:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
               {compareData.map((a, idx) => (
                 <div key={a.id} className="bg-white p-12 lg:p-20">
                    <div className="inline-flex items-center px-3 py-1 bg-slate-900 text-white text-[8px] font-black uppercase tracking-widest mb-6">
                      Subject {idx + 1}
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-2">{a.company}</h2>
                    <p className="text-sm font-bold text-red-600 uppercase tracking-widest mb-12">{a.software} Infrastructure</p>
                    
                    <div className="space-y-10">
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Workforce Pulse</p>
                        <div className="grid grid-cols-2 gap-4">
                           <div className="bg-slate-50 p-4 border border-slate-100">
                              <p className="text-[9px] font-bold text-slate-400 uppercase">Headcount</p>
                              <p className="text-xl font-black text-slate-900">{a.totalEmployees}</p>
                           </div>
                           <div className="bg-slate-50 p-4 border border-slate-100">
                              <p className="text-[9px] font-bold text-slate-400 uppercase">Cycle Time</p>
                              <p className="text-xl font-black text-slate-900">{a.processingTime} Hours</p>
                           </div>
                        </div>
                      </div>

                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Manuality Audit</p>
                        <div className="space-y-2">
                           <div className="flex justify-between text-xs font-bold border-b border-slate-100 pb-2">
                              <span className="text-slate-500">Remittances</span>
                              <span className="text-slate-900">{a.remittanceEffort}</span>
                           </div>
                           <div className="flex justify-between text-xs font-bold border-b border-slate-100 pb-2">
                              <span className="text-slate-500">WSIB / WCB</span>
                              <span className="text-slate-900">{a.wsibEffort}</span>
                           </div>
                           <div className="flex justify-between text-xs font-bold border-b border-slate-100 pb-2">
                              <span className="text-slate-500">Benefits Sync</span>
                              <span className="text-slate-900">{a.benefitsEffort}</span>
                           </div>
                        </div>
                      </div>

                      <div>
                        <p className="text-[10px] font-black text-red-600 uppercase tracking-widest mb-4">Frustration Brief</p>
                        <div className="bg-red-50 p-6 border-l-4 border-red-600 italic text-sm font-medium text-slate-700 leading-relaxed">
                          "{a.dislikes || 'No pain points reported.'}"
                        </div>
                      </div>

                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Strategic Capacity</p>
                        <p className="text-xs font-bold text-slate-500 uppercase leading-relaxed">
                           What they do instead of payroll: <br/>
                           <span className="text-slate-900 normal-case font-medium">{a.otherResponsibilities || 'Not specified.'}</span>
                        </p>
                      </div>
                    </div>
                 </div>
               ))}
            </div>
            <div className="mt-12 text-center">
               <button 
                onClick={() => setActiveView('list')}
                className="px-12 py-5 bg-slate-900 text-white font-black uppercase tracking-widest text-sm hover:bg-black transition-all"
               >
                 Exit Comparison Mode
               </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AuditManagementPage;
