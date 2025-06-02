
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Users, 
  Calendar, 
  Briefcase, 
  Settings, 
  Menu, 
  X,
  LogOut,
  User
} from 'lucide-react';

interface SidebarProps {
  userType: 'municipality' | 'provider' | 'citizen' | 'organizer';
}

const Sidebar = ({ userType }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const municipalityItems = [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: Calendar, label: 'Eventos', href: '/events' },
    { icon: Briefcase, label: 'Contrataciones', href: '/contracts' },
    { icon: Users, label: 'Prestadores', href: '/providers' },
    { icon: Settings, label: 'Configuración', href: '/settings' },
  ];

  const providerItems = [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: Calendar, label: 'Eventos Disponibles', href: '/events' },
    { icon: Briefcase, label: 'Mis Postulaciones', href: '/applications' },
    { icon: User, label: 'Mi Perfil', href: '/profile' },
    { icon: Settings, label: 'Configuración', href: '/settings' },
  ];

  const citizenItems = [
    { icon: Home, label: 'Inicio', href: '/dashboard' },
    { icon: Calendar, label: 'Eventos', href: '/events' },
    { icon: Users, label: 'Servicios', href: '/services' },
    { icon: Settings, label: 'Configuración', href: '/settings' },
  ];

  const organizerItems = [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: Calendar, label: 'Mis Eventos', href: '/my-events' },
    { icon: Users, label: 'Prestadores', href: '/providers' },
    { icon: Briefcase, label: 'Contrataciones', href: '/contracts' },
    { icon: Settings, label: 'Configuración', href: '/settings' },
  ];

  const getMenuItems = () => {
    switch (userType) {
      case 'municipality': return municipalityItems;
      case 'provider': return providerItems;
      case 'citizen': return citizenItems;
      case 'organizer': return organizerItems;
      default: return municipalityItems;
    }
  };

  const menuItems = getMenuItems();

  return (
    <>
      {/* Mobile overlay */}
      {!isCollapsed && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsCollapsed(true)}
        />
      )}
      
      {/* Sidebar */}
      <div className={cn(
        "fixed left-0 top-0 z-50 h-full bg-white border-r border-gray-200 transition-all duration-300 flex flex-col",
        isCollapsed ? "-translate-x-full lg:translate-x-0 lg:w-20" : "w-64"
      )}>
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#3c6e51] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">KoiPlace</span>
            </div>
          )}
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="h-8 w-8 p-0 hover:bg-gray-100 rounded-lg"
          >
            {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center space-x-3 px-3 py-3 rounded-xl transition-all duration-200 group",
                  isActive 
                    ? "bg-[#3c6e51] text-white shadow-md" 
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                )}
              >
                <Icon className={cn(
                  "h-5 w-5 flex-shrink-0",
                  isActive ? "text-white" : "text-gray-400 group-hover:text-gray-600"
                )} />
                {!isCollapsed && (
                  <span className="font-medium truncate">{item.label}</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* User section */}
        <div className="p-4 border-t border-gray-200 space-y-2">
          <Link
            to="/profile"
            className="flex items-center space-x-3 px-3 py-3 rounded-xl text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
          >
            <User className="h-5 w-5 text-gray-400" />
            {!isCollapsed && <span className="font-medium">Mi Perfil</span>}
          </Link>
          
          <Button
            variant="ghost"
            className="w-full justify-start space-x-3 px-3 py-3 rounded-xl text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors"
            onClick={() => window.location.href = '/'}
          >
            <LogOut className="h-5 w-5" />
            {!isCollapsed && <span>Cerrar Sesión</span>}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
