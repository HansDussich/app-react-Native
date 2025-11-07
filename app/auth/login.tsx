import { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LogIn, Mail, Lock } from 'lucide-react-native';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.replace('/(tabs)');
    }, 1500);
  };

  const navigateToRegister = () => {
    router.push('/auth/register');
  };

  return (
    <SafeAreaView className="flex-1 bg-gradient-to-br from-primary-50 to-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <View className="flex-1 px-6 py-12 justify-center">
            <View className="items-center mb-12">
              <View className="bg-primary-600 w-20 h-20 rounded-3xl items-center justify-center mb-6">
                <LogIn size={40} color="white" />
              </View>
              <Text className="text-4xl font-bold text-gray-900 mb-2">
                Bienvenido
              </Text>
              <Text className="text-base text-gray-600 text-center">
                Inicia sesión para continuar
              </Text>
            </View>

            <View className="bg-white rounded-3xl p-6 shadow-lg mb-6">
              <View className="mb-2">
                <View className="flex-row items-center mb-4">
                  <Mail size={20} color="#0ea5e9" />
                  <Text className="ml-2 text-sm text-gray-600 font-medium">
                    Correo Electrónico
                  </Text>
                </View>
                <Input
                  placeholder="ejemplo@correo.com"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              <View className="mb-6">
                <View className="flex-row items-center mb-4">
                  <Lock size={20} color="#0ea5e9" />
                  <Text className="ml-2 text-sm text-gray-600 font-medium">
                    Contraseña
                  </Text>
                </View>
                <Input
                  placeholder="••••••••"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                />
              </View>

              <TouchableOpacity className="mb-6">
                <Text className="text-primary-600 text-sm font-semibold text-right">
                  ¿Olvidaste tu contraseña?
                </Text>
              </TouchableOpacity>

              <Button
                title="Iniciar Sesión"
                onPress={handleLogin}
                loading={loading}
                fullWidth
                size="lg"
              />
            </View>

            <View className="flex-row justify-center items-center">
              <Text className="text-gray-600 text-base">
                ¿No tienes cuenta?{' '}
              </Text>
              <TouchableOpacity onPress={navigateToRegister}>
                <Text className="text-primary-600 font-bold text-base">
                  Regístrate
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
