import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
export default function CovidMessage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        Upgrading this package often requires the font files linked to your
        projects to be updated as well. If the automatic linking works for you
      </Text>
      <Text style={styles.learnMore}>Learn more</Text>
    </View>
  );
}
