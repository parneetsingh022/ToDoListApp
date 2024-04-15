import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddCategory from './components/AddCategory';
import Header from './components/Header';
import CategoryBox from './components/CategoryBox';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <AddCategory />
      <CategoryBox />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F8F7F7',
    marginTop: 30,
  },
});