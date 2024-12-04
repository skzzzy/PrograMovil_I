import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles';

type Questionnaire2Props = {
  navigation: StackNavigationProp<any>;
};

const Cuestionario2: React.FC<Questionnaire2Props> = ({ navigation }) => {
  const [calidadPersonal, setCalidadPersonal] = useState('');
  const [satisfaccion, setSatisfaccion] = useState('');
  const [instalaciones, setInstalaciones] = useState('');
  const [resolucion, setResolucion] = useState('');
  const [tiempoEspera, setTiempoEspera] = useState('');
  const [seguridad, setSeguridad] = useState('');
  const [comentarios, setComentarios] = useState('');
  const [problemasCajeros, setProblemasCajeros] = useState('');

  const limpiarCampos = () => {
    setCalidadPersonal('');
    setSatisfaccion('');
    setInstalaciones('');
    setResolucion('');
    setTiempoEspera('');
    setSeguridad('');
    setComentarios('');
    setProblemasCajeros('');
  };

  const Enviar = () => {
    const listaRespuestas = [
      calidadPersonal,
      satisfaccion,
      instalaciones,
      resolucion,
      tiempoEspera,
      seguridad,
      comentarios,
      problemasCajeros,
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
      'Gracias',
      '¡Gracias por responder nuestra encuesta!',
      [
        {
          text: 'OK',
          onPress: () => {
            limpiarCampos();
            navigation.replace('Cuestionario1'); //como aparece en app.tsx
          }
        }
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Segunda Encuesta - Banco</Text>

      <Text style={styles.label}>¿Cómo calificarías la calidad del personal? (1-5)</Text>
      <TextInput
        style={styles.input}
        value={calidadPersonal}
        onChangeText={setCalidadPersonal}
        keyboardType="numeric"
      />

      <Text style={styles.label}>¿Qué tan satisfecho estás con el trato recibido? (1-5)</Text>
      <TextInput
        style={styles.input}
        value={satisfaccion}
        onChangeText={setSatisfaccion}
        keyboardType="numeric"
      />

      <Text style={styles.label}>¿Cómo calificarías nuestras instalaciones? (1-5)</Text>
      <TextInput
        style={styles.input}
        value={instalaciones}
        onChangeText={setInstalaciones}
        keyboardType="numeric"
      />

      <Text style={styles.label}>¿La atención resolvió tu problema? (1-5)</Text>
      <TextInput
        style={styles.input}
        value={resolucion}
        onChangeText={setResolucion}
        keyboardType="numeric"
      />

      <Text style={styles.label}>¿El tiempo de espera fue adecuado? (1-5)</Text>
      <TextInput
        style={styles.input}
        value={tiempoEspera}
        onChangeText={setTiempoEspera}
        keyboardType="numeric"
      />

      <Text style={styles.label}>¿Te sentiste seguro durante tu visita? (1-5)</Text>
      <TextInput
        style={styles.input}
        value={seguridad}
        onChangeText={setSeguridad}
        keyboardType="numeric"
      />

      <Text style={styles.label}>¿Ha tenido problemas con nuestros cajeros automáticos? (1-5)</Text>
      <TextInput
        style={styles.input}
        value={problemasCajeros}
        onChangeText={setProblemasCajeros}
        keyboardType="numeric"
      />

      <View style={styles.buttonContainer}>
        <Button title="Enviar" onPress={Enviar} />
      </View>
    </ScrollView>
  );
};

export default Cuestionario2;