/* eslint-disable prettier/prettier */
import { ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import Body from './components/Body';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
    <SafeAreaView>
      <ScrollView>
        <Body />
      </ScrollView>
    </SafeAreaView>
    </RecoilRoot>
  );
};

export default App;
