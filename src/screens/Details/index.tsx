import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import API from '../../../services/api/API';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import PrimaryButton from '../../components/PrimaryButton';
import VideoModal from '../../components/VideoPlayer';
import {styles} from './styles';
import services from '../../../services/api/services';
import FastImage from 'react-native-fast-image';

interface DetailsProps {
  route: {
    params: {
      show_id: string; // Adjust the type based on your actual parameter type
    };
  };
}

interface VideoResponse {
  results: {
    type: string;
    key: string;
  }[];
}

const Details: React.FC<DetailsProps> = ({route}) => {
  const {show_id} = route.params;
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState<any>({});
  const [player, setPlayer] = useState(false);
  const [loadingVideo, setLoadingVideo] = useState(false);
  const [videoKey, setVideoKey] = useState<string>('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await API.fetchDetails(show_id);
        setDetails(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching data:', error);
      }
    };
    fetchMovies();
  }, [show_id]);

  const onWatchTrailer = async () => {
    try {
      setLoadingVideo(true);
      const response: VideoResponse = await API.fetchTrailer(show_id);
      const trailer_key = response?.results?.find(
        el => el?.type === 'Trailer',
      )?.key;
      setVideoKey(trailer_key || ''); // Adjust the type based on your actual key type
      setPlayer(true);
      setLoadingVideo(false);
    } catch (error) {
      setLoadingVideo(false);
      console.error('Error fetching data:', error);
    }
  };

  const onStateChange = (state: string) => {
    console.log(state);
    if (state === 'ended') {
      setPlayer(false);
    }
  };

  return (
    <View style={styles.container}>
      <Header onBack={() => navigation.goBack()} back white />
      {!loading ? (
        <View style={styles.topContainer}>
          <View style={styles.imageContainer}>
            <LinearGradient
              style={styles.linearTop}
              colors={['#00000090', '#00000000']}
            />
            <FastImage
              resizeMode={FastImage.resizeMode.cover}
              source={{
                uri: `${services.image_url}/${details?.poster_path}`,
                priority: FastImage.priority.high,
              }}
              style={styles.image}
            />
            <LinearGradient
              style={styles.linearBottom}
              colors={['#00000000', '#000000']}>
              {/* <Title style={styles.logo} height={mvs(30)} width={mvs(102)} /> */}
              <Text style={styles.title}>{details?.title}</Text>
              <Text style={styles.date}>{`In theaters ${moment(
                details?.release_date,
              ).format('MMMM DD, YYYY')}`}</Text>
              <PrimaryButton onPress={() => {}} title="Get Tickets" />
              <PrimaryButton
                onPress={onWatchTrailer}
                trans
                loading={loadingVideo}
                title={'Watch Trailer'}
              />
            </LinearGradient>
          </View>
          <ScrollView
            style={styles.mainContainer}
            contentContainerStyle={styles.content}>
            <Text style={styles.label}>Genres</Text>
            <View style={styles.genreContainer}>
              {details?.genres.map((el: any) => (
                <View
                  style={{
                    ...styles.genre,
                    backgroundColor: `#${(
                      '000000' +
                      Math.floor(Math.random() * 8388607).toString(16)
                    ).slice(-6)}`,
                  }}>
                  <Text style={styles.genreText}>{el?.name}</Text>
                </View>
              ))}
            </View>
            <View style={styles.divider} />
            <Text style={styles.label}>Overview</Text>
            <Text style={styles.des}>{details?.overview}</Text>
          </ScrollView>
        </View>
      ) : (
        <Loader />
      )}
      {player && (
        <VideoModal
          videoId={videoKey}
          player={player}
          setPlayer={() => setPlayer(false)}
          onStateChange={onStateChange}
        />
      )}
    </View>
  );
};

export default Details;
