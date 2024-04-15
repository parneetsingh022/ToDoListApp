import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddCategory from './components/AddCategory';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <AddCategory />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {

    backgroundColor: '#fff',
    marginTop: 30,
  },
});