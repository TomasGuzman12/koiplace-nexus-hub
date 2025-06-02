
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Briefcase, MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#fdf6ee]">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#3c6e51] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">KoiPlace</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/login" className="text-gray-600 hover:text-[#3c6e51] transition-colors">
                Ingresar
              </Link>
              <Link to="/register">
                <Button className="bg-[#3c6e51] hover:bg-[#2d5940] text-white rounded-xl">
                  Registrarse
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Conecta tu ciudad con los mejores
            <span className="text-[#3c6e51]"> profesionales</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Plataforma institucional para municipios que facilita la contratación de servicios 
            profesionales y la gestión integral de eventos públicos y privados.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <Calendar className="w-12 h-12 text-[#3c6e51] mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Explorar Eventos</h3>
              <p className="text-gray-600">Descubre eventos públicos en tu ciudad</p>
              <Link to="/events">
                <Button variant="outline" className="mt-4 w-full rounded-xl border-[#3c6e51] text-[#3c6e51] hover:bg-[#3c6e51] hover:text-white">
                  Ver eventos
                </Button>
              </Link>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <Users className="w-12 h-12 text-[#3c6e51] mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Buscar Servicios</h3>
              <p className="text-gray-600">Encuentra profesionales certificados</p>
              <Link to="/services">
                <Button variant="outline" className="mt-4 w-full rounded-xl border-[#3c6e51] text-[#3c6e51] hover:bg-[#3c6e51] hover:text-white">
                  Explorar servicios
                </Button>
              </Link>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <Briefcase className="w-12 h-12 text-[#3c6e51] mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Para Instituciones</h3>
              <p className="text-gray-600">Gestiona tu municipio eficientemente</p>
              <Link to="/login">
                <Button className="mt-4 w-full rounded-xl bg-[#3c6e51] hover:bg-[#2d5940] text-white">
                  Acceso institucional
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué elegir KoiPlace?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Una plataforma diseñada específicamente para las necesidades de gobiernos locales y ciudadanos
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3c6e51]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-[#3c6e51]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Profesionales Verificados</h3>
              <p className="text-gray-600">Todos los prestadores cuentan con documentación y seguros verificados</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3c6e51]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-[#3c6e51]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Gestión Territorial</h3>
              <p className="text-gray-600">Organiza eventos con mapas interactivos y distribución de espacios</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3c6e51]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-[#3c6e51]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Eventos Integrados</h3>
              <p className="text-gray-600">Gestiona eventos públicos y privados desde una sola plataforma</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#3c6e51] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para transformar tu municipio?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Únete a las instituciones que ya están modernizando la gestión de servicios y eventos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-white text-[#3c6e51] hover:bg-gray-100 rounded-xl px-8">
                Comenzar ahora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/demo">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#3c6e51] rounded-xl px-8">
                Ver demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-[#3c6e51] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">K</span>
                </div>
                <span className="text-xl font-semibold">KoiPlace</span>
              </div>
              <p className="text-gray-400">
                Conectando municipios con profesionales para crear mejores eventos y servicios públicos.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Plataforma</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/events" className="hover:text-white transition-colors">Eventos</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Servicios</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">Acerca de</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/help" className="hover:text-white transition-colors">Centro de ayuda</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contacto</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Términos</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacidad</Link></li>
                <li><Link to="/security" className="hover:text-white transition-colors">Seguridad</Link></li>
                <li><Link to="/careers" className="hover:text-white transition-colors">Carreras</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 KoiPlace. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
