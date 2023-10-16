import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const RoundedProgressBar = ({progress, width, height, borderRadius}) => {
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    // Ensure progress is between 0 and 100
    const clampedProgress = Math.min(100, Math.max(0, progress));
    const newWidth = (clampedProgress / 100) * width;
    setProgressWidth(newWidth);
  }, [progress, width]);

  return (
    <View style={[styles.progressBar, {width, height, borderRadius}]}>
      <View
        style={[styles.progress, {width: progressWidth, height, borderRadius}]}
      />
      <Text style={styles.progressText}>{`${Math.round(progress)}%`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
  progress: {
    backgroundColor: 'blue', // Change the color to your desired color
  },
  progressText: {
    position: 'absolute',
    alignSelf: 'center',
    color: 'black', // Change the color to your desired color
  },
});

export default RoundedProgressBar;
