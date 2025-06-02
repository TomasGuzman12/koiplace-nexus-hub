import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Search,
  Filter,
  MapPin,
  Star,
  Briefcase,
  Music,
  UtensilsCrossed,
  Palette,
  Shield,
  Truck,
  Sparkles,
  Camera,
  Heart,
  Menu,
  X
} from 'lucide-react';

interface ServicesSidebarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedLocation: string;
  onLocationChange: (location: string) => void;
  selectedRating: string;
  onRatingChange: (rating: string) => void;
  selectedPrice: string;
  onPriceChange: (price: string) => void;
}

const ServicesSidebar = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedLocation,
  onLocationChange,
  selectedRating,
  onRatingChange,
  selectedPrice,
  onPriceChange
}: ServicesSidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const categories = [
    { name: 'Audio y Sonido', icon: Music, count: 45 },
    { name: 'Gastronomía', icon: UtensilsCrossed, count: 38 },
    { name: 'Decoración', icon: Palette, count: 29 },
    { name: 'Seguridad', icon: Shield, count: 22 },
    { name: 'Transporte', icon: Truck, count: 18 },
    { name: 'Limpieza', icon: Sparkles, count: 15 },
    { name: 'Fotografía', icon: Camera, count: 12 },
    { name: 'Animación', icon: Heart, count: 8 }
  ];

  const locations = [
    'Yerba Buena - Tucumán',
    'San Miguel de Tucumán',
    'Tafí Viejo',
    'Banda del Río Salí',
    'Las Talitas',
    'Alderetes'
  ];

  const priceRanges = [
    { label: 'Económico ($)', value: '$' },
    { label: 'Moderado ($$)', value: '$$' },
    { label: 'Premium ($$$)', value: '$$$' }
  ];

  const ratings = [
    { label: '5 estrellas', value: '5' },
    { label: '4+ estrellas', value: '4' },
    { label: '3+ estrellas', value: '3' }
  ];

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
        "fixed left-0 top-0 z-50 h-full bg-white border-r border-gray-200 transition-all duration-300 flex flex-col overflow-y-auto",
        isCollapsed ? "-translate-x-full lg:translate-x-0 lg:w-20" : "w-80"
      )}>
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          {!isCollapsed && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Filtrar Servicios</h2>
              <p className="text-sm text-gray-600">Encuentra el prestador perfecto</p>
            </div>
          )}
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="h-8 w-8 p-0 hover:bg-gray-100 rounded-lg lg:hidden"
          >
            {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
          </Button>
        </div>

        {!isCollapsed && (
          <div className="flex-1 p-6 space-y-6">
            {/* Search */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Buscar
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Buscar prestadores..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="pl-10 rounded-xl border-gray-200"
                />
              </div>
            </div>

            <Separator />

            {/* Popular Categories */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-3 block">
                Categorías Populares
              </label>
              <div className="space-y-2">
                <button
                  onClick={() => onCategoryChange('all')}
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors",
                    selectedCategory === 'all' 
                      ? "bg-[#3c6e51] text-white" 
                      : "hover:bg-gray-100"
                  )}
                >
                  <span>Todos los servicios</span>
                  <Badge variant="outline" className="bg-white text-gray-600">
                    187
                  </Badge>
                </button>
                
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.name}
                      onClick={() => onCategoryChange(category.name)}
                      className={cn(
                        "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors",
                        selectedCategory === category.name 
                          ? "bg-[#3c6e51] text-white" 
                          : "hover:bg-gray-100"
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        <span>{category.name}</span>
                      </div>
                      <Badge variant="outline" className="bg-white text-gray-600">
                        {category.count}
                      </Badge>
                    </button>
                  );
                })}
              </div>
            </div>

            <Separator />

            {/* Location Filter */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-3 block">
                <MapPin className="w-4 h-4 inline mr-1" />
                Ubicación
              </label>
              <div className="space-y-2">
                <button
                  onClick={() => onLocationChange('all')}
                  className={cn(
                    "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                    selectedLocation === 'all' 
                      ? "bg-[#3c6e51] text-white" 
                      : "hover:bg-gray-100"
                  )}
                >
                  Todas las ubicaciones
                </button>
                
                {locations.map((location) => (
                  <button
                    key={location}
                    onClick={() => onLocationChange(location)}
                    className={cn(
                      "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                      selectedLocation === location 
                        ? "bg-[#3c6e51] text-white" 
                        : "hover:bg-gray-100"
                    )}
                  >
                    {location}
                  </button>
                ))}
              </div>
            </div>

            <Separator />

            {/* Rating Filter */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-3 block">
                <Star className="w-4 h-4 inline mr-1" />
                Calificación
              </label>
              <div className="space-y-2">
                <button
                  onClick={() => onRatingChange('all')}
                  className={cn(
                    "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                    selectedRating === 'all' 
                      ? "bg-[#3c6e51] text-white" 
                      : "hover:bg-gray-100"
                  )}
                >
                  Todas las calificaciones
                </button>
                
                {ratings.map((rating) => (
                  <button
                    key={rating.value}
                    onClick={() => onRatingChange(rating.value)}
                    className={cn(
                      "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                      selectedRating === rating.value 
                        ? "bg-[#3c6e51] text-white" 
                        : "hover:bg-gray-100"
                    )}
                  >
                    {rating.label}
                  </button>
                ))}
              </div>
            </div>

            <Separator />

            {/* Price Filter */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-3 block">
                <Briefcase className="w-4 h-4 inline mr-1" />
                Rango de Precios
              </label>
              <div className="space-y-2">
                <button
                  onClick={() => onPriceChange('all')}
                  className={cn(
                    "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                    selectedPrice === 'all' 
                      ? "bg-[#3c6e51] text-white" 
                      : "hover:bg-gray-100"
                  )}
                >
                  Todos los precios
                </button>
                
                {priceRanges.map((price) => (
                  <button
                    key={price.value}
                    onClick={() => onPriceChange(price.value)}
                    className={cn(
                      "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                      selectedPrice === price.value 
                        ? "bg-[#3c6e51] text-white" 
                        : "hover:bg-gray-100"
                    )}
                  >
                    {price.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            <Button 
              variant="outline" 
              className="w-full rounded-xl"
              onClick={() => {
                onSearchChange('');
                onCategoryChange('all');
                onLocationChange('all');
                onRatingChange('all');
                onPriceChange('all');
              }}
            >
              <Filter className="w-4 h-4 mr-2" />
              Limpiar Filtros
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default ServicesSidebar;
