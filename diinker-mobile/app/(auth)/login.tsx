import { router } from 'expo-router';
import { Text, Pressable } from 'react-native';

export default function Login() {
  const handleLogin = () => {
    router.replace('/');
  }
  return (
    <Pressable onPress={handleLogin}>
      <Text>Login Here</Text>
    </Pressable>
  );
}