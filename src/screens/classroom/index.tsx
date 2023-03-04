import {View, Text, Alert, Button} from 'react-native';
import React, { useCallback, useState } from 'react';
import {ScreenWithBackButtonView} from '../../components';
import YoutubePlayer from 'react-native-youtube-iframe';

const Classroom = () => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state:any) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev:any) => !prev);
  }, []);

  return (
    <ScreenWithBackButtonView>
      <View>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"iee2TATGMyI"}
        onChangeState={onStateChange}
      />
      <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
      </View>
    </ScreenWithBackButtonView>
  );
};

export default Classroom;

