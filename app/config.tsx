import PresenceItem from "@/components/PresenceItem";
import { Presence } from "@/types/Presence";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const getCurrentDate = (): string => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  const hours = String(today.getHours()).padStart(2, '0');
  const minutes = String(today.getMinutes()).padStart(2, '0');
  const seconds = String(today.getSeconds()).padStart(2, '0');
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};

export default function HomeScreen() {
  const [matricula, setMatricula] = useState('');
  const [presence, setPresence] = useState<Presence[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await AsyncStorage.getItem('@presence')
      const data_presence: Presence[] = data ? JSON.parse(data) : []
      setPresence(data_presence)
    }
    loadData();
  }, [setPresence]);

  const handleSubmit = async () => {
    setPresence([...presence, { student_id: matricula, date: getCurrentDate() }]);
    await AsyncStorage.setItem('@presence', JSON.stringify(presence));
    setMatricula('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Matricula do aluno</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite sua matrícula"
        value={matricula}
        onChangeText={setMatricula}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
      <FlatList
        style={{ width: '100%' }}
        data={presence}
        keyExtractor={(item) => item.student_id}
        renderItem={({ item }) => <PresenceItem key={item.student_id} presence={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 12,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
