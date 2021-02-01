/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Tor from 'react-native-tor';

const tor = Tor();

const App: () => React$Node = () => {
  const makeTorRequest = async () => {
    // Start the daemon and socks proxy (no need for Orbot and yes iOS supported!)
    await tor.startIfNotStarted();

    try {
      // Use built in client to make REST calls to .onion urls routed through the Sock5 proxy !
      const resp = await tor.get(
        '6ttyl7qlzcw44em4euuffq7ut77tx5z3crduq7yazinuilovucn4ybqd.onion/10Ztu1vZsBVhHOEZIDdWXvFX78lWDrgy',
      );
      console.log('data:', resp.json());
      return resp.json;
    } catch (error) {
      // Catch a network or server error like you normally with any other fetch library
    }
  };
  const data = makeTorRequest();
  console.log(JSON.stringify(data));
  return (
    <>
      <Text>text</Text>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
