import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return ( 
    <View
      style={style.container}
    >
      <Text style={{ fontWeight: 'bold' }}>Olá</Text>
      <Text>Olá</Text>
      <Text>Olá</Text>
      <Text>Olá</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  }
})
