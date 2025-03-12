import React, { useState } from 'react';
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from '@/lib/utils';

import { Link } from 'react-router-dom';
import {
  Settings, LogOut, User,
  CloudSun, Sprout, Crop, Coins, TrendingUp, FlaskConical, HandHeart, Bell,
  Store, Package, Receipt, Users, Percent, BarChart,
  MessageSquare, PhoneCall, Layers, ListChecks, MapPin, ChevronLeft, ChevronRight
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  type: 'farmer' | 'retailer' | 'government';
}

export const DashboardLayout = ({ children, type }: DashboardLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

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
        return {
          text: 'text-green-600',
          bg: 'bg-green-600',
          hover: 'hover:bg-green-100',
          activeText: 'text-white',
          activeBg: 'bg-green-600'
        };
      case 'retailer':
        return {
          text: 'text-blue-600',
          bg: 'bg-blue-600',
          hover: 'hover:bg-blue-100',
          activeText: 'text-white',
          activeBg: 'bg-blue-600'
        };
      case 'government':
        return {
          text: 'text-purple-600',
          bg: 'bg-purple-600',
          hover: 'hover:bg-purple-100',
          activeText: 'text-white',
          activeBg: 'bg-purple-600'
        };
      default:
        return {
          text: 'text-gray-600',
          bg: 'bg-gray-600',
          hover: 'hover:bg-gray-100',
          activeText: 'text-white',
          activeBg: 'bg-gray-600'
        };
    }
  };

  const navItems = getNavItems();
  const typeColor = getTypeColor();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <Sidebar
          className={cn(
            "border-r border-gray-200 bg-white transition-all duration-300 ease-in-out relative",
            collapsed ? "w-20" : "w-64"
          )}
        >
          <SidebarHeader className={cn(
            "border-b flex flex-col items-center justify-center",
            typeColor.bg,
            "py-4"
          )}>
            {/* <h2 className={cn(
              "text-xl font-bold",
              "text-white"
            )}>
              {collapsed ? "KR" : "Krishirakshak"}
            </h2> */}
            <h2 className={cn(
              "text-xl font-bold",
              "text-white"
            )}>
              <div className="flex items-center gap-2 cursor-pointer">
                <img
                  src='/Logo_White-removebg-preview.png'
                  alt="Logo"
                  width={40}
                  height={50}
                />
                <span
                  className='text-xl font-bold text-white'
                >
                  KrishiRakshak
                </span>
              </div>
            </h2>

            {/* {!collapsed && (
              <p className="text-sm text-white/90 mt-1">
                {type.charAt(0).toUpperCase() + type.slice(1)} Portal
              </p>
            )} */}
          </SidebarHeader>

          <div
            className="absolute -right-3 top-16 cursor-pointer bg-white rounded-full border border-gray-200 shadow-md p-1"
            onClick={toggleSidebar}
          >
            {collapsed ?
              <ChevronRight className={cn("h-4 w-4", typeColor.text)} /> :
              <ChevronLeft className={cn("h-4 w-4", typeColor.text)} />
            }
          </div>

          <SidebarContent className="p-3">
            <nav className="space-y-1">
              {/* <Link to="/" className="block mb-4">
                <Button
                  variant="outline"
                  size="sm"
                  className={cn(
                    "w-full flex justify-start hover:bg-gray-100",
                    collapsed && "px-2 justify-center"
                  )}
                >
                  <Home className="h-4 w-4 mr-2" />
                  {!collapsed && "Dashboard"}
                </Button>
              </Link> */}

              <div className="space-y-1">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.path}
                    className={cn(
                      "flex items-center px-3 py-2 rounded-md text-sm font-medium",
                      typeColor.hover,
                      "transition-all duration-200",
                      collapsed ? "justify-center" : "justify-start",
                      index === 0 ? cn(typeColor.activeBg, typeColor.activeText) : "text-gray-700"
                    )}
                  >
                    <item.icon className={cn("h-5 w-5", collapsed ? "" : "mr-3")} />
                    {!collapsed && item.label}
                  </a>
                ))}
              </div>

              <div className="pt-6 mt-6 border-t border-gray-200 space-y-1">
                <a
                  href="#profile"
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 text-gray-700",
                    collapsed && "justify-center"
                  )}
                >
                  <User className={cn("h-5 w-5", collapsed ? "" : "mr-3")} />
                  {!collapsed && "Profile"}
                </a>
                <a
                  href="#settings"
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 text-gray-700",
                    collapsed && "justify-center"
                  )}
                >
                  <Settings className={cn("h-5 w-5", collapsed ? "" : "mr-3")} />
                  {!collapsed && "Settings"}
                </a>
                <Link
                  to="/"
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 text-gray-700",
                    collapsed && "justify-center"
                  )}
                >
                  <LogOut className={cn("h-5 w-5", collapsed ? "" : "mr-3")} />
                  {!collapsed && "Sign Out"}
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