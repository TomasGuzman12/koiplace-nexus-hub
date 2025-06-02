
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Login = () => {
  const [userType, setUserType] = useState('');

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
          <CardTitle className="text-2xl font-bold text-gray-900">Iniciar Sesión</CardTitle>
          <CardDescription className="text-gray-600">
            Accede a tu cuenta para gestionar eventos y servicios
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="userType">Tipo de usuario</Label>
            <Select value={userType} onValueChange={setUserType}>
              <SelectTrigger className="rounded-xl border-gray-200">
                <SelectValue placeholder="Selecciona tu rol" />
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
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              className="rounded-xl border-gray-200"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="rounded-xl border-gray-200"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="rounded" />
              <span className="text-gray-600">Recordarme</span>
            </label>
            <Link to="/forgot-password" className="text-sm text-[#3c6e51] hover:underline">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          
          <Button 
            className="w-full bg-[#3c6e51] hover:bg-[#2d5940] text-white rounded-xl py-6 text-lg font-medium"
            onClick={() => window.location.href = '/dashboard'}
          >
            Iniciar Sesión
          </Button>
          
          <div className="text-center">
            <span className="text-gray-600">¿No tienes cuenta? </span>
            <Link to="/register" className="text-[#3c6e51] hover:underline font-medium">
              Regístrate aquí
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
