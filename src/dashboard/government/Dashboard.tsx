
import React from 'react';
import { DashboardLayout } from '@/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, PhoneCall, Layers, ListChecks, Bell, MapPin, ArrowRight, Users } from 'lucide-react';

// Mock data for demonstration
const complaintData = [
  { id: 'CMP-2391', farmer: 'Ravi Kumar', type: 'Soil Quality', status: 'New', date: '15 June 2025' },
  { id: 'CMP-2390', farmer: 'Mohan Singh', type: 'Water Scarcity', status: 'In Progress', date: '12 June 2025' },
  { id: 'CMP-2389', farmer: 'Anita Patel', type: 'Pest Control', status: 'Resolved', date: '8 June 2025' },
];

const callRequestData = [
  { id: 'REQ-1254', farmer: 'Sunil Verma', reason: 'Crop Disease Advisory', status: 'Scheduled', date: '16 June 2025', time: '10:00 AM' },
  { id: 'REQ-1253', farmer: 'Geeta Sharma', reason: 'Subsidy Information', status: 'Pending', date: 'Pending', time: 'Pending' },
  { id: 'REQ-1252', farmer: 'Rajesh Kumar', reason: 'Soil Test Results', status: 'Completed', date: '12 June 2025', time: '2:30 PM' },
];

const soilHealthData = {
  regionsAnalyzed: 12,
  samplesCollected: 348,
  healthStatus: {
    good: '45%',
    moderate: '38%',
    poor: '17%'
  },
  regions: [
    { name: 'Rajpura District', status: 'Good', ph: '6.8', organic: '2.1%', nutrientIndex: 'High' },
    { name: 'Meerut Area', status: 'Moderate', ph: '7.2', organic: '1.4%', nutrientIndex: 'Medium' },
    { name: 'Bahadurgarh', status: 'Poor', ph: '8.1', organic: '0.8%', nutrientIndex: 'Low' },
  ]
};

const schemeData = {
  active: 8,
  beneficiaries: 12450,
  fundsDisbursed: '₹2.4 Crores',
  schemes: [
    { name: 'PM-KISAN', beneficiaries: 8240, fundsDisbursed: '₹1.65 Crores', status: 'On Track' },
    { name: 'Soil Health Card', beneficiaries: 3120, fundsDisbursed: '₹42 Lakhs', status: 'Delayed' },
    { name: 'Pradhan Mantri Fasal Bima Yojana', beneficiaries: 1090, fundsDisbursed: '₹33 Lakhs', status: 'On Track' },
  ]
};

const policyData = [
  { title: 'New Fertilizer Subsidy Structure', date: '10 June 2025', status: 'Published' },
  { title: 'Water Conservation Guidelines', date: '5 June 2025', status: 'Draft' },
  { title: 'Organic Farming Incentives', date: '1 June 2025', status: 'Under Review' },
];

const inspectionData = [
  { location: 'Rajpura Village Farms', date: '18 June 2025', status: 'Scheduled', officer: 'Vikram Singh' },
  { location: 'Meerut Agricultural Cooperative', date: '16 June 2025', status: 'Scheduled', officer: 'Anjali Sharma' },
  { location: 'Bahadurgarh Wheat Fields', date: '12 June 2025', status: 'Completed', officer: 'Rajesh Kumar' },
];

const menuItems = [
  { icon: MessageSquare, title: 'Complaints', description: 'Manage farmer complaints' },
  { icon: PhoneCall, title: 'Call Requests', description: 'Handle assistance calls' },
  { icon: Layers, title: 'Soil Health', description: 'Regional soil analysis' },
  { icon: ListChecks, title: 'Scheme Tracking', description: 'Monitor implementations' },
  { icon: Bell, title: 'Policy Updates', description: 'Agricultural reforms' },
  { icon: MapPin, title: 'Field Inspection', description: 'Schedule and log visits' },
];

