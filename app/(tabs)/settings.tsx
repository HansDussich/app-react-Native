import { View, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import {
  Bell,
  Lock,
  Globe,
  Moon,
  Shield,
  HelpCircle,
  Info,
  LogOut,
  ChevronRight,
} from 'lucide-react-native';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function SettingsScreen() {
  const router = useRouter();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const handleLogout = () => {
    router.replace('/auth/login');
  };

  const settingsSections = [
    {
      id: 'preferences',
      title: 'Preferencias',
      items: [
        {
          id: 'notifications',
          label: 'Notificaciones',
          icon: Bell,
          type: 'toggle',
          value: notificationsEnabled,
          onToggle: setNotificationsEnabled,
        },
        {
          id: 'darkmode',
          label: 'Modo Oscuro',
          icon: Moon,
          type: 'toggle',
          value: darkModeEnabled,
          onToggle: setDarkModeEnabled,
        },
        {
          id: 'language',
          label: 'Idioma',
          icon: Globe,
          type: 'navigate',
          value: 'Español',
        },
      ],
    },
    {
      id: 'security',
      title: 'Seguridad',
      items: [
        {
          id: 'password',
          label: 'Cambiar Contraseña',
          icon: Lock,
          type: 'navigate',
        },
        {
          id: 'privacy',
          label: 'Privacidad',
          icon: Shield,
          type: 'navigate',
        },
      ],
    },
    {
      id: 'support',
      title: 'Soporte',
      items: [
        {
          id: 'help',
          label: 'Centro de Ayuda',
          icon: HelpCircle,
          type: 'navigate',
        },
        {
          id: 'about',
          label: 'Acerca de',
          icon: Info,
          type: 'navigate',
          value: 'v1.0.0',
        },
      ],
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-6 py-6">
          <Text className="text-3xl font-bold text-gray-900 mb-8">Ajustes</Text>

          {settingsSections.map((section) => (
            <View key={section.id} className="mb-6">
              <Text className="text-lg font-bold text-gray-900 mb-3">
                {section.title}
              </Text>
              <Card>
                {section.items.map((item, index) => (
                  <View key={item.id}>
                    <TouchableOpacity
                      className="flex-row items-center justify-between py-4"
                      disabled={item.type === 'toggle'}
                      activeOpacity={0.7}>
                      <View className="flex-row items-center flex-1">
                        <View className="w-10 h-10 rounded-xl bg-primary-50 items-center justify-center mr-4">
                          <item.icon size={20} color="#0ea5e9" />
                        </View>
                        <View className="flex-1">
                          <Text className="text-gray-900 font-semibold text-base">
                            {item.label}
                          </Text>
                          {item.value && item.type === 'navigate' && (
                            <Text className="text-gray-500 text-sm mt-1">
                              {item.value}
                            </Text>
                          )}
                        </View>
                      </View>
                      {item.type === 'toggle' && (
                        <Switch
                          value={item.value as boolean}
                          onValueChange={item.onToggle}
                          trackColor={{ false: '#e5e7eb', true: '#7dd3fc' }}
                          thumbColor={item.value ? '#0ea5e9' : '#f3f4f6'}
                        />
                      )}
                      {item.type === 'navigate' && (
                        <ChevronRight size={20} color="#9ca3af" />
                      )}
                    </TouchableOpacity>
                    {index < section.items.length - 1 && (
                      <View className="border-b border-gray-100" />
                    )}
                  </View>
                ))}
              </Card>
            </View>
          ))}

          <View className="mt-4">
            <Button
              title="Cerrar Sesión"
              onPress={handleLogout}
              variant="outline"
              fullWidth
              size="lg"
            />
          </View>

          <Text className="text-center text-gray-500 text-sm mt-8 mb-4">
            Versión 1.0.0
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
