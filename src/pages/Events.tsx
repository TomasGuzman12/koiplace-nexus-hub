
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Plus, 
  Filter, 
  Search,
  Clock,
  Eye,
  Edit,
  Share2
} from 'lucide-react';

const Events = () => {
  const [userType] = useState<'municipality' | 'provider' | 'citizen' | 'organizer'>('municipality');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const events = [
    {
      id: 1,
      name: 'Festival de la Primavera 2024',
      description: 'Celebración anual con actividades familiares, música en vivo y gastronomía local.',
      date: '15 Nov 2024',
      time: '10:00 - 22:00',
      location: 'Plaza Central',
      organizer: 'Municipalidad',
      status: 'active',
      category: 'Cultural',
      participants: 24,
      maxParticipants: 50,
      isPublic: true,
      budget: '$120,000',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'Feria de Emprendedores',
      description: 'Espacio para emprendedores locales para mostrar y vender sus productos.',
      date: '22 Nov 2024',
      time: '09:00 - 18:00',
      location: 'Centro Cultural Municipal',
      organizer: 'Secretaría de Desarrollo',
      status: 'planning',
      category: 'Comercial',
      participants: 18,
      maxParticipants: 30,
      isPublic: true,
      budget: '$80,000',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'Concierto Navideño',
      description: 'Concierto de fin de año con artistas locales y coro municipal.',
      date: '20 Dic 2024',
      time: '20:00 - 23:30',
      location: 'Anfiteatro Municipal',
      organizer: 'Secretaría de Cultura',
      status: 'open',
      category: 'Musical',
      participants: 8,
      maxParticipants: 25,
      isPublic: true,
      budget: '$200,000',
      image: '/placeholder.svg'
    },
    {
      id: 4,
      name: 'Capacitación Digital Seniors',
      description: 'Taller de alfabetización digital para adultos mayores.',
      date: '28 Nov 2024',
      time: '14:00 - 17:00',
      location: 'Centro de Jubilados',
      organizer: 'Área Social',
      status: 'confirmed',
      category: 'Educativo',
      participants: 12,
      maxParticipants: 20,
      isPublic: true,
      budget: '$25,000',
      image: '/placeholder.svg'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'planning': return 'bg-blue-100 text-blue-800';
      case 'open': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-purple-100 text-purple-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Activo';
      case 'planning': return 'Planificando';
      case 'open': return 'Abierto';
      case 'confirmed': return 'Confirmado';
      case 'cancelled': return 'Cancelado';
      default: return status;
    }
  };

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || event.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-[#fdf6ee] flex">
      <Sidebar userType={userType} />
      
      <div className="flex-1 lg:ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Gestión de Eventos</h1>
              <p className="text-gray-600">Organiza y administra eventos públicos y privados</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="rounded-xl">
                <Filter className="w-4 h-4 mr-2" />
                Filtros Avanzados
              </Button>
              <Button className="bg-[#3c6e51] hover:bg-[#2d5940] text-white rounded-xl">
                <Plus className="w-4 h-4 mr-2" />
                Nuevo Evento
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
                  placeholder="Buscar eventos por nombre o categoría..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 rounded-xl border-gray-200"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-40 rounded-xl border-gray-200">
                  <SelectValue placeholder="Estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="active">Activo</SelectItem>
                  <SelectItem value="planning">Planificando</SelectItem>
                  <SelectItem value="open">Abierto</SelectItem>
                  <SelectItem value="confirmed">Confirmado</SelectItem>
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger className="w-40 rounded-xl border-gray-200">
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas</SelectItem>
                  <SelectItem value="cultural">Cultural</SelectItem>
                  <SelectItem value="commercial">Comercial</SelectItem>
                  <SelectItem value="musical">Musical</SelectItem>
                  <SelectItem value="educational">Educativo</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <main className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="bg-white rounded-2xl border-0 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-[#3c6e51]/20 to-[#3c6e51]/10 flex items-center justify-center">
                  <Calendar className="w-12 h-12 text-[#3c6e51]" />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{event.name}</h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{event.description}</p>
                    </div>
                    <Badge className={`${getStatusColor(event.status)} border-0 ml-3`}>
                      {getStatusText(event.status)}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-gray-400" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-gray-400" />
                      {event.participants}/{event.maxParticipants} participantes
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="border-[#3c6e51] text-[#3c6e51]">
                        {event.category}
                      </Badge>
                      {event.isPublic && (
                        <Badge variant="outline" className="border-blue-500 text-blue-600">
                          Público
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-lg">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-lg">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-lg">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Presupuesto:</span>
                      <span className="font-medium text-gray-900">{event.budget}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron eventos</h3>
              <p className="text-gray-600 mb-6">Ajusta los filtros o crea un nuevo evento.</p>
              <Button className="bg-[#3c6e51] hover:bg-[#2d5940] text-white rounded-xl">
                <Plus className="w-4 h-4 mr-2" />
                Crear Primer Evento
              </Button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Events;
