import { TouchableOpacity, Text, ActivityIndicator, View } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary-600 active:bg-primary-700';
      case 'secondary':
        return 'bg-gray-600 active:bg-gray-700';
      case 'outline':
        return 'bg-transparent border-2 border-primary-600';
      default:
        return 'bg-primary-600 active:bg-primary-700';
    }
  };

  const getTextStyles = () => {
    return variant === 'outline' ? 'text-primary-600' : 'text-white';
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'py-2 px-4';
      case 'md':
        return 'py-3 px-6';
      case 'lg':
        return 'py-4 px-8';
      default:
        return 'py-3 px-6';
    }
  };

  const getTextSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'text-sm';
      case 'md':
        return 'text-base';
      case 'lg':
        return 'text-lg';
      default:
        return 'text-base';
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      className={`
        ${getVariantStyles()}
        ${getSizeStyles()}
        ${fullWidth ? 'w-full' : ''}
        rounded-xl
        ${disabled || loading ? 'opacity-50' : ''}
        flex-row items-center justify-center
      `}>
      {loading ? (
        <ActivityIndicator color={variant === 'outline' ? '#0ea5e9' : 'white'} />
      ) : (
        <Text className={`${getTextStyles()} ${getTextSizeStyles()} font-semibold`}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
