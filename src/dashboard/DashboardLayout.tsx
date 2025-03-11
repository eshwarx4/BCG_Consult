
import React from 'react';
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Home, Settings, LogOut, User,
  CloudSun, Sprout, Crop, Coins, TrendingUp, FlaskConical, HandHeart, Bell,
  Store, Package, Receipt, Users, Percent, BarChart,
  MessageSquare, PhoneCall, Layers, ListChecks, MapPin
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  type: 'farmer' | 'retailer' | 'government';
}

export const DashboardLayout = ({ children, type }: DashboardLayoutProps) => {
  const getNavItems = () => {
    switch (type) {
      case 'farmer':
        return [
          { icon: CloudSun, label: 'Weather', path: '#weather' },
          { icon: Sprout, label: 'Field Data', path: '#field-data' },
          { icon: Crop, label: 'Crops', path: '#crops' },
          { icon: Coins, label: 'Finances', path: '#finances' },
          { icon: TrendingUp, label: 'Markets', path: '#markets' },
          { icon: FlaskConical, label: 'Recommendations', path: '#recommendations' },
          { icon: HandHeart, label: 'Schemes', path: '#schemes' },
          { icon: Bell, label: 'Notifications', path: '#notifications' },
        ];
      case 'retailer':
        return [
          { icon: Store, label: 'Inventory', path: '#inventory' },
          { icon: Settings, label: 'Services', path: '#services' },
          { icon: Package, label: 'Orders', path: '#orders' },
          { icon: Receipt, label: 'Billing', path: '#billing' },
          { icon: Users, label: 'Customers', path: '#customers' },
          { icon: Percent, label: 'Promotions', path: '#promotions' },
          { icon: BarChart, label: 'Analytics', path: '#analytics' },
        ];
      case 'government':
        return [
          { icon: MessageSquare, label: 'Complaints', path: '#complaints' },
          { icon: PhoneCall, label: 'Call Requests', path: '#calls' },
          { icon: Layers, label: 'Soil Health', path: '#soil' },
          { icon: ListChecks, label: 'Schemes', path: '#schemes' },
          { icon: Bell, label: 'Policies', path: '#policies' },
          { icon: MapPin, label: 'Inspections', path: '#inspections' },
        ];
      default:
        return [];
    }
  };

  const getTypeColor = () => {
    switch (type) {
      case 'farmer':
        return 'text-dashboard-farmer';
      case 'retailer':
        return 'text-dashboard-retailer';
      case 'government':
        return 'text-dashboard-government';
      default:
        return '';
    }
  };

  const navItems = getNavItems();
  const typeColor = getTypeColor();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <Sidebar className="border-r border-gray-200">
          <SidebarHeader className="p-4 border-b">
            <h2 className={cn(
              "text-xl font-semibold",
              typeColor
            )}>
              Krishirakshak
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {type.charAt(0).toUpperCase() + type.slice(1)} Portal
            </p>
          </SidebarHeader>
          <SidebarContent className="p-4">
            <nav className="space-y-1">
              <Link to="/" className="block mb-6">
                <Button variant="outline" size="sm" className="w-full flex justify-start">
                  <Home className="h-4 w-4 mr-2" />
                  Dashboard Home
                </Button>
              </Link>

              <div className="space-y-1">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.path}
                    className={cn(
                      "flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100",
                      typeColor
                    )}
                  >
                    <item.icon className="h-4 w-4 mr-3" />
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="pt-6 mt-6 border-t border-gray-200 space-y-1">
                <a
                  href="#profile"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 text-gray-700"
                >
                  <User className="h-4 w-4 mr-3" />
                  Profile
                </a>
                <a
                  href="#settings"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 text-gray-700"
                >
                  <Settings className="h-4 w-4 mr-3" />
                  Settings
                </a>
                <Link
                  to="/"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 text-gray-700"
                >
                  <LogOut className="h-4 w-4 mr-3" />
                  Sign Out
                </Link>
              </div>
            </nav>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 overflow-y-auto">
          <div className="p-2 md:p-6 animate-fadeIn">
            <SidebarTrigger className="mb-4 md:hidden" />
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};
