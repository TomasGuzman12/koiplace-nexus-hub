
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const Register = () => {
  const [userType, setUserType] = useState('');
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 2) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-[#fdf6ee] flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white rounded-2xl shadow-lg border-0">
        <CardHeader className="text-center space-y-4 pb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-[#3c6e51] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">K</span>
            </div>
            <span className="text-2xl font-semibold text-gray-900">KoiPlace</span>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">Crear Cuenta</CardTitle>
          <CardDescription className="text-gray-600">
            Paso {step} de 2 - Únete a nuestra plataforma
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {step === 1 && (
            <>
              <div className="space-y-2">
                <Label htmlFor="userType">Tipo de usuario</Label>
                <Select value={userType} onValueChange={setUserType}>
                  <SelectTrigger className="rounded-xl border-gray-200">
                    <SelectValue placeholder="¿Cómo vas a usar KoiPlace?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="municipality">Municipio / Gobierno Local</SelectItem>
                    <SelectItem value="provider">Prestador de Servicios</SelectItem>
                    <SelectItem value="citizen">Ciudadano</SelectItem>
                    <SelectItem value="organizer">Organizador de Eventos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="name">Nombre completo</Label>
                <Input
                  id="name"
                  placeholder="Juan Pérez"
                  className="rounded-xl border-gray-200"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="rounded-xl border-gray-200"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="organization">Organización</Label>
                <Input
                  id="organization"
                  placeholder="Municipalidad de..."
                  className="rounded-xl border-gray-200"
                />
              </div>
            </>
          )}
          
          {step === 2 && (
            <>
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="rounded-xl border-gray-200"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  className="rounded-xl border-gray-200"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+54 11 1234-5678"
                  className="rounded-xl border-gray-200"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  Acepto los <Link to="/terms" className="text-[#3c6e51] hover:underline">términos y condiciones</Link>
                </label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="newsletter" />
                <label htmlFor="newsletter" className="text-sm text-gray-600">
                  Quiero recibir novedades y actualizaciones
                </label>
              </div>
            </>
          )}
          
          <div className="flex gap-4">
            {step > 1 && (
              <Button 
                variant="outline" 
                onClick={handleBack}
                className="flex-1 rounded-xl border-gray-200"
              >
                Atrás
              </Button>
            )}
            
            {step < 2 ? (
              <Button 
                onClick={handleNext}
                className="flex-1 bg-[#3c6e51] hover:bg-[#2d5940] text-white rounded-xl"
                disabled={!userType}
              >
                Continuar
              </Button>
            ) : (
              <Button 
                className="flex-1 bg-[#3c6e51] hover:bg-[#2d5940] text-white rounded-xl"
                onClick={() => window.location.href = '/dashboard'}
              >
                Crear cuenta
              </Button>
            )}
          </div>
          
          <div className="text-center">
            <span className="text-gray-600">¿Ya tienes cuenta? </span>
            <Link to="/login" className="text-[#3c6e51] hover:underline font-medium">
              Inicia sesión
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
