
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Building, 
  Save, 
  Upload,
  Star,
  Calendar,
  Shield,
  Award,
  Briefcase
} from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Profile = () => {
  const [userType] = useState<'municipality' | 'provider' | 'citizen' | 'organizer'>('municipality');
  const [activeTab, setActiveTab] = useState('general');

  const municipalityData = {
    name: 'María González',
    position: 'Secretaria de Cultura',
    organization: 'Municipalidad de San Martín',
    email: 'maria.gonzalez@sanmartin.gob.ar',
    phone: '+54 11 4567-8901',
    address: 'Av. San Martín 1234, San Martín, Buenos Aires',
    description: 'Responsable de la gestión cultural del municipio con más de 10 años de experiencia en organización de eventos públicos.',
    department: 'Secretaría de Cultura y Educación',
    joinDate: '2019-03-15',
    avatar: '/placeholder.svg'
  };

  const recentActivity = [
    {
      id: 1,
      action: 'Creó evento',
      description: 'Festival de la Primavera 2024',
      date: '2 días atrás',
      type: 'event'
    },
    {
      id: 2,
      action: 'Contrató servicio',
      description: 'Sonido Pro para evento cultural',
      date: '1 semana atrás',
      type: 'contract'
    },
    {
      id: 3,
      action: 'Aprobó postulación',
      description: 'Catering Delicias para Feria de Emprendedores',
      date: '2 semanas atrás',
      type: 'approval'
    }
  ];

  const stats = [
    { label: 'Eventos Organizados', value: '23', icon: Calendar },
    { label: 'Prestadores Contratados', value: '45', icon: Briefcase },
    { label: 'Satisfacción Promedio', value: '4.8', icon: Star },
    { label: 'Años de Experiencia', value: '5', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-[#fdf6ee] flex">
      <Sidebar userType={userType} />
      
      <div className="flex-1 lg:ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Mi Perfil</h1>
              <p className="text-gray-600">Gestiona tu información personal y configuración</p>
            </div>
            <Button className="bg-[#3c6e51] hover:bg-[#2d5940] text-white rounded-xl">
              <Save className="w-4 h-4 mr-2" />
              Guardar Cambios
            </Button>
          </div>
        </header>

        <main className="p-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Profile Card */}
            <Card className="lg:col-span-1 bg-white rounded-2xl border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  <Avatar className="w-24 h-24 mx-auto border-4 border-gray-100">
                    <AvatarImage src={municipalityData.avatar} alt={municipalityData.name} />
                    <AvatarFallback className="bg-[#3c6e51] text-white text-2xl font-semibold">
                      {municipalityData.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <Button 
                    size="sm" 
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 rounded-lg px-3"
                  >
                    <Upload className="w-3 h-3 mr-1" />
                    Cambiar
                  </Button>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{municipalityData.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{municipalityData.position}</p>
                <p className="text-sm text-[#3c6e51] font-medium mb-4">{municipalityData.organization}</p>
                
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-600 font-medium">Cuenta Verificada</span>
                </div>
                
                <div className="text-sm text-gray-500">
                  <p className="flex items-center justify-center gap-1 mb-1">
                    <Calendar className="w-3 h-3" />
                    Miembro desde {new Date(municipalityData.joinDate).getFullYear()}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Stats Grid */}
            <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="bg-white rounded-2xl border-0 shadow-md">
                    <CardContent className="p-4 text-center">
                      <div className="w-10 h-10 bg-[#3c6e51]/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                        <Icon className="w-5 h-5 text-[#3c6e51]" />
                      </div>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-xs text-gray-600">{stat.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Main Content */}
          <Card className="mt-6 bg-white rounded-2xl border-0 shadow-md">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full grid grid-cols-4 bg-gray-50 rounded-xl m-6 mb-0">
                <TabsTrigger value="general" className="rounded-lg">Información General</TabsTrigger>
                <TabsTrigger value="organization" className="rounded-lg">Organización</TabsTrigger>
                <TabsTrigger value="activity" className="rounded-lg">Actividad</TabsTrigger>
                <TabsTrigger value="security" className="rounded-lg">Seguridad</TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="p-6 pt-4">
                <CardHeader className="px-0 pt-0">
                  <CardTitle>Información Personal</CardTitle>
                  <CardDescription>Actualiza tu información personal y de contacto</CardDescription>
                </CardHeader>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input id="name" defaultValue={municipalityData.name} className="rounded-xl" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="position">Cargo</Label>
                    <Input id="position" defaultValue={municipalityData.position} className="rounded-xl" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue={municipalityData.email} className="rounded-xl" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input id="phone" defaultValue={municipalityData.phone} className="rounded-xl" />
                  </div>
                  
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="address">Dirección</Label>
                    <Input id="address" defaultValue={municipalityData.address} className="rounded-xl" />
                  </div>
                  
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="description">Descripción</Label>
                    <Textarea 
                      id="description" 
                      defaultValue={municipalityData.description}
                      className="rounded-xl h-24 resize-none"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="organization" className="p-6 pt-4">
                <CardHeader className="px-0 pt-0">
                  <CardTitle>Información Organizacional</CardTitle>
                  <CardDescription>Detalles sobre tu organización y departamento</CardDescription>
                </CardHeader>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organización</Label>
                    <Input id="organization" defaultValue={municipalityData.organization} className="rounded-xl" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="department">Departamento</Label>
                    <Select>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Seleccionar departamento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="culture">Secretaría de Cultura y Educación</SelectItem>
                        <SelectItem value="development">Secretaría de Desarrollo</SelectItem>
                        <SelectItem value="social">Área Social</SelectItem>
                        <SelectItem value="sports">Secretaría de Deportes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="jurisdiction">Jurisdicción</Label>
                    <Input id="jurisdiction" placeholder="Área de responsabilidad" className="rounded-xl" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="level">Nivel de Usuario</Label>
                    <Select>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Nivel de acceso" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Administrador</SelectItem>
                        <SelectItem value="manager">Gestor</SelectItem>
                        <SelectItem value="operator">Operador</SelectItem>
                        <SelectItem value="viewer">Consulta</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="activity" className="p-6 pt-4">
                <CardHeader className="px-0 pt-0">
                  <CardTitle>Actividad Reciente</CardTitle>
                  <CardDescription>Historial de acciones y eventos</CardDescription>
                </CardHeader>
                
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center p-4 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-[#3c6e51]/10 rounded-full flex items-center justify-center mr-4">
                        {activity.type === 'event' && <Calendar className="w-5 h-5 text-[#3c6e51]" />}
                        {activity.type === 'contract' && <Briefcase className="w-5 h-5 text-[#3c6e51]" />}
                        {activity.type === 'approval' && <Shield className="w-5 h-5 text-[#3c6e51]" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{activity.action}</p>
                        <p className="text-sm text-gray-600">{activity.description}</p>
                      </div>
                      <span className="text-sm text-gray-500">{activity.date}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="security" className="p-6 pt-4">
                <CardHeader className="px-0 pt-0">
                  <CardTitle>Configuración de Seguridad</CardTitle>
                  <CardDescription>Gestiona tu contraseña y configuración de seguridad</CardDescription>
                </CardHeader>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Contraseña actual</Label>
                      <Input id="current-password" type="password" className="rounded-xl" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="new-password">Nueva contraseña</Label>
                      <Input id="new-password" type="password" className="rounded-xl" />
                    </div>
                    
                    <div className="md:col-span-2 space-y-2">
                      <Label htmlFor="confirm-password">Confirmar nueva contraseña</Label>
                      <Input id="confirm-password" type="password" className="rounded-xl" />
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="font-medium text-gray-900 mb-4">Configuración de Notificaciones</h4>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="rounded" defaultChecked />
                        <span className="text-sm text-gray-700">Notificaciones por email de nuevos eventos</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="rounded" defaultChecked />
                        <span className="text-sm text-gray-700">Alertas de postulaciones pendientes</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm text-gray-700">Recordatorios de eventos próximos</span>
                      </label>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Profile;
