import React, {PureComponent} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {TMDBAPI} from '../../Services/TMDBAPI';
import {Header} from '../Header';
class TopMovies extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
    };
    this.api = new TMDBAPI();
  }

  componentDidMount() {
    // console.log('hi');
    this.api.getTopRated().then((res) => {
      this.setState({
        data: res.results,
        isLoading: false,
      });
    });
  }

  render() {
    if (this.state.isLoading)
      return (
        <ActivityIndicator
          size="large"
          color={'blue'}
          style={{alignContent: 'center'}}
        />
      );
    else
      return (
        <SafeAreaView>
          <Header title={'Top Rated'} />
          <FlatList
            data={this.state.data}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  paddingBottom: 20,
                  marginTop: 30,
                  marginBottom: 30,
                  marginHorizontal: 20,
                  maxHeight: '90%',
                  flex: 1,
                  elevation: 10,
                  alignItems: 'center',
                  borderRadius: 20,
                  backgroundColor: '#FFF',
                }}
                onPress={() => {
                  console.log('hai');
                  this.props.navigation.navigate('Details', {id: item.id});
                }}>
                <Image
                  style={{width: 390, height: 500, borderRadius: 20}}
                  source={{
                    uri: 'https://image.tmdb.org/t/p/w500' + item.backdrop_path,
                  }}
                />
                <Text
                  style={{
                    fontSize: 28,
                    textAlign: 'center',
                    justifyContent: 'center',
                    color: '#000',
                    margin: 10,
                  }}>
                  {item.original_title}
                </Text>
                <Text
                  style={{
                    fontSize: 23,
                    color: '#42c5f5',
                  }}>
                  {item.release_date.substring(0, 4)}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </SafeAreaView>
      );
  }
}

export default TopMovies;
