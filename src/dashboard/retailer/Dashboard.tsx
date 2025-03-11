import { DashboardLayout } from '@/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Store, Settings, Package, Receipt, Users, Percent, BarChart, ArrowRight } from 'lucide-react';

// Mock data for demonstration
const inventoryData = [
  { name: 'NPK Fertilizer', stock: '320 units', status: 'In Stock', price: '₹1,200/unit' },
  { name: 'Wheat Seeds', stock: '150 kg', status: 'Low Stock', price: '₹55/kg' },
  { name: 'Pesticide XL-40', stock: '85 liters', status: 'In Stock', price: '₹450/liter' },
  { name: 'Farm Equipment', stock: '24 units', status: 'In Stock', price: 'Varies' },
];

const serviceData = [
  { name: 'Soil Testing', requests: 12, avgRating: 4.7 },
  { name: 'Equipment Rental', requests: 8, avgRating: 4.5 },
  { name: 'Crop Advisory', requests: 15, avgRating: 4.8 },
  { name: 'Pesticide Application', requests: 5, avgRating: 4.6 },
];

const orderData = [
  { id: 'ORD-7839', farmer: 'Ravi Kumar', items: 4, total: '₹5,400', status: 'Processing' },
  { id: 'ORD-7840', farmer: 'Sunil Verma', items: 2, total: '₹2,200', status: 'Delivered' },
  { id: 'ORD-7841', farmer: 'Anita Patel', items: 6, total: '₹8,700', status: 'Ready for Pickup' },
];

const customerData = [
  { name: 'Ravi Kumar', location: 'Rajpura Village', status: 'Active', lastOrder: '2 days ago' },
  { name: 'Sunil Verma', location: 'Meerut District', status: 'Active', lastOrder: '1 week ago' },
  { name: 'Anita Patel', location: 'Bahadurgarh', status: 'Inactive', lastOrder: '2 months ago' },
];

const paymentData = {
  totalRevenue: '₹1,24,500',
  pendingPayments: '₹15,200',
  expectedRevenue: '₹45,000',
  transactions: [
    { id: 'TRX-4523', farmer: 'Ravi Kumar', amount: '₹5,400', status: 'Completed', date: '15 June 2025' },
    { id: 'TRX-4524', farmer: 'Sunil Verma', amount: '₹2,200', status: 'Completed', date: '12 June 2025' },
    { id: 'TRX-4525', farmer: 'Mohan Singh', amount: '₹3,800', status: 'Pending', date: '10 June 2025' },
  ]
};

const promotionData = [
  { name: 'Monsoon Sale', discount: '15% off', product: 'All Seeds', valid: 'Till July 31, 2025' },
  { name: 'Equipment Rental', discount: '20% off', product: 'Tractors & Tillers', valid: 'This Week Only' },
  { name: 'Soil Testing', discount: 'Free with fertilizer purchase', product: 'Testing Services', valid: 'Limited Time' },
];

const analyticsData = {
  topProducts: [
    { name: 'NPK Fertilizer', sales: '₹45,600', growth: '+15%' },
    { name: 'Wheat Seeds', sales: '₹38,250', growth: '+8%' },
    { name: 'Pesticide XL-40', sales: '₹22,500', growth: '-3%' },
  ],
  monthlySales: '₹1,24,500',
  growthRate: '+12.5%',
};

const menuItems = [
  { icon: Store, title: 'Shop Management', description: 'Inventory and stock updates' },
  { icon: Settings, title: 'Service Management', description: 'Manage offered services' },
  { icon: Package, title: 'Order Tracking', description: 'Track farmer orders' },
  { icon: Receipt, title: 'Billing & Payments', description: 'Financial management' },
  { icon: Users, title: 'Customer Engagement', description: 'Handle farmer inquiries' },
  { icon: Percent, title: 'Promotions', description: 'Manage special offers' },
  { icon: BarChart, title: 'Sales Analytics', description: 'Track business performance' },
];

