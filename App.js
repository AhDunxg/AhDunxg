import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './components/Logo';
import Monhoc from './components/Monhoc';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Họ Và Tên : Nguyễn Khắc Dũng</Text>
      <Text>Lớp: CP 17311</Text>
      <Text>Email: dungnkph25751@fpt.edu.vn</Text>
      <StatusBar style="auto" />
      <Monhoc/>
      <Monhoc/>
      <Monhoc/>
      
    </View>
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
