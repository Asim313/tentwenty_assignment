import React, {useState} from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {mvs} from '../config/metrices';
import Colors from '../config/colors';

interface VideoModalProps {
  videoId: string;
  setPlayer: React.Dispatch<React.SetStateAction<boolean>>;
  player: boolean;
  onStateChange: (state: string) => void;
}

const VideoModal: React.FC<VideoModalProps> = ({
  videoId,
  setPlayer,
  player,
  onStateChange,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={player}
      onRequestClose={() => setPlayer(false)}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <YoutubePlayer
            height={mvs(300)}
            play={true}
            videoId={videoId}
            onChangeState={onStateChange}
            webViewProps={{
              injectedJavaScript: `
                var element = document.getElementsByClassName('container')[0];
                element.style.position = 'unset';
                element.style.paddingBottom = 'unset';
                true;
              `,
            }}
          />
          <Pressable onPress={() => setPlayer(false)} style={styles.doneButton}>
            <Text style={styles.doneText}>Done</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalView: {
    backgroundColor: 'black',
    //alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  doneButton: {
    height: mvs(30),
    width: mvs(60),
    borderRadius: mvs(10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    position: 'absolute',
    zIndex: 1,
    top: mvs(50),
    right: mvs(20),
  },
  doneText: {
    fontSize: mvs(14),
    fontFamily: 'Poppins-Medium',
    color: Colors.white,
  },
});

export default VideoModal;
