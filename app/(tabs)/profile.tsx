import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Mail, Phone, MapPin, Edit, Camera } from 'lucide-react-native';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function ProfileScreen() {
  const userInfo = [
    { id: 1, label: 'Email', value: 'usuario@ejemplo.com', icon: Mail },
    { id: 2, label: 'Teléfono', value: '+52 55 1234 5678', icon: Phone },
    { id: 3, label: 'Ubicación', value: 'Ciudad de México, México', icon: MapPin },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-6 py-6">
          <View className="flex-row justify-between items-center mb-8">
            <Text className="text-3xl font-bold text-gray-900">Mi Perfil</Text>
            <TouchableOpacity className="bg-white p-3 rounded-full shadow-sm">
              <Edit size={20} color="#374151" />
            </TouchableOpacity>
          </View>

          <Card className="items-center mb-6">
            <View className="relative mb-4">
              <View className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 items-center justify-center">
                <Text className="text-white text-5xl font-bold">JD</Text>
              </View>
              <TouchableOpacity className="absolute bottom-0 right-0 bg-primary-600 w-10 h-10 rounded-full items-center justify-center shadow-lg">
                <Camera size={18} color="white" />
              </TouchableOpacity>
            </View>
            <Text className="text-2xl font-bold text-gray-900 mb-1">
              Juan Pérez
            </Text>
            <Text className="text-gray-600 text-base mb-4">@juanperez</Text>
            <View className="flex-row gap-3">
              <Button title="Editar Perfil" onPress={() => {}} size="sm" />
              <Button
                title="Compartir"
                onPress={() => {}}
                variant="outline"
                size="sm"
              />
            </View>
          </Card>

          <View className="mb-6">
            <Text className="text-xl font-bold text-gray-900 mb-4">
              Información Personal
            </Text>
            <Card>
              {userInfo.map((info, index) => (
                <View key={info.id}>
                  <View className="flex-row items-center py-4">
                    <View className="w-10 h-10 rounded-xl bg-primary-50 items-center justify-center mr-4">
                      <info.icon size={20} color="#0ea5e9" />
                    </View>
                    <View className="flex-1">
                      <Text className="text-gray-600 text-sm mb-1">
                        {info.label}
                      </Text>
                      <Text className="text-gray-900 font-semibold text-base">
                        {info.value}
                      </Text>
                    </View>
                  </View>
                  {index < userInfo.length - 1 && (
                    <View className="border-b border-gray-100" />
                  )}
                </View>
              ))}
            </Card>
          </View>

          <View className="mb-6">
            <Text className="text-xl font-bold text-gray-900 mb-4">
              Estadísticas
            </Text>
            <View className="flex-row gap-3">
              <Card className="flex-1">
                <Text className="text-gray-600 text-sm mb-2">Proyectos</Text>
                <Text className="text-3xl font-bold text-gray-900 mb-1">24</Text>
                <Text className="text-green-600 text-xs font-semibold">+12% este mes</Text>
              </Card>
              <Card className="flex-1">
                <Text className="text-gray-600 text-sm mb-2">Completados</Text>
                <Text className="text-3xl font-bold text-gray-900 mb-1">18</Text>
                <Text className="text-primary-600 text-xs font-semibold">75% tasa</Text>
              </Card>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
