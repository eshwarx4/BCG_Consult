

import { DashboardLayout } from '@/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CloudSun, Sprout, Crop, Coins, TrendingUp, FlaskConical, HandHeart, Bell, ArrowRight } from 'lucide-react';

// Mock data for demonstration
const weatherData = {
  temperature: '28°C',
  condition: 'Sunny',
  humidity: '65%',
  windSpeed: '10 km/h',
  forecast: [
    { day: 'Today', temp: '28°C', condition: 'Sunny' },
    { day: 'Tomorrow', temp: '26°C', condition: 'Partly Cloudy' },
    { day: 'Wednesday', temp: '25°C', condition: 'Rain' },
  ]
};

const soilData = {
  moisture: '42%',
  nitrogen: '22 kg/ha',
  phosphorus: '18 kg/ha',
  potassium: '15 kg/ha',
  ph: '6.8',
  recommendation: 'Ideal for wheat and corn cultivation'
};

const cropData = [
  { name: 'Wheat', area: '2.5 acres', status: 'Growing', stage: 'Flowering' },
  { name: 'Rice', area: '3 acres', status: 'Planned', stage: 'Not planted' },
  { name: 'Corn', area: '1.5 acres', status: 'Harvested', stage: 'Completed' },
];

const financialData = {
  expenses: '₹45,000',
  revenue: '₹120,000',
  profit: '₹75,000',
  loans: [
    { name: 'Crop Loan', amount: '₹50,000', interest: '4%', dueDate: '15 Dec 2025' }
  ],
  subsidies: [
    { name: 'PM-KISAN', amount: '₹6,000', status: 'Received' },
    { name: 'Fertilizer Subsidy', amount: '₹3,500', status: 'Pending' }
  ]
};

const marketPrices = [
  { crop: 'Wheat', price: '₹2,100/quintal', trend: 'up' },
  { crop: 'Rice', price: '₹1,950/quintal', trend: 'down' },
  { crop: 'Corn', price: '₹1,800/quintal', trend: 'stable' },
  { crop: 'Soybean', price: '₹3,800/quintal', trend: 'up' },
];

const recommendations = [
  { type: 'Fertilizer', name: 'NPK 10-26-26', dosage: '250 kg/ha', timing: 'Before sowing' },
  { type: 'Pesticide', name: 'Imidacloprid', dosage: '125 ml/ha', timing: 'When pests appear' },
];

const schemes = [
  { name: 'PM-KISAN', benefit: '₹6,000 per year', eligibility: 'All farmers' },
  { name: 'Soil Health Card', benefit: 'Free soil testing', eligibility: 'All farmers' },
  { name: 'Pradhan Mantri Fasal Bima Yojana', benefit: 'Crop insurance', eligibility: 'Registered farmers' },
];

const notifications = [
  { type: 'Weather', message: 'Heavy rainfall expected in your region in next 48 hours', time: '2 hours ago' },
  { type: 'Pest', message: 'Increased aphid activity reported in nearby farms', time: '1 day ago' },
  { type: 'Market', message: 'Wheat prices expected to rise in the coming week', time: '3 days ago' },
];

const menuItems = [
  { icon: CloudSun, title: 'Weather Forecast', description: 'Real-time weather updates' },
  { icon: Sprout, title: 'Field Data', description: 'Soil health and moisture levels' },
  { icon: Crop, title: 'Crop Management', description: 'Track your crops year-wise' },
  { icon: Coins, title: 'Financial Management', description: 'Track expenses and revenues' },
  { icon: TrendingUp, title: 'Market Prices', description: 'Current crop market prices' },
  { icon: FlaskConical, title: 'Recommendations', description: 'AI-driven farming suggestions' },
  { icon: HandHeart, title: 'Government Schemes', description: 'Available subsidies and benefits' },
  { icon: Bell, title: 'Notifications', description: 'Important alerts and updates' },
];