const RetailerDashboard = () => {
  return (
    <DashboardLayout type="retailer">
      <div className="space-y-8">
        {/* Header Section */}
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-dashboard-retailer mb-2">Retailer Dashboard</h1>
          <p className="text-gray-600">Welcome back, Agro Solutions Inc! Here's your business overview.</p>
        </section>

        {/* Inventory and Service Management Overview */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center gap-2">
                <Store className="h-5 w-5 text-dashboard-retailer" />
                Inventory Status
              </CardTitle>
              <CardDescription>Current stock level overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {inventoryData.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-gray-500">{item.price}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{item.stock}</div>
                      <div className={`text-sm ${item.status === 'Low Stock' ? 'text-orange-500 font-medium' : 'text-gray-500'}`}>
                        {item.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                Manage Inventory <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center gap-2">
                <Settings className="h-5 w-5 text-dashboard-retailer" />
                Service Management
              </CardTitle>
              <CardDescription>Services offered to farmers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {serviceData.map((service, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <div>
                      <div className="font-medium">{service.name}</div>
                      <div className="text-sm text-gray-500">Rating: {service.avgRating}/5</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{service.requests} Requests</div>
                      <div className="text-sm text-dashboard-retailer">View Details</div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                Manage Services <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Order Tracking and Customer Management */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center gap-2">
                <Package className="h-5 w-5 text-dashboard-retailer" />
                Recent Orders
              </CardTitle>
              <CardDescription>Track farmer order status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {orderData.map((order, index) => (
                  <div key={index} className="p-3 bg-blue-50 rounded-lg">
                    <div className="flex justify-between items-center mb-1">
                      <div className="font-medium">{order.id}</div>
                      <div className={`text-sm px-2 py-1 rounded-full ${order.status === 'Processing' ? 'bg-yellow-100 text-yellow-700' :
                        order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                          'bg-blue-100 text-dashboard-retailer'
                        }`}>
                        {order.status}
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>{order.farmer}</span>
                      <span className="text-gray-500">{order.items} items • {order.total}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                View All Orders <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center gap-2">
                <Users className="h-5 w-5 text-dashboard-retailer" />
                Customer Management
              </CardTitle>
              <CardDescription>Recent customer activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {customerData.map((customer, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <div>
                      <div className="font-medium">{customer.name}</div>
                      <div className="text-sm text-gray-500">{customer.location}</div>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-medium ${customer.status === 'Active' ? 'text-green-600' : 'text-gray-500'}`}>
                        {customer.status}
                      </div>
                      <div className="text-sm text-gray-500">Last: {customer.lastOrder}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                All Customers <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Billing and Promotions */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center gap-2">
                <Receipt className="h-5 w-5 text-dashboard-retailer" />
                Billing & Payments
              </CardTitle>
              <CardDescription>Financial overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="text-center p-2 bg-blue-50 rounded-lg">
                  <div className="text-sm text-gray-500">Revenue</div>
                  <div className="text-lg font-semibold">{paymentData.totalRevenue}</div>
                </div>
                <div className="text-center p-2 bg-blue-50 rounded-lg">
                  <div className="text-sm text-gray-500">Pending</div>
                  <div className="text-lg font-semibold">{paymentData.pendingPayments}</div>
                </div>
                <div className="text-center p-2 bg-blue-50 rounded-lg">
                  <div className="text-sm text-gray-500">Expected</div>
                  <div className="text-lg font-semibold">{paymentData.expectedRevenue}</div>
                </div>
              </div>
              <div className="space-y-2 mt-3">
                <div className="text-sm font-medium mb-1">Recent Transactions</div>
                {paymentData.transactions.map((transaction, index) => (
                  <div key={index} className="flex justify-between items-center p-2 bg-blue-50 rounded-lg text-sm">
                    <div>
                      <div className="font-medium">{transaction.id}</div>
                      <div className="text-gray-500">{transaction.farmer}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{transaction.amount}</div>
                      <div className={`${transaction.status === 'Completed' ? 'text-green-600' : 'text-orange-500'}`}>
                        {transaction.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                Financial Reports <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center gap-2">
                <Percent className="h-5 w-5 text-dashboard-retailer" />
                Promotions & Offers
              </CardTitle>
              <CardDescription>Current special deals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {promotionData.map((promo, index) => (
                  <div key={index} className="p-3 bg-blue-50 rounded-lg">
                    <div className="font-medium">{promo.name}</div>
                    <div className="text-sm text-gray-600 mt-1">
                      <span className="font-medium">{promo.discount}</span> on {promo.product}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Valid: {promo.valid}</div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                Create New Promotion <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Sales Analytics */}
        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center gap-2">
                <BarChart className="h-5 w-5 text-dashboard-retailer" />
                Sales Analytics
              </CardTitle>
              <CardDescription>Performance metrics and insights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium">Monthly Sales</h3>
                    <div className="flex items-center">
                      <span className="font-semibold">{analyticsData.monthlySales}</span>
                      <span className="ml-2 text-green-600 text-sm">{analyticsData.growthRate}</span>
                    </div>
                  </div>
                  <div className="h-40 bg-blue-50 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Sales Chart Visualization</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-3">Top Selling Products</h3>
                  <div className="space-y-2">
                    {analyticsData.topProducts.map((product, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-blue-50 rounded-lg">
                        <span className="font-medium">{product.name}</span>
                        <div className="text-right">
                          <span className="font-medium">{product.sales}</span>
                          <span className={`ml-2 text-sm ${product.growth.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
                            {product.growth}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                Detailed Analytics <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Quick Access Menu */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-6 text-dashboard-retailer">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer bg-white hover:bg-blue-50"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-blue-50">
                    <item.icon className="h-6 w-6 text-dashboard-retailer" />
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

export default RetailerDashboard;
