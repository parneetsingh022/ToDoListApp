import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddCategory from './components/AddCategory';
import Header from './components/Header';
import CategoryBox from './components/CategoryBox';
import themeColors, {DARK_THEME} from './Colors';



export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <AddCategory />
      <CategoryBox />
      <StatusBar 
        backgroundColor={themeColors.backgroundPrimary} 
        barStyle={DARK_THEME ? "light-content" : "dark-content"}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: themeColors.backgroundPrimary,
    marginTop: 30,
  },
});