/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {isCalculatedState, resultState} from '../recoil/atoms';
import {useSetRecoilState} from 'recoil';

export default function Card({name, value, flag, symbol, amount}) {
  const setResult = useSetRecoilState(resultState);
  const setIsCalculated = useSetRecoilState(isCalculatedState);

  function calculate(a, v) {
    setResult(`${symbol} ${(a * v).toFixed(2)}`);
    setIsCalculated(true);
  }

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => calculate(amount, value)}>
      <Text style={styles.flag}>{flag}</Text>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 4,
  },
  flag: {
    fontSize: 24,
    marginBottom: 8,
  },
  name: {
    color: '#333',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});
