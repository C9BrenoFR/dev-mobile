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
              drawerLabel: 'Home',
              title: 'Home',
            }}
          />
          <Drawer.Screen
            name="ShowLess"
            options={{
              drawerLabel: 'Pokemon Show Less',
              title: 'Pokemon Show Less',
            }}
          />
          <Drawer.Screen
            name="ShowMore"
            options={{
              drawerLabel: 'Pokemon Show More',
              title: 'Pokemon Show More',
            }}
          />
          <Drawer.Screen
            name="homeSquare"
            options={{
              drawerLabel: 'Squares Change',
              title: 'Squares Change',
            }}
          />

          <Drawer.Screen
            name="PokemonDatabase"
            options={{
              drawerLabel: 'Lista de pokemons',
              title: 'Lista de pokemons',
            }}
          />

          <Drawer.Screen
            name="UfjfMenu"
            options={{
              drawerLabel: 'Menu UFJF',
              title: 'Menu UFJF',
            }}
          />

          <Drawer.Screen
            name="counterLess"
            options={{
              drawerLabel: 'Context + 1',
              title: 'Contexto Contador',
            }}
          />
          <Drawer.Screen
            name="counterMore"
            options={{
              drawerLabel: 'Context +5',
              title: 'Contexto Contador',
            }}
          />
        </Drawer>
      </CounterProvider>
    </GestureHandlerRootView>
  );
}
