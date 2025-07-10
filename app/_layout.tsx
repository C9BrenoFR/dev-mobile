import { CounterProvider } from '@/context/CounterContext';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <CounterProvider>
        <Drawer>
          <Drawer.Screen
            name="index"
            options={{
              drawerLabel: 'Principal',
              title: 'Principal',
            }}
          />
          <Drawer.Screen
            name="config"
            options={{
              drawerLabel: 'Configuração',
              title: 'Configuração',
            }}
          />
        </Drawer>
      </CounterProvider>
    </GestureHandlerRootView>
  );
}
