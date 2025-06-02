
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Users, 
  Briefcase, 
  TrendingUp, 
  MapPin, 
  Clock,
  Plus,
  Filter,
  Search
} from 'lucide-react';
import { Input } from '@/components/ui/input';

const Dashboard = () => {
  const [userType] = useState<'municipality' | 'provider' | 'citizen' | 'organizer'>('municipality');

  const municipalityStats = [
    { title: 'Eventos Activos', value: '12', change: '+2 esta semana', icon: Calendar },
    { title: 'Prestadores Registrados', value: '148', change: '+8 este mes', icon: Users },
    { title: 'Contrataciones', value: '34', change: '+12 este mes', icon: Briefcase },
    { title: 'Satisfacción', value: '4.8', change: '+0.2 este mes', icon: TrendingUp },
  ];

  const recentEvents = [
    {
      id: 1,
      name: 'Festival de la Primavera',
      date: '15 Nov 2024',
      location: 'Plaza Central',
      status: 'active',
      participants: 24
    },
    {
      id: 2,
      name: 'Feria de Emprendedores',
      date: '22 Nov 2024',
      location: 'Centro Cultural',
      status: 'planning',
      participants: 18
    },
    {
      id: 3,
      name: 'Concierto Navideño',
      date: '20 Dic 2024',
      location: 'Anfiteatro Municipal',
      status: 'open',
      participants: 8
    }
  ];

  const recentApplications = [
    {
      id: 1,
      provider: 'Sonido Pro',
      service: 'Equipos de Audio',
      event: 'Festival de la Primavera',
      status: 'pending',
      date: '2 horas'
    },
    {
      id: 2,
      provider: 'Catering Delicias',
      service: 'Servicios de Catering',
      event: 'Feria de Emprendedores',
      status: 'approved',
      date: '1 día'
    },
    {
      id: 3,
      provider: 'Decoraciones Luna',
      service: 'Ambientación',
      event: 'Concierto Navideño',
      status: 'review',
      date: '3 días'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'planning': return 'bg-blue-100 text-blue-800';
      case 'open': return 'bg-yellow-100 text-yellow-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'review': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Activo';
      case 'planning': return 'Planificando';
      case 'open': return 'Abierto';
      case 'pending': return 'Pendiente';
      case 'approved': return 'Aprobado';
      case 'review': return 'En revisión';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-[#fdf6ee] flex">
      <Sidebar userType={userType} />
      
      <div className="flex-1 lg:ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard Municipal</h1>
              <p className="text-gray-600">Gestiona eventos y servicios de tu municipio</p>
            </div>
            <Button className="bg-[#3c6e51] hover:bg-[#2d5940] text-white rounded-xl">
              <Plus className="w-4 h-4 mr-2" />
              Nuevo Evento
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {municipalityStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="bg-white rounded-2xl border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                        <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                        <p className="text-sm text-green-600 mt-1">{stat.change}</p>
                      </div>
                      <div className="w-12 h-12 bg-[#3c6e51]/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#3c6e51]" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Recent Events */}
            <Card className="bg-white rounded-2xl border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg font-semibold text-gray-900">Eventos Recientes</CardTitle>
                    <CardDescription className="text-gray-600">Gestiona tus eventos activos</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-lg">
                    <Filter className="w-4 h-4 mr-2" />
                    Filtrar
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentEvents.map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{event.name}</h4>
                      <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {event.location}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-3 h-3 mr-1" />
                          {event.participants} participantes
                        </div>
                      </div>
                    </div>
                    <Badge className={`${getStatusColor(event.status)} border-0`}>
                      {getStatusText(event.status)}
                    </Badge>
                  </div>
                ))}
                <Button variant="outline" className="w-full rounded-xl mt-4">
                  Ver todos los eventos
                </Button>
              </CardContent>
            </Card>

            {/* Recent Applications */}
            <Card className="bg-white rounded-2xl border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg font-semibold text-gray-900">Postulaciones Recientes</CardTitle>
                    <CardDescription className="text-gray-600">Revisa las solicitudes de prestadores</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-lg">
                    <Search className="w-4 h-4 mr-2" />
                    Buscar
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentApplications.map((application) => (
                  <div key={application.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{application.provider}</h4>
                      <p className="text-sm text-gray-600">{application.service}</p>
                      <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                        <span>{application.event}</span>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          hace {application.date}
                        </div>
                      </div>
                    </div>
                    <Badge className={`${getStatusColor(application.status)} border-0`}>
                      {getStatusText(application.status)}
                    </Badge>
                  </div>
                ))}
                <Button variant="outline" className="w-full rounded-xl mt-4">
                  Ver todas las postulaciones
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="bg-white rounded-2xl border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">Acciones Rápidas</CardTitle>
              <CardDescription className="text-gray-600">Tareas frecuentes de gestión municipal</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-auto p-6 rounded-xl flex flex-col items-center space-y-2 hover:bg-[#3c6e51]/5 hover:border-[#3c6e51]">
                  <Calendar className="w-8 h-8 text-[#3c6e51]" />
                  <div className="text-center">
                    <p className="font-medium text-gray-900">Crear Evento</p>
                    <p className="text-sm text-gray-500">Nuevo evento público o privado</p>
                  </div>
                </Button>
                
                <Button variant="outline" className="h-auto p-6 rounded-xl flex flex-col items-center space-y-2 hover:bg-[#3c6e51]/5 hover:border-[#3c6e51]">
                  <Users className="w-8 h-8 text-[#3c6e51]" />
                  <div className="text-center">
                    <p className="font-medium text-gray-900">Buscar Prestadores</p>
                    <p className="text-sm text-gray-500">Explorar servicios disponibles</p>
                  </div>
                </Button>
                
                <Button variant="outline" className="h-auto p-6 rounded-xl flex flex-col items-center space-y-2 hover:bg-[#3c6e51]/5 hover:border-[#3c6e51]">
                  <Briefcase className="w-8 h-8 text-[#3c6e51]" />
                  <div className="text-center">
                    <p className="font-medium text-gray-900">Gestionar Contratos</p>
                    <p className="text-sm text-gray-500">Revisar contrataciones</p>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
