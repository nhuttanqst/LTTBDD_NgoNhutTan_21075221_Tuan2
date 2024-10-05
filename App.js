import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const App = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState("");

  const solveQuadraticEquation = () => {
    const A = parseFloat(a);
    const B = parseFloat(b);
    const C = parseFloat(c);

    if (isNaN(A) || isNaN(B) || isNaN(C)) {
      setResult("Vui lòng nhập đầy đủ các hệ số.");
      return;
    }

    const discriminant = B * B - 4 * A * C;

    if (discriminant > 0) {
      const root1 = (-B + Math.sqrt(discriminant)) / (2 * A);
      const root2 = (-B - Math.sqrt(discriminant)) / (2 * A);
      setResult(`Nghiệm là: ${root1.toFixed(2)} và ${root2.toFixed(2)}`);
    } else if (discriminant === 0) {
      const root = -B / (2 * A);
      setResult(`Nghiệm kép là: ${root.toFixed(2)}`);
    } else {
      setResult("Phương trình vô nghiệm.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giải Phương Trình Bậc 2</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập a"
        keyboardType="numeric"
        value={a}
        onChangeText={setA}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập b"
        keyboardType="numeric"
        value={b}
        onChangeText={setB}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập c"
        keyboardType="numeric"
        value={c}
        onChangeText={setC}
      />
      <Button title="Tính" onPress={solveQuadraticEquation} />
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  result: {
    marginTop: 16,
    fontSize: 18,
    textAlign: "center",
  },
});

export default App;
