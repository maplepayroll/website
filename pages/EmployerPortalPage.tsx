
import React, { useState, useRef, useEffect } from 'react';
import { PageType } from '../App';

interface EmployerPortalPageProps {
  onNavigate: (page: PageType, context?: string) => void;
}

interface StatusHistory {
  status: string;
  user: string;
  timestamp: string;
}

interface PayRun {
  id: number;
  period: string;
  payDate: string;
  amount: string;
  status: 'Started' | 'Approved' | 'Committed' | 'Completed';
  history: StatusHistory[];
}

interface Company {
  id: number;
  name: string;
  legalName: string;
  primaryAdminId?: number;
  assignedAdminIds: number[];
}

interface MapleEmployee {
  id: number;
  name: string;
  email: string;
  role: 'Administrator' | 'Superuser' | 'Owner';
}

const MAPLE_TEAM: MapleEmployee[] = [
  { id: 99, name: "Admin Master", email: "master@maplepayroll.ca", role: 'Superuser' },
  { id: 101, name: "Arshad Merali", email: "arshad@maplepayroll.ca", role: 'Administrator' },
  { id: 102, name: "Sarah Jenkins", email: "sarah.j@maplepayroll.ca", role: 'Administrator' },
  { id: 103, name: "Mike Chen", email: "mike.c@maplepayroll.ca", role: 'Administrator' }
];

const INITIAL_COMPANIES: Company[] = [
  { id: 1, name: "Acme Corp", legalName: "Acme Corp Inc.", primaryAdminId: 101, assignedAdminIds: [101, 102] },
  { id: 2, name: "Stark Industries", legalName: "Stark Global Solutions Ltd.", primaryAdminId: 102, assignedAdminIds: [102, 103] },
  { id: 3, name: "Wayne Enterprises", legalName: "Wayne Consolidated Holdings", primaryAdminId: 101, assignedAdminIds: [101] }
];

