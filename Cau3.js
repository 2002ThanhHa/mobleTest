import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Animated, Easing } from 'react-native';

const Cau3 = () => {
  const lac = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(lac, {
          toValue: 10,
          duration: 100,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(lac, {
          toValue: -10,
          duration: 100,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(lac, {
          toValue: 0,
          duration: 100,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: -1, // lặp vô hạn
      }
    ).start();
  }, []);

  const interpolatedRotateAnimation = lac.interpolate({
    inputRange: [-10, 0, 10],
     outputRange: ['-5deg', '0deg', '5deg'],
    
  });

  return (
    <View style={styles.container}>
      
       <View style= {styles.hinh}>
       <Animated.Image
        source={require('./assets/hinh.jpg')} 
        style={[styles.bellImage, { transform: [{ rotate: interpolatedRotateAnimation }] }]}
      />
       </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
   
  },
  bellImage: {
    width: 200, 
    height: 200, 
  },
  hinh:{
    paddingRight: 20, 
    paddingBottom: 20, 
    
    alignItems: 'flex-end',
  },
 
});

export default Cau3;