/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {isCalculatedState, resultState} from '../recoil/atoms';
import {useSetRecoilState} from 'recoil';

// const winWidth= Dimensions.get('window');

export default function Card({name, value, flag, symbol, amount}) {
  console.log(amount);
  const setResult = useSetRecoilState(resultState);
  const setIsCalculated = useSetRecoilState(isCalculatedState);

  function calculate(a, v) {
    setResult(`${symbol} ${(a * v).toFixed(2)}`);
    setIsCalculated(true);
  }

  return (
    <View>
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => calculate(amount, value)}>
        <Text style={styles.text}>{flag}</Text>
        <Text style={styles.text}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: 120,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    margin: 4,
  },
  text: {
    color: '#000',
    fontSize: 18,
  },
  convertedContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    color: '#000',
  },
});
