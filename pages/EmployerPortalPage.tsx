
import React, { useState } from 'react';
import { PageType } from '../App';

interface EmployerPortalPageProps {
  onNavigate: (page: PageType, context?: string) => void;
}

const EmployerPortalPage: React.FC<EmployerPortalPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'employees' | 'payroll' | 'billing' | 'settings'>('overview');
  const [selectedInvoice, setSelectedInvoice] = useState<any | null>(null);
  const [showInviteModal, setShowInviteModal] = useState(false);

  // Mock Current User (Simulated Session)
  const currentUser = { id: 1, role: 'Owner' };

  // Mock Data
  const [companyDetails, setCompanyDetails] = useState({
    legalName: "Acme Corp Inc.",
    address: "123 Business Way, Suite 400",
    city: "Toronto",
    province: "ON",
    postalCode: "M5V 2T6",
    craNumber: "12345 6789 RP0001"
  });

  const [portalUsers, setPortalUsers] = useState([
    { id: 1, name: "John Doe", email: "john.d@acmecorp.ca", role: "Owner", status: "Active", lastLogin: "Today, 9:00 AM" },
    { id: 2, name: "Sarah Smith", email: "sarah.s@acmecorp.ca", role: "Payroll Admin", status: "Active", lastLogin: "Yesterday, 4:30 PM" },
    { id: 3, name: "Mike Ross", email: "m.ross@acmecorp.ca", role: "Viewer", status: "Pending", lastLogin: "Never" },
  ]);

  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'Payroll Admin' });

  const handleInviteUser = (e: React.FormEvent) => {
    e.preventDefault();
    setPortalUsers([...portalUsers, {
      id: Date.now(),
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      status: 'Pending',
      lastLogin: 'Never'
    }]);
    setShowInviteModal(false);
    setNewUser({ name: '', email: '', role: 'Payroll Admin' });
  };

  const employees = [
    { id: 1, name: "Sarah Jenkins", role: "Manager", status: "Active", dept: "Sales" },
    { id: 2, name: "Mike Chen", role: "Developer", status: "Active", dept: "Engineering" },
    { id: 3, name: "Jessica Wu", role: "Designer", status: "Active", dept: "Product" },
    { id: 4, name: "David Miller", role: "Analyst", status: "On Leave", dept: "Finance" },
    { id: 5, name: "Tom Wilson", role: "Support", status: "Active", dept: "Customer Success" },
  ];

  const invoices = [
    { id: 101, number: "INV-2025-001", date: "Nov 01, 2025", period: "Oct 1-31, 2025", amount: "295.00", status: "Paid", items: [{description: "Professional Managed Plan (Base)", amount: "295.00"}] },
    { id: 102, number: "INV-2025-002", date: "Dec 01, 2025", period: "Nov 1-30, 2025", amount: "295.00", status: "Paid", items: [{description: "Professional Managed Plan (Base)", amount: "295.00"}] },
    { id: 103, number: "INV-2026-001", date: "Jan 01, 2026", period: "Dec 1-31, 2025", amount: "320.00", status: "Processing", items: [{description: "Professional Managed Plan (Base)", amount: "295.00"}, {description: "Year-End T4 Filing Adjustment", amount: "25.00"}] },
  ];

  const recentPayRuns = [
    { id: 1, period: "Jan 1 - Jan 15", payDate: "Jan 15, 2026", amount: "24,500.00", status: "Completed" },
    { id: 2, period: "Jan 16 - Jan 31", payDate: "Jan 31, 2026", amount: "24,500.00", status: "Scheduled" },
  ];

  const renderOverview = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 border border-slate-200 shadow-sm">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Next Pay Run</p>
          <h3 className="text-2xl font-black text-slate-900">Jan 31, 2026</h3>
          <p className="text-sm font-medium text-slate-500 mt-1">Deadline: Jan 28, 5:00 PM</p>
          <button className="mt-4 w-full py-3 bg-red-600 text-white text-xs font-black uppercase tracking-widest hover:bg-red-700 transition-all">
            Run Payroll
          </button>
        </div>
        <div className="bg-white p-6 border border-slate-200 shadow-sm">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Active Employees</p>
          <h3 className="text-2xl font-black text-slate-900">{employees.filter(e => e.status === 'Active').length}</h3>
          <p className="text-sm font-medium text-slate-500 mt-1">Total Headcount: {employees.length}</p>
        </div>
        <div className="bg-white p-6 border border-slate-200 shadow-sm">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">YTD Taxes Remitted</p>
          <h3 className="text-2xl font-black text-slate-900">$12,450.00</h3>
          <p className="text-sm font-medium text-green-600 mt-1">✓ 100% Compliant</p>
        </div>
      </div>
      
      <div className="bg-white border border-slate-200 shadow-sm p-8">
        <h3 className="text-lg font-black text-slate-900 mb-6 uppercase tracking-tight">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-100">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <p className="text-sm font-bold text-slate-700">Payroll for Jan 15 period completed successfully.</p>
            <span className="text-xs text-slate-400 ml-auto">2 days ago</span>
          </div>
          <div className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-100">
             <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <p className="text-sm font-bold text-slate-700">New employee "Tom Wilson" onboarding initiated.</p>
            <span className="text-xs text-slate-400 ml-auto">5 days ago</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEmployees = () => (
    <div className="bg-white border border-slate-200 shadow-sm overflow-hidden animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center">
        <h2 className="text-lg font-black text-slate-900 uppercase tracking-tight">Team Directory</h2>
        <button className="px-6 py-2 bg-slate-900 text-white text-xs font-black uppercase tracking-widest hover:bg-black transition-all">
          Add Employee
        </button>
      </div>
      <table className="w-full text-left">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Name</th>
            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Role</th>
            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Department</th>
            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {employees.map((emp) => (
            <tr key={emp.id} className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4 font-bold text-slate-900 text-sm">{emp.name}</td>
              <td className="px-6 py-4 text-sm font-medium text-slate-600">{emp.role}</td>
              <td className="px-6 py-4 text-sm font-medium text-slate-600">{emp.dept}</td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 text-[10px] font-black uppercase tracking-widest rounded-sm ${emp.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                  {emp.status}
                </span>
              </td>
              <td className="px-6 py-4">
                <button className="text-red-600 font-bold text-xs uppercase tracking-widest hover:underline">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderPayroll = () => (
     <div className="bg-white border border-slate-200 shadow-sm overflow-hidden animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center">
        <h2 className="text-lg font-black text-slate-900 uppercase tracking-tight">Payroll History</h2>
        <button className="px-6 py-2 bg-slate-900 text-white text-xs font-black uppercase tracking-widest hover:bg-black transition-all">
          Run Off-Cycle Pay
        </button>
      </div>
      <table className="w-full text-left">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Pay Period</th>
            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Pay Date</th>
            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Gross</th>
            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Report</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {recentPayRuns.map((run) => (
            <tr key={run.id} className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4 font-bold text-slate-900 text-sm">{run.period}</td>
              <td className="px-6 py-4 text-sm font-medium text-slate-600">{run.payDate}</td>
              <td className="px-6 py-4 text-sm font-medium text-slate-600">${run.amount}</td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 text-[10px] font-black uppercase tracking-widest rounded-sm ${run.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                  {run.status}
                </span>
              </td>
              <td className="px-6 py-4">
                <button className="text-slate-400 hover:text-slate-900">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderBilling = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Billing & Invoices</h2>
        <button className="px-6 py-3 bg-white border border-slate-200 text-slate-900 text-xs font-black uppercase tracking-widest hover:bg-slate-50 transition-all">
          Update Payment Method
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Current Plan</p>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest">Active</span>
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-1">Professional Managed</h3>
            <p className="text-sm font-bold text-slate-500 mb-4">$295.00 / month</p>
          </div>
          
          <div className="pt-6 border-t border-slate-50 mt-auto">
            <div className="flex justify-between items-center mb-1">
               <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Next Invoice</span>
               <span className="text-sm font-black text-slate-900">Nov 01, 2025</span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium">Includes dedicated specialist support.</p>
          </div>
        </div>

        <div className="bg-white p-8 border border-slate-200 shadow-sm">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Active Employees</p>
          <h3 className="text-3xl font-black text-slate-900 mb-1">{employees.length}</h3>
          <p className="text-sm font-bold text-slate-500">People on Payroll</p>
          <div className="mt-4 pt-4 border-t border-slate-50 flex justify-between items-center">
            <p className="text-xs font-medium text-slate-600">Est. Variable Cost</p>
            <p className="text-xs font-black text-slate-900">${(employees.length * 10).toFixed(2)}/mo</p>
          </div>
        </div>

        <div className="bg-slate-900 p-8 text-white shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-red-600 rounded-full blur-2xl -mr-10 -mt-10 opacity-30"></div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Payment Method</p>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-8 bg-white/10 rounded-sm border border-white/20"></div>
            <div>
              <p className="font-bold text-lg tracking-widest">•••• 4242</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase">Visa • Exp 12/28</p>
            </div>
          </div>
          <p className="text-xs font-medium text-slate-400">Auto-pay enabled</p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">Invoice History</h3>
          <button className="text-xs font-bold text-red-600 hover:text-red-700">Download All CSV</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Invoice #</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Date</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Billing Period</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Amount</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-slate-50 transition-colors cursor-pointer group" onClick={() => setSelectedInvoice(inv)}>
                  <td className="px-6 py-4 font-bold text-slate-900 text-sm group-hover:text-red-600 transition-colors">{inv.number}</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-600">{inv.date}</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-600">{inv.period}</td>
                  <td className="px-6 py-4 text-sm font-black text-slate-900">${inv.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-[10px] font-black uppercase tracking-widest rounded-sm ${
                      inv.status === 'Paid' ? 'bg-green-100 text-green-700' : 
                      inv.status === 'Processing' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {inv.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-slate-400 hover:text-slate-900 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedInvoice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="bg-slate-900 p-6 flex justify-between items-center text-white">
              <div>
                <h3 className="font-black text-lg uppercase tracking-tight">Invoice Details</h3>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{selectedInvoice.number}</p>
              </div>
              <button onClick={() => setSelectedInvoice(null)} className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-8">
              <div className="flex justify-between mb-8">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Billed To</p>
                  <p className="font-bold text-slate-900">{companyDetails.legalName}</p>
                  <p className="text-xs text-slate-500">{companyDetails.address}</p>
                  <p className="text-xs text-slate-500">{companyDetails.city}, {companyDetails.province} {companyDetails.postalCode}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Status</p>
                  <span className="bg-green-100 text-green-700 px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-sm">
                    {selectedInvoice.status}
                  </span>
                  <p className="text-xs font-bold text-slate-500 mt-2">{selectedInvoice.date}</p>
                </div>
              </div>

              <table className="w-full mb-8">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                    <th className="py-3 px-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Description</th>
                    <th className="py-3 px-4 text-right text-[10px] font-black text-slate-400 uppercase tracking-widest">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {selectedInvoice.items.map((item: any, i: number) => (
                    <tr key={i}>
                      <td className="py-4 px-4 text-sm font-medium text-slate-700">{item.description}</td>
                      <td className="py-4 px-4 text-right text-sm font-bold text-slate-900">${item.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="flex justify-end border-t border-slate-100 pt-6 mb-8">
                <div className="w-48">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Total</span>
                    <span className="text-xl font-black text-slate-900">${selectedInvoice.amount}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => alert(`Downloading Invoice ${selectedInvoice.number}...`)}
                  className="flex-1 py-4 bg-slate-900 text-white font-black uppercase tracking-widest hover:bg-black transition-all text-xs"
                >
                  Download PDF Receipt
                </button>
                <button 
                  onClick={() => setSelectedInvoice(null)}
                  className="px-8 py-4 border border-slate-200 text-slate-600 font-black uppercase tracking-widest hover:bg-slate-50 transition-all text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500 max-w-5xl">
      
      {/* Company Profile Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Company Profile</h2>
            <p className="text-slate-500 text-sm font-medium">Manage your legal entity details and CRA information.</p>
          </div>
          <button className="px-6 py-3 bg-white border border-slate-200 text-slate-900 text-xs font-black uppercase tracking-widest hover:bg-slate-50 transition-all">
            Save Changes
          </button>
        </div>

        <div className="bg-white p-8 border border-slate-200 shadow-sm">
           <div className="grid md:grid-cols-2 gap-8">
              <div className="md:col-span-2">
                 <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Legal Business Name</label>
                 <input 
                   className="w-full px-4 py-3 bg-white border border-slate-200 font-medium text-slate-900 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
                   value={companyDetails.legalName}
                   onChange={(e) => setCompanyDetails({...companyDetails, legalName: e.target.value})}
                 />
              </div>
               <div>
                 <label className="block text-xs font-bold text-slate-400 uppercase mb-2">CRA Payroll Account (RP)</label>
                 <input 
                   className="w-full px-4 py-3 bg-white border border-slate-200 font-medium text-slate-900 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
                   value={companyDetails.craNumber}
                   onChange={(e) => setCompanyDetails({...companyDetails, craNumber: e.target.value})}
                 />
              </div>
               <div>
                 <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Primary Address</label>
                 <input 
                   className="w-full px-4 py-3 bg-white border border-slate-200 font-medium text-slate-900 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
                   value={companyDetails.address}
                   onChange={(e) => setCompanyDetails({...companyDetails, address: e.target.value})}
                 />
              </div>
           </div>
        </div>
      </section>

      {/* Portal Users Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Portal Access & Users</h2>
            <p className="text-slate-500 text-sm font-medium">Manage administrators and managers who can access this dashboard.</p>
          </div>
          <button 
            onClick={() => setShowInviteModal(true)}
            className="px-6 py-3 bg-slate-900 text-white text-xs font-black uppercase tracking-widest hover:bg-black transition-all shadow-lg"
          >
            Invite New User
          </button>
        </div>

        <div className="bg-white border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">User</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Role</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Last Login</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {portalUsers.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-bold text-slate-900 text-sm">{user.name}</p>
                    <p className="text-xs text-slate-500">{user.email}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2 py-1 rounded-sm uppercase tracking-wide">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-[10px] font-black uppercase tracking-widest rounded-sm ${
                      user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs font-medium text-slate-500">
                    {user.lastLogin}
                  </td>
                  <td className="px-6 py-4">
                    {/* Access Logic: 
                        1. Only current owner can see revoke button.
                        2. You cannot revoke yourself (if you are the owner, you can't revoke yourself).
                        3. Other non-owner users see "Protected" or nothing.
                    */}
                    {currentUser.role === 'Owner' && user.id !== currentUser.id ? (
                      <button 
                        onClick={() => {
                          if (window.confirm(`Are you sure you want to revoke access for ${user.name}?`)) {
                            setPortalUsers(portalUsers.filter(u => u.id !== user.id));
                          }
                        }}
                        className="text-slate-400 hover:text-red-600 transition-colors font-bold text-xs uppercase tracking-wide"
                      >
                        Revoke
                      </button>
                    ) : (
                      <span className="text-slate-200 font-bold text-[10px] uppercase tracking-widest cursor-not-allowed">
                        {user.id === currentUser.id ? 'Active Session' : 'Protected'}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Invite Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="bg-slate-900 p-6 flex justify-between items-center text-white">
              <h3 className="font-black text-lg uppercase tracking-tight">Invite Portal User</h3>
              <button onClick={() => setShowInviteModal(false)} className="text-slate-400 hover:text-white transition-colors">✕</button>
            </div>
            <form onSubmit={handleInviteUser} className="p-8 space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Full Name</label>
                <input 
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-200 font-medium text-slate-900 focus:outline-none focus:border-red-600 transition-all"
                  value={newUser.name}
                  onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Email Address</label>
                <input 
                  required
                  type="email"
                  className="w-full px-4 py-3 bg-white border border-slate-200 font-medium text-slate-900 focus:outline-none focus:border-red-600 transition-all"
                  value={newUser.email}
                  onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                  placeholder="jane@company.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Access Role</label>
                <select 
                  className="w-full px-4 py-3 bg-white border border-slate-200 font-medium text-slate-900 focus:outline-none focus:border-red-600 transition-all"
                  value={newUser.role}
                  onChange={(e) => setNewUser({...newUser, role: e.target.value})}
                >
                  <option value="Owner">Owner (Full Access)</option>
                  <option value="Payroll Admin">Payroll Admin (Run Payroll & Manage Staff)</option>
                  <option value="Viewer">Viewer (Read Only Reports)</option>
                </select>
              </div>
              <div className="pt-4 flex gap-4">
                <button type="submit" className="flex-1 py-4 bg-red-600 text-white font-black uppercase tracking-widest hover:bg-red-700 transition-all text-xs">Send Invitation</button>
                <button type="button" onClick={() => setShowInviteModal(false)} className="px-8 py-4 border border-slate-200 text-slate-600 font-black uppercase tracking-widest hover:bg-slate-50 transition-all text-xs">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-slate-900 text-white flex-shrink-0 flex flex-col">
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-red-600 flex items-center justify-center shadow-lg shadow-red-900/20">
               <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M23.3,11.5L20,10.7L20.4,7L17,8L15,4L13,8L12,1L11,8L9,4L7,8L3.6,7L4,10.7L0.7,11.5L3,14L0,15L5,16L4.5,21L8,19L11,23L13,19L16.5,21L16,16L21,15L18,14L23.3,11.5Z" />
               </svg>
            </div>
            <span className="font-black text-lg tracking-tighter uppercase">MAPLE<span className="text-red-600">HUB</span></span>
          </div>
          <div className="bg-slate-800 p-4 rounded-sm">
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Company</p>
             <p className="font-bold text-sm truncate">{companyDetails.legalName}</p>
          </div>
        </div>
        
        <nav className="flex-grow p-4 space-y-2">
          {[
            { id: 'overview', label: 'Overview', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
            { id: 'payroll', label: 'Payroll Runs', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
            { id: 'employees', label: 'Employees', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
            { id: 'billing', label: 'Billing & Invoices', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
            { id: 'settings', label: 'Settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
          ].map((item) => (
             <button 
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`w-full flex items-center gap-4 px-4 py-3 text-sm font-bold uppercase tracking-wide transition-colors rounded-sm ${activeTab === item.id ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              {item.label}
            </button>
          ))}
        </nav>
        
        <div className="p-6 border-t border-slate-800">
           <button 
             onClick={() => onNavigate('home')}
             className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
           >
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
             </svg>
             <span className="text-xs font-black uppercase tracking-widest">Logout</span>
           </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow p-8 lg:p-12 h-screen overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
              {activeTab === 'overview' && 'Dashboard Overview'}
              {activeTab === 'employees' && 'Employee Management'}
              {activeTab === 'payroll' && 'Payroll Center'}
              {activeTab === 'billing' && 'Billing & Subscription'}
              {activeTab === 'settings' && 'Account Settings'}
            </h1>
            <p className="text-slate-500 font-medium">Welcome back, Administrator.</p>
          </div>
          <div className="flex items-center gap-4">
             <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-red-600 transition-colors">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
               </svg>
             </button>
             <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">JD</div>
          </div>
        </header>

        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'employees' && renderEmployees()}
        {activeTab === 'payroll' && renderPayroll()}
        {activeTab === 'billing' && renderBilling()}
        {activeTab === 'settings' && renderSettings()}
      </main>
    </div>
  );
};

export default EmployerPortalPage;
