import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar
} from 'react-native';

export default function App() {
  return (
    < >
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={{ padding: 16, backgroundColor: 'green' }}>
          <Text>Search</Text>
        </View>
        <View style={{ padding: 16, backgroundColor: 'blue', flex: 1 }}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