const GovernmentDashboard = () => {
  return (
    <DashboardLayout type="government">
      <div className="space-y-8">
        {/* Header Section */}
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-dashboard-government mb-2">Government Dashboard</h1>
          <p className="text-gray-600">Welcome back, Officer Singh! Here's the agricultural overview for your region.</p>
        </section>

        {/* Key Metrics Overview */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-purple-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="p-3 rounded-full bg-white">
                  <MessageSquare className="h-6 w-6 text-dashboard-government" />
                </div>
                <div className="text-3xl font-bold text-dashboard-government">{complaintData.length}</div>
              </div>
              <h3 className="font-semibold">Open Complaints</h3>
              <p className="text-sm text-gray-600">From farmers requiring assistance</p>
            </CardContent>
          </Card>

          <Card className="bg-purple-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="p-3 rounded-full bg-white">
                  <Users className="h-6 w-6 text-dashboard-government" />
                </div>
                <div className="text-3xl font-bold text-dashboard-government">{schemeData.beneficiaries}</div>
              </div>
              <h3 className="font-semibold">Scheme Beneficiaries</h3>
              <p className="text-sm text-gray-600">Farmers receiving government aid</p>
            </CardContent>
          </Card>

          <Card className="bg-purple-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="p-3 rounded-full bg-white">
                  <MapPin className="h-6 w-6 text-dashboard-government" />
                </div>
                <div className="text-3xl font-bold text-dashboard-government">{soilHealthData.regionsAnalyzed}</div>
              </div>
              <h3 className="font-semibold">Regions Analyzed</h3>
              <p className="text-sm text-gray-600">Soil health assessment complete</p>
            </CardContent>
          </Card>
        </section>

        {/* Complaints and Call Requests */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-dashboard-government" />
                Farmer Complaints
              </CardTitle>
              <CardDescription>Recent issues requiring attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {complaintData.map((complaint, index) => (
                  <div key={index} className="p-3 bg-purple-50 rounded-lg">
                    <div className="flex justify-between items-center mb-1">
                      <div className="font-medium">{complaint.id}</div>
                      <div className={`text-sm px-2 py-1 rounded-full ${complaint.status === 'New' ? 'bg-red-100 text-red-700' :
                        complaint.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                        {complaint.status}
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>{complaint.farmer}</span>
                      <span className="text-gray-500">{complaint.type} • {complaint.date}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                View All Complaints <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center gap-2">
                <PhoneCall className="h-5 w-5 text-dashboard-government" />
                Call Requests
              </CardTitle>
              <CardDescription>Farmers requesting assistance calls</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {callRequestData.map((request, index) => (
                  <div key={index} className="p-3 bg-purple-50 rounded-lg">
                    <div className="flex justify-between items-center mb-1">
                      <div className="font-medium">{request.id}</div>
                      <div className={`text-sm px-2 py-1 rounded-full ${request.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                        request.status === 'Scheduled' ? 'bg-blue-100 text-blue-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                        {request.status}
                      </div>
                    </div>
                    <div className="text-sm mb-1">{request.farmer} • {request.reason}</div>
                    <div className="text-xs text-gray-500">
                      {request.status !== 'Pending' ? `${request.date} at ${request.time}` : 'Time not scheduled'}
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                Manage Call Schedule <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Soil Health and Scheme Tracking */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center gap-2">
                <Layers className="h-5 w-5 text-dashboard-government" />
                Soil Health Analysis
              </CardTitle>
              <CardDescription>Regional soil quality assessment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="text-center p-2 bg-purple-50 rounded-lg">
                  <div className="text-sm text-gray-500">Good Quality</div>
                  <div className="text-lg font-semibold text-green-600">{soilHealthData.healthStatus.good}</div>
                </div>
                <div className="text-center p-2 bg-purple-50 rounded-lg">
                  <div className="text-sm text-gray-500">Moderate</div>
                  <div className="text-lg font-semibold text-yellow-600">{soilHealthData.healthStatus.moderate}</div>
                </div>
                <div className="text-center p-2 bg-purple-50 rounded-lg">
                  <div className="text-sm text-gray-500">Poor Quality</div>
                  <div className="text-lg font-semibold text-red-600">{soilHealthData.healthStatus.poor}</div>
                </div>
              </div>
              <div className="space-y-3">
                {soilHealthData.regions.map((region, index) => (
                  <div key={index} className="p-3 bg-purple-50 rounded-lg">
                    <div className="flex justify-between mb-1">
                      <div className="font-medium">{region.name}</div>
                      <div className={`text-sm font-medium ${region.status === 'Good' ? 'text-green-600' :
                        region.status === 'Moderate' ? 'text-yellow-600' :
                          'text-red-600'
                        }`}>
                        {region.status}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      pH: {region.ph} • Organic Matter: {region.organic} • Nutrient: {region.nutrientIndex}
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                Complete Soil Analysis <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center gap-2">
                <ListChecks className="h-5 w-5 text-dashboard-government" />
                Scheme Implementation
              </CardTitle>
              <CardDescription>Tracking government schemes progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="text-center p-2 bg-purple-50 rounded-lg">
                  <div className="text-sm text-gray-500">Active Schemes</div>
                  <div className="text-lg font-semibold">{schemeData.active}</div>
                </div>
                <div className="text-center p-2 bg-purple-50 rounded-lg">
                  <div className="text-sm text-gray-500">Beneficiaries</div>
                  <div className="text-lg font-semibold">{schemeData.beneficiaries}</div>
                </div>
                <div className="text-center p-2 bg-purple-50 rounded-lg">
                  <div className="text-sm text-gray-500">Funds Disbursed</div>
                  <div className="text-lg font-semibold">{schemeData.fundsDisbursed}</div>
                </div>
              </div>
              <div className="space-y-3">
                {schemeData.schemes.map((scheme, index) => (
                  <div key={index} className="p-3 bg-purple-50 rounded-lg">
                    <div className="flex justify-between mb-1">
                      <div className="font-medium">{scheme.name}</div>
                      <div className={`text-sm px-2 py-1 rounded-full ${scheme.status === 'On Track' ? 'bg-green-100 text-green-700' :
                        'bg-yellow-100 text-yellow-700'
                        }`}>
                        {scheme.status}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      Beneficiaries: {scheme.beneficiaries} • Funds: {scheme.fundsDisbursed}
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                Detailed Implementation Reports <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Policy Updates and Field Inspections */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center gap-2">
                <Bell className="h-5 w-5 text-dashboard-government" />
                Policy Updates
              </CardTitle>
              <CardDescription>Recent agricultural policies and reforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {policyData.map((policy, index) => (
                  <div key={index} className="p-3 bg-purple-50 rounded-lg">
                    <div className="flex justify-between mb-1">
                      <div className="font-medium">{policy.title}</div>
                      <div className={`text-sm px-2 py-1 rounded-full ${policy.status === 'Published' ? 'bg-green-100 text-green-700' :
                        policy.status === 'Draft' ? 'bg-gray-100 text-gray-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                        {policy.status}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">Date: {policy.date}</div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                Create New Policy <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="h-5 w-5 text-dashboard-government" />
                Field Inspections
              </CardTitle>
              <CardDescription>Scheduled and completed visits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {inspectionData.map((inspection, index) => (
                  <div key={index} className="p-3 bg-purple-50 rounded-lg">
                    <div className="flex justify-between mb-1">
                      <div className="font-medium">{inspection.location}</div>
                      <div className={`text-sm px-2 py-1 rounded-full ${inspection.status === 'Scheduled' ? 'bg-blue-100 text-blue-700' :
                        'bg-green-100 text-green-700'
                        }`}>
                        {inspection.status}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      Date: {inspection.date} • Officer: {inspection.officer}
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                Schedule New Inspection <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Quick Access Menu */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-6 text-dashboard-government">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer bg-white hover:bg-purple-50"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-purple-50">
                    <item.icon className="h-6 w-6 text-dashboard-government" />
                  </div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default GovernmentDashboard;