const EmployerPortalPage: React.FC<EmployerPortalPageProps> = ({ onNavigate }) => {
  const [currentUser, setCurrentUser] = useState<MapleEmployee>(MAPLE_TEAM[0]); 
  const [showUserMenu, setShowUserMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  const [companies, setCompanies] = useState<Company[]>(INITIAL_COMPANIES);
  
  const accessibleCompanies = currentUser.role === 'Superuser' 
    ? companies 
    : companies.filter(c => c.assignedAdminIds.includes(currentUser.id));

  const [activeCompany, setActiveCompany] = useState<Company>(accessibleCompanies[0] || companies[0]);
  const [activeTab, setActiveTab] = useState<'overview' | 'employees' | 'payroll' | 'billing' | 'settings' | 'maple-control'>('overview');
  
  const [selectedInvoice, setSelectedInvoice] = useState<any | null>(null);
  const [selectedPayRun, setSelectedPayRun] = useState<PayRun | null>(null);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [showManualInvoiceModal, setShowManualInvoiceModal] = useState(false);
  const [showAdminAssignModal, setShowAdminAssignModal] = useState<Company | null>(null);

  const isSuperuser = currentUser.role === 'Superuser';
  const isAdministrator = currentUser.role === 'Administrator';
  const isMapleEmployee = isSuperuser || isAdministrator;

  const handleSwitchUser = (user: MapleEmployee) => {
    setCurrentUser(user);
    setShowUserMenu(false);
    const newAccess = user.role === 'Superuser' 
      ? companies 
      : companies.filter(c => c.assignedAdminIds.includes(user.id));
    if (newAccess.length > 0) setActiveCompany(newAccess[0]);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [employees] = useState([
    { id: 1, name: "Sarah Jenkins", role: "Manager", status: "Active", dept: "Sales" },
    { id: 2, name: "Mike Chen", role: "Developer", status: "Active", dept: "Engineering" },
    { id: 3, name: "Jessica Wu", role: "Designer", status: "Active", dept: "Product" },
    { id: 4, name: "David Miller", role: "Analyst", status: "On Leave", dept: "Finance" },
    { id: 5, name: "Tom Wilson", role: "Support", status: "Active", dept: "Customer Success" },
  ]);

  const [invoices, setInvoices] = useState([
    { id: 101, number: "INV-2025-001", date: "Nov 01, 2025", period: "Oct 1-31, 2025", amount: "295.00", status: "Paid", items: [{description: "Professional Managed Plan (Base)", amount: "295.00"}] },
    { id: 102, number: "INV-2025-002", date: "Dec 01, 2025", period: "Nov 1-30, 2025", amount: "295.00", status: "Paid", items: [{description: "Professional Managed Plan (Base)", amount: "295.00"}] },
    { id: 103, number: "INV-2026-001", date: "Jan 01, 2026", period: "Dec 1-31, 2025", amount: "320.00", status: "Processing", items: [{description: "Professional Managed Plan (Base)", amount: "295.00"}, {description: "Year-End T4 Filing Adjustment", amount: "25.00"}] },
  ]);

  const recentPayRuns: PayRun[] = [
    { 
      id: 1, 
      period: "Jan 1 - Jan 15", 
      payDate: "Jan 15, 2026", 
      amount: "24,500.00", 
      status: 'Completed',
      history: [
        { status: 'Started', user: 'Sarah Smith', timestamp: 'Jan 10, 2026, 09:00 AM' },
        { status: 'Approved', user: 'Local Owner', timestamp: 'Jan 10, 2026, 11:30 AM' },
        { status: 'Committed', user: 'Arshad Merali', timestamp: 'Jan 11, 2026, 02:15 PM' },
        { status: 'Completed', user: 'System (Maple)', timestamp: 'Jan 15, 2026, 04:00 AM' }
      ]
    },
    { 
      id: 2, 
      period: "Jan 16 - Jan 31", 
      payDate: "Jan 31, 2026", 
      amount: "24,500.00", 
      status: 'Committed',
      history: [
        { status: 'Started', user: 'Arshad Merali', timestamp: 'Jan 24, 2026, 10:45 AM' },
        { status: 'Approved', user: 'Local Owner', timestamp: 'Jan 25, 2026, 08:30 AM' },
        { status: 'Committed', user: 'Arshad Merali', timestamp: 'Jan 25, 2026, 09:15 AM' }
      ]
    }
  ];

  const [portalUsers] = useState([
    { id: 1, name: "John Smith", email: "john@client.ca", role: "Owner", status: "Active", lastLogin: "Today, 9:00 AM" },
    { id: 2, name: "Emily Brown", email: "emily@client.ca", role: "Payroll Admin", status: "Active", lastLogin: "Yesterday, 4:30 PM" },
  ]);

  const [payrollAccounts] = useState([
    { id: 1, nickname: "Main Corporate Account", number: "12345 6789 RP0001", status: "Verified" },
    { id: 2, nickname: "Quebec Branch", number: "12345 6789 RP0002", status: "Verified" }
  ]);

  const handleManualInvoice = (e: React.FormEvent) => {
    e.preventDefault();
    const newInv = {
      id: Date.now(),
      number: `MAN-${Date.now().toString().slice(-4)}`,
      date: new Date().toLocaleDateString('en-CA', { month: 'short', day: '2-digit', year: 'numeric' }),
      period: "Special Service / Custom Audit",
      amount: "150.00",
      status: "Pending",
      items: [{ description: "Specialized Record Audit Fee", amount: "150.00" }]
    };
    setInvoices([newInv, ...invoices]);
    setShowManualInvoiceModal(false);
  };

  const updatePrimaryAdmin = (companyId: number, adminId: number) => {
    setCompanies(prev => prev.map(c => {
      if (c.id === companyId) {
        const newAssigned = Array.from(new Set([...c.assignedAdminIds, adminId]));
        return { ...c, primaryAdminId: adminId, assignedAdminIds: newAssigned };
      }
      return c;
    }));
    setShowAdminAssignModal(null);
  };

  const getStatusBadgeStyles = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-700';
      case 'Committed': return 'bg-indigo-100 text-indigo-700';
      case 'Approved': return 'bg-amber-100 text-amber-700';
      case 'Started': return 'bg-blue-100 text-blue-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const renderOverview = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 border border-slate-200 shadow-sm relative overflow-hidden group hover:border-red-200 transition-all">
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
            <p className="text-sm font-bold text-slate-700">New employee onboarding package sent to "Tom Wilson".</p>
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
      <div className="overflow-x-auto">
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
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Pay Period</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Pay Date</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Gross</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {recentPayRuns.map((run) => (
              <tr key={run.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-bold text-slate-900 text-sm">{run.period}</td>
                <td className="px-6 py-4 text-sm font-medium text-slate-600">{run.payDate}</td>
                <td className="px-6 py-4 text-sm font-medium text-slate-600">${run.amount}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-[10px] font-black uppercase tracking-widest rounded-sm ${getStatusBadgeStyles(run.status)}`}>
                    {run.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-4">
                    <button 
                      onClick={() => setSelectedPayRun(run)}
                      className="text-slate-400 hover:text-red-600 transition-colors flex items-center gap-2"
                    >
                      <span className="text-[10px] font-black uppercase tracking-widest underline">Audit Trail</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderBilling = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Billing & Invoices</h2>
        <div className="flex gap-4">
           {isSuperuser && (
             <button 
               onClick={() => setShowManualInvoiceModal(true)}
               className="px-6 py-3 bg-red-600 text-white text-xs font-black uppercase tracking-widest hover:bg-red-700 transition-all shadow-lg"
             >
               Create Manual Invoice
             </button>
           )}
        </div>
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
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Next Invoice: Nov 01, 2025</p>
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

        <div className={`p-8 shadow-lg relative overflow-hidden transition-all ${isMapleEmployee ? 'bg-slate-100 grayscale' : 'bg-slate-900 text-white'}`}>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Payment Method</p>
          {isMapleEmployee ? (
             <div className="flex items-center gap-4 text-slate-400">
                <div className="w-12 h-8 bg-slate-200 rounded-sm"></div>
                <div>
                   <p className="font-bold text-lg tracking-widest">•••• ••••</p>
                   <p className="text-[8px] font-black uppercase tracking-widest">ACCESS RESTRICTED</p>
                </div>
             </div>
          ) : (
            <div className="flex items-center gap-4">
              <div className="w-12 h-8 bg-white/10 rounded-sm border border-white/20"></div>
              <div>
                <p className="font-bold text-lg tracking-widest">•••• 4242</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Visa • Exp 12/28</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">Invoice History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Invoice #</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Date</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Amount</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-900 text-sm" onClick={() => setSelectedInvoice(inv)}>{inv.number}</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-600">{inv.date}</td>
                  <td className="px-6 py-4 text-sm font-black text-slate-900">${inv.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-[10px] font-black uppercase tracking-widest rounded-sm bg-green-100 text-green-700`}>
                      {inv.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button onClick={() => setSelectedInvoice(inv)} className="text-slate-400 hover:text-slate-900">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500 max-w-5xl">
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Company Profile</h2>
          {!isMapleEmployee && (
            <button className="px-6 py-3 bg-white border border-slate-200 text-slate-900 text-xs font-black uppercase tracking-widest hover:bg-slate-50 transition-all">
              Save Changes
            </button>
          )}
        </div>
        <div className="bg-white p-8 border border-slate-200 shadow-sm space-y-6">
           <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Legal Business Name</label>
              <input readOnly={isMapleEmployee} className={`w-full px-4 py-3 bg-white border border-slate-200 font-medium text-slate-900 focus:outline-none focus:border-red-600 ${isMapleEmployee ? 'opacity-60 cursor-not-allowed' : ''}`} value={activeCompany.legalName} />
           </div>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Portal Access & Users</h2>
          {!isMapleEmployee && (
             <button onClick={() => setShowInviteModal(true)} className="px-6 py-3 bg-slate-900 text-white text-xs font-black uppercase tracking-widest hover:bg-black transition-all shadow-lg">
               Invite New User
             </button>
          )}
        </div>
        <div className="bg-white border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">User</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Role</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {portalUsers.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-bold text-slate-900 text-sm">{user.name}</p>
                    <p className="text-xs text-slate-500">{user.email}</p>
                  </td>
                  <td className="px-6 py-4"><span className="text-xs font-bold bg-slate-100 px-2 py-1 rounded-sm uppercase">{user.role}</span></td>
                  <td className="px-6 py-4">
                     <button 
                      disabled={isMapleEmployee}
                      className={`text-xs font-bold uppercase tracking-wide transition-colors ${isMapleEmployee ? 'text-slate-200 cursor-not-allowed' : 'text-slate-400 hover:text-red-600'}`}
                    >
                      Revoke
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );

  const renderMapleControl = () => (
    <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
      <section>
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Maple Client Portfolio</h2>
            <p className="text-slate-500 text-sm font-medium">Global management of all clients and employee assignments.</p>
          </div>
          <button 
            onClick={() => onNavigate('audit-dashboard')}
            className="px-8 py-4 bg-red-600 text-white font-black uppercase tracking-widest text-xs hover:bg-red-700 transition-all shadow-xl"
          >
            Audit Intelligence Hub
          </button>
        </div>

        <div className="bg-white border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Client Name</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Primary Administrator</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Assigned Team</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {companies.map(company => (
                <tr key={company.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-bold text-slate-900 text-sm">{company.name}</p>
                    <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tight">{company.legalName}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                       <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-[8px] font-black">
                         {MAPLE_TEAM.find(a => a.id === company.primaryAdminId)?.name.split(' ').map(n => n[0]).join('')}
                       </div>
                       <span className="text-sm font-bold text-slate-700">
                         {MAPLE_TEAM.find(a => a.id === company.primaryAdminId)?.name || 'Unassigned'}
                       </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex -space-x-2">
                      {company.assignedAdminIds.map(id => (
                        <div key={id} title={MAPLE_TEAM.find(a => a.id === id)?.name} className="w-8 h-8 rounded-full border-2 border-white bg-slate-900 text-white flex items-center justify-center text-[8px] font-bold">
                           {MAPLE_TEAM.find(a => a.id === id)?.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button 
                      onClick={() => setShowAdminAssignModal(company)}
                      className="text-xs font-black text-red-600 uppercase tracking-widest hover:underline"
                    >
                      Manage Team
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans">
      <aside className="w-full md:w-64 bg-slate-900 text-white flex-shrink-0 flex flex-col">
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-red-600 flex items-center justify-center">
               <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M21.1 12.8c0 .1 0 .1-.1.2l-2.4 1.2 1 3-1.8-.8-1.5 2.3-1.3-3.2v-4l-1.3 1.7-1.2-1.7v4l-1.3 3.2-1.5-2.3-1.8.8 1-3-2.4-1.2c-.1-.1-.1-.1-.1-.2.1-.3.5-1.1 1-1.6L5 8.1l2.5.6L7.3 5l2.4 1.5 1.5-3.3 1.5 3.3 2.4-1.5-.2 3.7 2.5-.6-2.6 1.1c.5.5.9 1.3 1 1.6z M11.2 18.5h1.6V22h-1.6v-3.5z" />
               </svg>
            </div>
            <span className="font-black text-lg tracking-tighter uppercase">MAPLE<span className="text-red-600">HUB</span></span>
          </div>
          
          {isMapleEmployee && (
            <div className="mt-4 p-4 bg-red-600/20 border border-red-600/40 rounded-sm">
               <label className="block text-[8px] font-black text-red-500 uppercase tracking-widest mb-2">{isSuperuser ? 'Superuser Selector' : 'Assigned Clients'}</label>
               <select 
                 value={activeCompany.id}
                 onChange={(e) => setActiveCompany(companies.find(c => c.id === parseInt(e.target.value))!)}
                 className="w-full bg-slate-800 text-white text-xs font-bold border-none outline-none focus:ring-1 focus:ring-red-600 py-2 rounded-sm"
               >
                 {accessibleCompanies.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
               </select>
            </div>
          )}
        </div>
        
        <nav className="flex-grow p-4 space-y-2">
          {[
            { id: 'overview', label: 'Overview', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
            { id: 'payroll', label: 'Payroll History', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
            { id: 'employees', label: 'Employees', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
            { id: 'billing', label: 'Billing Center', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
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
          {isSuperuser && (
            <button 
              onClick={() => setActiveTab('maple-control')}
              className={`w-full flex items-center gap-4 px-4 py-3 text-sm font-bold uppercase tracking-wide transition-colors rounded-sm mt-8 border border-red-900/30 ${activeTab === 'maple-control' ? 'bg-red-600 text-white border-red-600' : 'bg-red-900/10 text-red-400 hover:text-white hover:bg-red-900'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Maple Control
            </button>
          )}
        </nav>
        
        <div className="p-6 border-t border-slate-800">
           <button onClick={() => onNavigate('home')} className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
             </svg>
             <span className="text-xs font-black uppercase tracking-widest">Logout</span>
           </button>
        </div>
      </aside>

      <main className="flex-grow p-8 lg:p-12 h-screen overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
                {activeTab === 'maple-control' ? 'Global Admin Hub' : 'Dashboard Overview'}
              </h1>
              {isSuperuser && (
                <span className="bg-red-600 text-white text-[10px] font-black uppercase px-2 py-1 tracking-widest">Superuser Mode</span>
              )}
            </div>
            <p className="text-slate-500 font-medium">
              {activeTab === 'maple-control' ? `Welcome, ${currentUser.name}` : `Viewing ${activeCompany.name} as ${currentUser.name}`}
            </p>
          </div>
          
          <div className="relative" ref={menuRef}>
            <button 
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold border-2 border-transparent hover:border-red-600 transition-all shadow-lg"
            >
              {currentUser.name.split(' ').map(n => n[0]).join('')}
            </button>
            
            {showUserMenu && (
              <div className="absolute right-0 mt-3 w-72 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden z-[110] animate-in fade-in zoom-in-95 duration-200">
                <div className="p-6 bg-slate-900 text-white">
                  <p className="font-black text-sm uppercase tracking-widest">{currentUser.name}</p>
                  <p className="text-xs text-slate-400 font-medium">{currentUser.email}</p>
                  <div className="mt-4 inline-flex items-center px-2 py-1 rounded-sm bg-red-600 text-white text-[8px] font-black uppercase tracking-widest">
                    {currentUser.role} Account
                  </div>
                </div>
                
                <div className="py-2">
                  {isMapleEmployee && (
                    <div className="px-6 py-3 border-t border-slate-100 bg-slate-50">
                      <p className="text-[8px] font-black text-red-500 uppercase tracking-[0.2em] mb-3">Persona Switcher</p>
                      <div className="space-y-1">
                        {MAPLE_TEAM.map(member => (
                          <button 
                            key={member.id}
                            onClick={() => handleSwitchUser(member)}
                            className={`w-full text-left text-[10px] font-black uppercase p-2 rounded-sm transition-all ${currentUser.id === member.id ? 'bg-red-600 text-white' : 'text-slate-500 hover:bg-white'}`}
                          >
                            {member.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <button 
                    onClick={() => onNavigate('home')}
                    className="w-full text-left px-6 py-4 border-t border-slate-100 text-xs font-black text-slate-400 hover:text-red-600 transition-colors uppercase tracking-widest"
                  >
                    Logout System
                  </button>
                </div>
              </div>
            )}
          </div>
        </header>

        {activeTab === 'maple-control' && isSuperuser && renderMapleControl()}
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'employees' && renderEmployees()}
        {activeTab === 'payroll' && renderPayroll()}
        {activeTab === 'billing' && renderBilling()}
        {activeTab === 'settings' && renderSettings()}
      </main>

      {/* Pay Run Audit Log Modal */}
      {selectedPayRun && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="bg-slate-900 p-8 flex justify-between items-center text-white">
              <div>
                <h3 className="font-black text-2xl uppercase tracking-tighter">Pay Run Audit Log</h3>
                <p className="text-red-500 text-xs font-black uppercase tracking-widest mt-1">Period: {selectedPayRun.period}</p>
              </div>
              <button onClick={() => setSelectedPayRun(null)} className="text-slate-400 hover:text-white transition-colors">✕</button>
            </div>
            <div className="p-10">
               <div className="relative border-l-2 border-slate-100 ml-4 space-y-10 py-4">
                  {selectedPayRun.history.map((entry, idx) => (
                    <div key={idx} className="relative pl-10">
                      <div className={`absolute -left-[11px] top-1 w-5 h-5 rounded-full border-4 border-white shadow-sm ${idx === selectedPayRun.history.length - 1 ? 'bg-red-600 animate-pulse' : 'bg-slate-300'}`}></div>
                      <div className="bg-slate-50 p-6 border border-slate-100 group hover:border-red-200 transition-all">
                        <div className="flex justify-between items-start mb-4">
                           <div>
                             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">New Status</p>
                             <span className={`px-2 py-1 text-[10px] font-black uppercase tracking-widest rounded-sm ${getStatusBadgeStyles(entry.status)}`}>
                               {entry.status}
                             </span>
                           </div>
                           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">{entry.timestamp}</p>
                        </div>
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">
                             {entry.user.split(' ').map(n => n[0]).join('')}
                           </div>
                           <p className="text-xs font-medium text-slate-500">{entry.user}</p>
                        </div>
                      </div>
                    </div>
                  ))}
               </div>
               <div className="mt-12 flex justify-end">
                  <button onClick={() => setSelectedPayRun(null)} className="px-10 py-4 bg-slate-900 text-white font-black uppercase tracking-widest text-xs">Close Log</button>
               </div>
            </div>
          </div>
        </div>
      )}

      {/* Invoice Detail Modal */}
      {selectedInvoice && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="bg-slate-900 p-6 flex justify-between items-center text-white">
              <div>
                <h3 className="font-black text-lg uppercase tracking-tight">Invoice Details</h3>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{selectedInvoice.number}</p>
              </div>
              <button onClick={() => setSelectedInvoice(null)} className="text-slate-400 hover:text-white transition-colors">✕</button>
            </div>
            <div className="p-8">
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
                <div className="text-right">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-1">Total Due</span>
                    <span className="text-2xl font-black text-slate-900">${selectedInvoice.amount}</span>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="flex-1 py-4 bg-slate-900 text-white font-black uppercase tracking-widest text-xs">Download PDF</button>
                <button onClick={() => setSelectedInvoice(null)} className="px-8 py-4 border border-slate-200 text-slate-600 font-black uppercase tracking-widest text-xs">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Manual Invoice Modal */}
      {showManualInvoiceModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="bg-red-600 p-6 flex justify-between items-center text-white">
              <h3 className="font-black text-lg uppercase tracking-tight">Generate Manual Invoice</h3>
              <button onClick={() => setShowManualInvoiceModal(false)} className="text-white/70 hover:text-white transition-colors">✕</button>
            </div>
            <form onSubmit={handleManualInvoice} className="p-8 space-y-6">
              <div className="bg-red-50 p-4 border-l-4 border-red-600 text-[10px] font-bold text-red-700 uppercase tracking-widest">
                Targeting Client: {activeCompany.name}
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Service Description</label>
                <input required className="w-full px-4 py-3 bg-white border border-slate-200 font-medium text-slate-900 focus:outline-none focus:border-red-600 transition-all" placeholder="e.g. Specialized Record Audit Fee" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Amount (CAD)</label>
                <input required type="number" className="w-full px-4 py-3 bg-white border border-slate-200 font-medium text-slate-900 focus:outline-none focus:border-red-600 transition-all" placeholder="0.00" />
              </div>
              <div className="pt-4 flex gap-4">
                <button type="submit" className="flex-1 py-4 bg-slate-900 text-white font-black uppercase tracking-widest hover:bg-black transition-all text-xs">Generate Now</button>
                <button type="button" onClick={() => setShowManualInvoiceModal(false)} className="px-8 py-4 border border-slate-200 text-slate-600 font-black uppercase tracking-widest text-xs">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployerPortalPage;
