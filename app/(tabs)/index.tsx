import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, TrendingUp, DollarSign, Activity, ArrowUpRight } from 'lucide-react-native';
import Card from '@/components/ui/Card';

export default function HomeScreen() {
  const stats = [
    { id: 1, label: 'Total Balance', value: '$24,500', icon: DollarSign, color: '#0ea5e9' },
    { id: 2, label: 'Revenue', value: '+$12,000', icon: TrendingUp, color: '#10b981' },
    { id: 3, label: 'Activity', value: '1,234', icon: Activity, color: '#f59e0b' },
  ];

  const recentActivity = [
    { id: 1, title: 'Pago recibido', amount: '+$500', time: 'Hace 2 horas', type: 'income' },
    { id: 2, title: 'Compra realizada', amount: '-$120', time: 'Hace 5 horas', type: 'expense' },
    { id: 3, title: 'Transferencia', amount: '+$350', time: 'Ayer', type: 'income' },
    { id: 4, title: 'Suscripción', amount: '-$19.99', time: 'Hace 2 días', type: 'expense' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-6 py-6">
          <View className="flex-row justify-between items-center mb-8">
            <View>
              <Text className="text-gray-600 text-base mb-1">Bienvenido de nuevo</Text>
              <Text className="text-3xl font-bold text-gray-900">Dashboard</Text>
            </View>
            <TouchableOpacity className="bg-white p-3 rounded-full shadow-sm">
              <Bell size={24} color="#374151" />
            </TouchableOpacity>
          </View>

          <View className="mb-6">
            {stats.map((stat) => (
              <Card key={stat.id} className="mb-4">
                <View className="flex-row items-center justify-between">
                  <View>
                    <Text className="text-gray-600 text-sm mb-2">{stat.label}</Text>
                    <Text className="text-3xl font-bold text-gray-900">{stat.value}</Text>
                  </View>
                  <View
                    className="w-16 h-16 rounded-2xl items-center justify-center"
                    style={{ backgroundColor: `${stat.color}20` }}>
                    <stat.icon size={32} color={stat.color} />
                  </View>
                </View>
              </Card>
            ))}
          </View>

          <View className="mb-6">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-xl font-bold text-gray-900">
                Actividad Reciente
              </Text>
              <TouchableOpacity>
                <Text className="text-primary-600 font-semibold text-sm">Ver todo</Text>
              </TouchableOpacity>
            </View>

            <Card>
              {recentActivity.map((activity, index) => (
                <View key={activity.id}>
                  <View className="flex-row items-center justify-between py-4">
                    <View className="flex-1">
                      <Text className="text-gray-900 font-semibold text-base mb-1">
                        {activity.title}
                      </Text>
                      <Text className="text-gray-500 text-sm">{activity.time}</Text>
                    </View>
                    <View className="flex-row items-center">
                      <Text
                        className={`font-bold text-lg ${
                          activity.type === 'income' ? 'text-green-600' : 'text-red-600'
                        }`}>
                        {activity.amount}
                      </Text>
                      <ArrowUpRight
                        size={16}
                        color={activity.type === 'income' ? '#10b981' : '#ef4444'}
                        className="ml-1"
                      />
                    </View>
                  </View>
                  {index < recentActivity.length - 1 && (
                    <View className="border-b border-gray-100" />
                  )}
                </View>
              ))}
            </Card>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