const FarmerDashboard = () => {
  return (
    <DashboardLayout type="farmer">
      <div className="space-y-8">
        {/* Header Section */}
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-dashboard-farmer mb-2">Farmer Dashboard</h1>
          <p className="text-gray-600">Welcome back, Farmer Ravi! Here's your farm status for today.</p>
        </section>

        {/* Weather and Soil Health Overview */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-semibold flex items-center gap-2">
                  <CloudSun className="h-5 w-5 text-dashboard-farmer" />
                  Weather Forecast
                </CardTitle>
                <div className="text-3xl font-bold text-dashboard-farmer">{weatherData.temperature}</div>
              </div>
              <CardDescription>{weatherData.condition} • Humidity: {weatherData.humidity} • Wind: {weatherData.windSpeed}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {weatherData.forecast.map((day, index) => (
                  <div key={index} className="text-center p-2 bg-green-50 rounded-lg">
                    <div className="font-medium">{day.day}</div>
                    <div className="text-lg font-semibold">{day.temp}</div>
                    <div className="text-sm text-gray-500">{day.condition}</div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                View 7-Day Forecast <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center gap-2">
                <Sprout className="h-5 w-5 text-dashboard-farmer" />
                Soil Health
              </CardTitle>
              <CardDescription>Latest readings from your fields</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="text-center p-2 bg-green-50 rounded-lg">
                  <div className="text-sm text-gray-500">Moisture</div>
                  <div className="text-lg font-semibold">{soilData.moisture}</div>
                </div>
                <div className="text-center p-2 bg-green-50 rounded-lg">
                  <div className="text-sm text-gray-500">pH Level</div>
                  <div className="text-lg font-semibold">{soilData.ph}</div>
                </div>
                <div className="text-center p-2 bg-green-50 rounded-lg">
                  <div className="text-sm text-gray-500">Nitrogen</div>
                  <div className="text-lg font-semibold">{soilData.nitrogen}</div>
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-2 bg-green-50 p-2 rounded-lg">
                <span className="font-medium">Recommendation:</span> {soilData.recommendation}
              </p>
              <Button variant="outline" size="sm" className="w-full mt-4">
                Full Soil Analysis <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Crop Management and Financial Overview */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center gap-2">
                <Crop className="h-5 w-5 text-dashboard-farmer" />
                Crop Management
              </CardTitle>
              <CardDescription>Current cultivation status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {cropData.map((crop, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <div>
                      <div className="font-medium">{crop.name}</div>
                      <div className="text-sm text-gray-500">{crop.area}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{crop.status}</div>
                      <div className="text-sm text-gray-500">{crop.stage}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                Manage Crops <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center gap-2">
                <Coins className="h-5 w-5 text-dashboard-farmer" />
                Financial Overview
              </CardTitle>
              <CardDescription>Current season summary</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="text-center p-2 bg-green-50 rounded-lg">
                  <div className="text-sm text-gray-500">Expenses</div>
                  <div className="text-lg font-semibold">{financialData.expenses}</div>
                </div>
                <div className="text-center p-2 bg-green-50 rounded-lg">
                  <div className="text-sm text-gray-500">Revenue</div>
                  <div className="text-lg font-semibold">{financialData.revenue}</div>
                </div>
                <div className="text-center p-2 bg-green-50 rounded-lg">
                  <div className="text-sm text-gray-500">Profit</div>
                  <div className="text-lg font-semibold">{financialData.profit}</div>
                </div>
              </div>
              <div className="mt-3">
                <div className="text-sm font-medium mb-1">Active Subsidies</div>
                {financialData.subsidies.map((subsidy, index) => (
                  <div key={index} className="flex justify-between items-center p-2 bg-green-50 rounded-lg mb-2 text-sm">
                    <span>{subsidy.name}</span>
                    <span className="font-medium">{subsidy.amount} • {subsidy.status}</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-2">
                Financial Details <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Market Prices and Recommendations */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-dashboard-farmer" />
                Market Prices
              </CardTitle>
              <CardDescription>Current prices in your region</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {marketPrices.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <div className="font-medium">{item.crop}</div>
                    <div className="flex items-center">
                      <span className="font-semibold">{item.price}</span>
                      {item.trend === 'up' && <TrendingUp className="h-4 w-4 ml-2 text-green-600" />}
                      {item.trend === 'down' && <TrendingUp className="h-4 w-4 ml-2 text-red-600 transform rotate-180" />}
                      {item.trend === 'stable' && <div className="h-4 w-4 ml-2 border-t-2 border-gray-400" />}
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                All Market Prices <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center gap-2">
                <FlaskConical className="h-5 w-5 text-dashboard-farmer" />
                Recommendations
              </CardTitle>
              <CardDescription>AI-driven suggestions for optimal yield</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recommendations.map((item, index) => (
                  <div key={index} className="p-3 bg-green-50 rounded-lg">
                    <div className="font-medium">{item.type}: {item.name}</div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Dosage:</span> {item.dosage} •
                      <span className="font-medium"> Timing:</span> {item.timing}
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                Custom Recommendations <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Government Schemes and Notifications */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center gap-2">
                <HandHeart className="h-5 w-5 text-dashboard-farmer" />
                Government Schemes
              </CardTitle>
              <CardDescription>Available subsidies and benefits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {schemes.map((scheme, index) => (
                  <div key={index} className="p-3 bg-green-50 rounded-lg">
                    <div className="font-medium">{scheme.name}</div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Benefit:</span> {scheme.benefit} •
                      <span className="font-medium"> Eligibility:</span> {scheme.eligibility}
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                All Schemes <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center gap-2">
                <Bell className="h-5 w-5 text-dashboard-farmer" />
                Notifications
              </CardTitle>
              <CardDescription>Important alerts and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {notifications.map((notification, index) => (
                  <div key={index} className="p-3 bg-green-50 rounded-lg">
                    <div className="flex justify-between">
                      <div className="font-medium">{notification.type} Alert</div>
                      <div className="text-xs text-gray-500">{notification.time}</div>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{notification.message}</div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                View All Notifications <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Quick Access Menu */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-6 text-dashboard-farmer">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuItems.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer bg-white hover:bg-green-50"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-green-50">
                    <item.icon className="h-6 w-6 text-dashboard-farmer" />
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

export default FarmerDashboard;
