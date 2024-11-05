/* eslint-disable prettier/prettier */
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {currencyByRupee} from './utils/currencyRate';
import Card from './Card';
import {amountState, isCalculatedState, resultState} from '../recoil/atoms';
import {useRecoilValue, useSetRecoilState} from 'recoil';

export default function Body() {
  const amount = useRecoilValue(amountState);
  const setAmount = useSetRecoilState(amountState);
  const isCalculated = useRecoilValue(isCalculatedState);
  const result = useRecoilValue(resultState);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Currency Exchange</Text>
        <Text style={styles.title}>Rate Calculator 💸</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.indianRupees}>₹</Text>
        <TextInput
          style={styles.input}
          value={amount}
          onChangeText={text => setAmount(text)}
          keyboardType="numeric"
          placeholderTextColor="#999"
          placeholder="Enter amount"
        />
      </View>
      <FlatList
        scrollEnabled={false}
        data={currencyByRupee}
        numColumns={3}
        keyExtractor={item => item.name}
        horizontal={false}
        renderItem={({item}) => (
          <Card
            name={item.name}
            value={item.value}
            flag={item.flag}
            symbol={item.symbol}
            amount={amount}
          />
        )}
        contentContainerStyle={styles.cardList}
      />
      {isCalculated && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{result}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  indianRupees: {
    fontSize: 24,
    color: '#666',
    marginRight: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#333',
    height: 48,
    paddingHorizontal: 12,
    borderRadius: 8,
    fontSize: 18,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  cardList: {
    marginTop: 16,
    alignItems: 'center',
  },
  resultContainer: {
    alignItems: 'center',
    marginTop: 24,
    paddingVertical: 16,
    backgroundColor: '#e0ffe0',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  resultText: {
    color: '#2a9d8f',
    fontWeight: '600',
    fontSize: 24,
  },
});
