import React, { useState, useRef } from 'react';
import { View,Animated, Button } from 'react-native';

const Cau2 = () => {
  const squarePosition = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const [animation, setAnimation] = useState(null);

  const startAnimation = () => {
    if (animation) {
      animation.stop();
    }

    const newAnimation = Animated.timing(squarePosition, {
      toValue: { x: 50, y: 300 },
      duration: 2000,
      useNativeDriver: false,
    });

    setAnimation(newAnimation);
    newAnimation.start();
  };

  const stopAnimation = () => {
    if (animation) {
      animation.stop();
    }
  };

  const restartAnimation = () => {
    stopAnimation();
    squarePosition.setValue({ x: 0, y: 0 });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'pink',
          transform: [{ translateX: squarePosition.x }, { translateY: squarePosition.y }],
        }}
      />
      <View style={{ justifyContent: "space-evenly", flexBasis: 200,  }}>
        <Button title="start " onPress={startAnimation} />
        <Button title="Stop" onPress={stopAnimation} />
        <Button title="Restart" onPress={restartAnimation} />
        
      </View>
    </View>
  );
};

const styles = {
  button: {
    backgroundColor: 'green',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
 
};

export default Cau2;