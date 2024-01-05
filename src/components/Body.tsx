/* eslint-disable prettier/prettier */
import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
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
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Body</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.indianRupees}>₹</Text>
        <TextInput
          style={styles.textInput}
          value={amount}
          onChangeText={text => setAmount(text)}
          keyboardType="numeric"
        />
      </View>
      <View>
        <FlatList
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
          style={styles.container}
        />
      </View>
      {isCalculated && (
        <>
          <View style={styles.convertedContainer}>
            <Text style={styles.resultText}>{result}</Text>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
    marginTop: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: '#fff',
    color: '#000',
    width: 80,
    borderRadius: 8,
  },
  indianRupees: {
    fontSize: 24,
    marginRight: 16,
  },
  convertedContainer: {
    width: 200,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
    marginHorizontal: 80,
  },
  resultText: {
    color: '#000',
    fontWeight: '500',
    fontSize: 24,
  },
});
