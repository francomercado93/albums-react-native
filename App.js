import React from 'react';
import { StyleSheet, View } from 'react-native';
import AlbumList from './src/components/AlbumList';
import Header from './src/components/header';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ActivityIndicator size="large" style={{ marginTop: 200 }} /> */}
      <Header headerText="Albums!" />
      <AlbumList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
