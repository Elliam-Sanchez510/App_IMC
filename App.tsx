import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, } from 'react-native';


export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("")

  const IMCcalcular= () => {
   const heightInmeter = parseFloat (altura) / 100;
   const pesoKg = parseFloat(peso)

    const IMC = pesoKg / (heightInmeter * heightInmeter)
    if (IMC < 18.5) {
      return setResultado (`Su peso es de ${IMC}, usted se encuentra en nivel de Bajo peso `);
    } else if (IMC > 18.5 && IMC < 24.9) {
      return setResultado(
      `Su peso es de ${IMC}, usted se encuentra en nivel de peso normal`);
    }else if (IMC > 25.0 && IMC < 29.9) {
      return setResultado(
      `Su Peso es de ${IMC}, usted se encuentra en el nivel de sobrepeso`);
    }else if (IMC > 30.0 && IMC) {
      return setResultado(' Su peso es de ' + IMC + ' Tiene obsidad ');
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calcular IMC</Text>

      <TextInput
      style={styles.input}
      value={peso}
      placeholder="Peso (kg)"
      style={styles.TextInput}
      placeholderTextColor='gray'
      keyboardType='numeric'
      onChangeText={(e) => setPeso(e)}
      />
      <TextInput
      style={styles.input}
      value={altura}
      placeholder="Altura (cm)"
      style={styles.TextInput}
      placeholderTextColor='gray'
      keyboardType='numeric'
      onChangeText={(e) => setAltura(e)}
      />
    <View>
      <Button
      title='Calcular IMC'
      onPress={() => IMCcalcular()}
      />
      <TextInput
      style={styles.result}
      value={resultado}
      editable={false}
      multiline={true}
      />
    </View>

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
  titulo: {
    fontSize: 30,
    color: '#417dc1',
    fontWeight: 'bold',
  },

  input: {
    borderRadius: 10,
    margin: 15,
    padding: 15,
    color: '#fff',
    fontSize: 20,
  },
  TextInput: {
    borderWidth: 1,
    borderColor: 'blue',
    padding: 10,
    paddingStart: 20,
    width: '35%',
    marginTop: 10,
    borderRadius: 15,
  },
  result: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 30,
    marginTop: 20,
    marginBottom: 20,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    textAlign: 'center',
  },

})