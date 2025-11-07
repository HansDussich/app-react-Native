import { View, ViewStyle } from 'react-native';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <View className={`bg-white rounded-2xl shadow-sm p-6 ${className}`}>
      {children}
    </View>
  );
}
