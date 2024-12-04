import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles';

type navegarACuestionario1 = {
  navigation: StackNavigationProp<any>;
};

const Cuestionario1: React.FC<navegarACuestionario1> = ({ navigation }) => {
  const [CalidadServicio, setCalidadServicio] = useState('');
  const [tiempo, setTiempo] = useState('');
  const [ambiente, setAmbiente] = useState('');
  const [comentario, setComentario] = useState('');
  const [atencionCajero, setCajeroAutomatico] = useState('');
  const [claridad, setClaridad] = useState('');
  const [resolucion, setResolucion] = useState('');
  const [tecnologiaSistemas, setTecnologiaSistemas] = useState('');

  const Enviar = () => {
    const listaRespuestas = [
      CalidadServicio,
      tiempo,
      ambiente,
      comentario,
      atencionCajero,
      claridad,
      resolucion,
      tecnologiaSistemas, 
    ];

    let respuestas = 0;
    listaRespuestas.forEach(response => {
      if (response !== '') {
        respuestas++;
      }
    });

    if (respuestas < 7) {
      Alert.alert('Encuesta incompleta', 'Por favor, responde las 7 preguntas para continuar.');
      return;
    }

    Alert.alert(
      'Encuesta completada',
      '¿Deseas realizar otra encuesta?',
      [
        { text: 'Sí', onPress: irACuestionario2 },
        { text: 'No', onPress: finEncuesta },
      ]
    );
  };

  const irACuestionario2 = () => {
    // Limpiar los campos antes de navegar
    setCalidadServicio('');
    setTiempo('');
    setAmbiente('');
    setComentario('');
    setCajeroAutomatico('');
    setClaridad('');
    setResolucion('');
    setTecnologiaSistemas('');
    
    navigation.replace('Cuestionario2'); //como aparece en app.tsx
  };
  
  const finEncuesta = () => {
    Alert.alert('Gracias', '¡Gracias por responder nuestra encuesta!', [
      {
        text: 'OK',
        onPress: () => {
          setCalidadServicio('');
          setTiempo('');
          setAmbiente('');
          setComentario('');
          setCajeroAutomatico('');
          setClaridad('');
          setResolucion('');
          setTecnologiaSistemas('');
        }
      }
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Encuesta de Satisfacción - Banco</Text>

      <Text style={styles.label}>¿Cómo calificarías la calidad general del servicio? (1-5)</Text>
      <TextInput
        style={styles.input}
        value={CalidadServicio}
        onChangeText={setCalidadServicio}
        keyboardType="numeric"
      />

      <Text style={styles.label}>¿Qué tan satisfecho estás con el tiempo de atención? (1-5)</Text>
      <TextInput
        style={styles.input}
        value={tiempo}
        onChangeText={setTiempo}
        keyboardType="numeric"
      />

      <Text style={styles.label}>¿Cómo calificarías el ambiente del banco? (1-5)</Text>
      <TextInput
        style={styles.input}
        value={ambiente}
        onChangeText={setAmbiente}
        keyboardType="numeric"
      />

      <Text style={styles.label}>¿Cómo fue la atención del cajero? (1-5)</Text>
      <TextInput
        style={styles.input}
        value={atencionCajero}
        onChangeText={setCajeroAutomatico}
        keyboardType="numeric"
      />

      <Text style={styles.label}>¿La información brindada fue clara? (1-5)</Text>
      <TextInput
        style={styles.input}
        value={claridad}
        onChangeText={setClaridad}
        keyboardType="numeric"
      />

      <Text style={styles.label}>¿Se resolvió tu solicitud de manera satisfactoria? (1-5)</Text>
      <TextInput
        style={styles.input}
        value={resolucion}
        onChangeText={setResolucion}
        keyboardType="numeric"
      />

      <Text style={styles.label}>¿La tecnología/sistemas funcionaron correctamente? (1-5)</Text>
      <TextInput
        style={styles.input}
        value={tecnologiaSistemas}
        onChangeText={setTecnologiaSistemas}
        keyboardType="numeric"
      />

      <View style={styles.buttonContainer}>
        <Button title="Enviar" onPress={Enviar} />
      </View>
    </ScrollView>
  );
};

export default Cuestionario1;