import React, { useEffect, useState } from 'react';
import { View, Text, Animated } from 'react-native';

const Cau1 = () => {
  const [outText] = useState(new Animated.Value(0));

  useEffect(() => {
    animateText();
  }, []);

  const animateText = () => {
    Animated.sequence([
      Animated.timing(outText, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(outText, {
        toValue: 3,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.Text
        style={{
          fontSize: 20,
          opacity: outText,
        }}
      >
        Thanh Ha
      </Animated.Text>
      <View style={{ height: 20 }} />
      <Animated.Text
        style={{
          fontSize: 20,
          opacity: outText,
        }}
      >
       Thanh Ha
      </Animated.Text>
    </View>
  );
};

export default Cau1;
