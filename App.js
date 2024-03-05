import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cau1 from "./Cau1"
import Cau2 from "./Cau2"
import Cau3 from "./Cau3"
export default function App() {
  return (
    <Cau2/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
