import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

const students = [
  {
    id: 'GJGH001',
    name: '오은하',
    school: `공주여자중학교`,
  },
  {
    id: 'GJGH002',
    name: '김경민',
    school: `공주여자고등학교`,
  },
  {
    id: 'GJGH003',
    name: '신태섭',
    school: `공주영명고등학교`,
  },
  {
    id: 'GJGH004',
    name: '홍민기',
    school: `공주영명고등학교`,
  },
  {
    id: 'GJGH005',
    name: '정예림',
    school: `공주여자고등학교`,
  },
  {
    id: 'GJGH006',
    name: '방효진',
    school: `공주여자고등학교`,
  },
  {
    id: 'GJGH007',
    name: '오민형',
    school: `공주영명고등학교`,
  },
];

const Item = ({name}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
    </View>
  );
};

const App = () => {
  const renderItem = ({item}) => {
    return <Item name={item.name} />; // {}를 쓴 후 return 써야함 안그러면 화면에 안나옴
  };
  return (
    // SafeAreaView 안에 FlatList가 있는데, 우리가 데이터 7개를 넣어줌으로서 데이터가 다 끝날 때까지 돌아간다.
    <SafeAreaView style={styles.container}>
      <FlatList
        data={students}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#999',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    color: `#fff`,
  },
});

export default App;
