import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddCategory from './components/AddCategory';

export default function App() {
  return (
    <View style={styles.container}>
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