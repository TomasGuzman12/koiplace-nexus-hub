
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Users, 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  Shield, 
  Phone, 
  Mail,
  Briefcase,
  Award,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const [userType] = useState<'municipality' | 'provider' | 'citizen' | 'organizer'>('municipality');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const providers = [
    {
      id: 1,
      name: 'Sonido Pro',
      company: 'Equipos de Audio Premium',
      category: 'Audio y Sonido',
      location: 'Centro, Buenos Aires',
      rating: 4.8,
      reviews: 156,
      services: ['Equipos de sonido', 'Iluminación', 'DJ'],
      verified: true,
      experience: '8 años',
      price: '$$',
      availability: 'Disponible',
      description: 'Especialistas en eventos masivos con equipos de última generación.',
      image: '/placeholder.svg',
      contact: {
        phone: '+54 11 1234-5678',
        email: 'info@sonidopro.com'
      }
    },
    {
      id: 2,
      name: 'Catering Delicias',
      company: 'Servicios Gastronómicos',
      category: 'Gastronomía',
      location: 'Palermo, Buenos Aires',
      rating: 4.9,
      reviews: 203,
      services: ['Catering', 'Servicio de mozos', 'Barra móvil'],
      verified: true,
      experience: '12 años',
      price: '$$$',
      availability: 'Disponible',
      description: 'Catering gourmet para eventos corporativos y sociales.',
      image: '/placeholder.svg',
      contact: {
        phone: '+54 11 2345-6789',
        email: 'contacto@delicias.com'
      }
    },
    {
      id: 3,
      name: 'Decoraciones Luna',
      company: 'Ambientación Integral',
      category: 'Decoración',
      location: 'Villa Crespo, Buenos Aires',
      rating: 4.7,
      reviews: 89,
      services: ['Decoración', 'Flores', 'Mobiliario'],
      verified: true,
      experience: '5 años',
      price: '$$',
      availability: 'Ocupado hasta 15/12',
      description: 'Creamos ambientes únicos para cada ocasión especial.',
      image: '/placeholder.svg',
      contact: {
        phone: '+54 11 3456-7890',
        email: 'luna@decoraciones.com'
      }
    },
    {
      id: 4,
      name: 'Seguridad Total',
      company: 'Servicios de Seguridad',
      category: 'Seguridad',
      location: 'Recoleta, Buenos Aires',
      rating: 4.6,
      reviews: 67,
      services: ['Personal de seguridad', 'Custodia', 'Control de acceso'],
      verified: true,
      experience: '15 años',
      price: '$$',
      availability: 'Disponible',
      description: 'Profesionales en seguridad para eventos públicos y privados.',
      image: '/placeholder.svg',
      contact: {
        phone: '+54 11 4567-8901',
        email: 'info@seguridadtotal.com'
      }
    }
  ];

  const categories = [
    'Audio y Sonido',
    'Gastronomía', 
    'Decoración',
    'Seguridad',
    'Transporte',
    'Limpieza',
    'Fotografía',
    'Animación'
  ];

  const getPriceText = (price: string) => {
    switch (price) {
      case '$': return 'Económico';
      case '$$': return 'Moderado';
      case '$$$': return 'Premium';
      default: return 'Consultar';
    }
  };

  const filteredProviders = providers.filter(provider => {
    const matchesSearch = provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         provider.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         provider.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || provider.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#fdf6ee] flex">
      <Sidebar userType={userType} />
      
      <div className="flex-1 lg:ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Prestadores de Servicios</h1>
              <p className="text-gray-600">Encuentra y contrata profesionales verificados</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="rounded-xl">
                <Filter className="w-4 h-4 mr-2" />
                Filtros Avanzados
              </Button>
              <Button className="bg-[#3c6e51] hover:bg-[#2d5940] text-white rounded-xl">
                <Users className="w-4 h-4 mr-2" />
                Invitar Prestador
              </Button>
            </div>
          </div>
        </header>

        {/* Filters */}
        <div className="p-6 bg-white border-b border-gray-200">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Buscar prestadores por nombre, empresa o servicio..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 rounded-xl border-gray-200"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-48 rounded-xl border-gray-200">
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las categorías</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger className="w-40 rounded-xl border-gray-200">
                  <SelectValue placeholder="Ubicación" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas</SelectItem>
                  <SelectItem value="centro">Centro</SelectItem>
                  <SelectItem value="palermo">Palermo</SelectItem>
                  <SelectItem value="recoleta">Recoleta</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Providers Grid */}
        <main className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredProviders.map((provider) => (
              <Card key={provider.id} className="bg-white rounded-2xl border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="w-16 h-16 border-2 border-gray-100">
                      <AvatarImage src={provider.image} alt={provider.name} />
                      <AvatarFallback className="bg-[#3c6e51] text-white text-lg font-semibold">
                        {provider.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold text-gray-900">{provider.name}</h3>
                        {provider.verified && (
                          <Shield className="w-4 h-4 text-green-600" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{provider.company}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="font-medium">{provider.rating}</span>
                          <span>({provider.reviews} reseñas)</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>{provider.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Badge 
                      className={`${
                        provider.availability === 'Disponible' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      } border-0`}
                    >
                      {provider.availability}
                    </Badge>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">{provider.description}</p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Servicios:</p>
                      <div className="flex flex-wrap gap-2">
                        {provider.services.map((service, index) => (
                          <Badge key={index} variant="outline" className="border-[#3c6e51] text-[#3c6e51] text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">{provider.experience}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">{getPriceText(provider.price)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-gray-600">Verificado</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1 rounded-xl">
                      <Phone className="w-4 h-4 mr-2" />
                      Contactar
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 rounded-xl">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                    <Button size="sm" className="flex-1 bg-[#3c6e51] hover:bg-[#2d5940] text-white rounded-xl">
                      Contratar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProviders.length === 0 && (
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron prestadores</h3>
              <p className="text-gray-600 mb-6">Ajusta los filtros de búsqueda o invita nuevos prestadores.</p>
              <Button className="bg-[#3c6e51] hover:bg-[#2d5940] text-white rounded-xl">
                <Users className="w-4 h-4 mr-2" />
                Invitar Prestadores
              </Button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Services;
