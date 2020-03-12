import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

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
