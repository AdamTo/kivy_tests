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
      // const resp = await tor
      //   .get(
      //     'http://4b66gkzrl5i7r6bkvqifmshw23llwjqmxuxgplcu7aggkj7igfzmzbyd.onion/b2gOFS45vituQptuLB071OIWmThEZjhU/yesscript',
      //     {
      //       credentials: 'include',
      //       headers: {
      //         'User-Agent':
      //           'Mozilla/5.0 (Windows NT 10.0; rv:78.0) Gecko/20100101 Firefox/78.0',
      //         Accept:
      //           'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      //         'Accept-Language': 'en-US,en;q=0.5',
      //         'Upgrade-Insecure-Requests': '1',
      //         'Cache-Control': 'max-age=0',
      //       },
      //       referrer:
      //         'http://4b66gkzrl5i7r6bkvqifmshw23llwjqmxuxgplcu7aggkj7igfzmzbyd.onion/b2gOFS45vituQptuLB071OIWmThEZjhU/yesscript',
      //       method: 'GET',
      //       mode: 'cors',
      //     },
      //   )
      //   .then((data) => console.log('first log', data));

      const post = `[
  {
    "color": [
      116, 
      101, 
      18
    ], 
    "msg": "test post 20210209", 
    "num_people": 1, 
    "timestamp": "Tue, 09 Feb 2021 14:03:02 GMT", 
    "username": "yoeYjf"
  }
]`;

      const resp = await tor
        .post(
          'http://slw2du6qpgu6m7qaee6hfw6f37bvedrjh4oobdydk3urxmqgvrnmj7yd.onion/7t4C2tlEyAxFBo46wXSooICMYPijFNQM/chatsjs',
          post,
          {
            credentials: 'include',
            headers: {
              'User-Agent':
                'Mozilla/5.0 (Windows NT 10.0; rv:78.0) Gecko/20100101 Firefox/78.0',
              Accept: '*/*',
              'Accept-Language': 'en-US,en;q=0.5',
              'Accept-Encoding': 'gzip, deflate',
              Referer:
                'http://slw2du6qpgu6m7qaee6hfw6f37bvedrjh4oobdydk3urxmqgvrnmj7yd.onion/7t4C2tlEyAxFBo46wXSooICMYPijFNQM/yesscript',
              'Content-Type':
                'application/x-www-form-urlencoded; charset=UTF-8',
              'X-Requested-With': 'XMLHttpRequest',
              'Content-Length': 14,
              Origin:
                'http://slw2du6qpgu6m7qaee6hfw6f37bvedrjh4oobdydk3urxmqgvrnmj7yd.onion',
              Connection: 'keep-alive',
              Cookie:
                'session=eyJfaWQiOiJ5b2VZamYiLCJjb2xvciI6eyIgdCI6WzExNiwxMDEsMThdfX0.YCKFbw.u09iVW7rK2xE7EcJwIatNC-46yc',
            },
            // body: 'dropdata=test post',
            method: 'POST',
            mode: 'cors',
          },
          true,
        )
        .then((data) => console.log('first log', data));

      console.log('after post');

      return resp;
    } catch (error) {
      console.log('we have error', error);
      // Catch a network or server error like you normally with any other fetch library
    }
  };
  const data = makeTorRequest();
  console.log('seccond log');
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
