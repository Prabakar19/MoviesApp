import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {PureComponent} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {TMDBAPI} from '../../Services/TMDBAPI';
import {faHeart, faClock} from '@fortawesome/free-solid-svg-icons';

class MovieDetails extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.route.params.id,
      isLoading: true,
      data: {},
      imgUrl: 'https://image.tmdb.org/t/p/w500',
    };
    this.api = new TMDBAPI();
  }

  componentDidMount() {
    console.log('one' + this.state.id);
    this.api.getMovieDetails(this.state.id).then((res) => {
      this.setState({
        data: res,
        isLoading: false,
      });
    });
  }

  render() {
    console.log(this.state.imgUrl + this.state.data.poster_path);
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
          <ScrollView>
            <View>
              <Image
                style={{
                  width: 435,
                  height: 400,
                  borderBottomLeftRadius: 40,
                  borderBottomRightRadius: 40,
                }}
                source={{uri: this.state.imgUrl + this.state.data.poster_path}}
              />
            </View>
            <View
              style={{
                flex: 2,
                margin: 10,
                marginEnd: 35,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 10}}>
                {this.state.data.original_title}
              </Text>
              <View style={{alignItems: 'center'}}>
                <FontAwesomeIcon
                  icon={faHeart}
                  size={28}
                  style={{alignContent: 'flex-end', color: 'red'}}
                />
                <Text style={{fontSize: 20}}>
                  {this.state.data.vote_average}
                </Text>
              </View>
            </View>

            <FlatList
              data={this.state.data.genres}
              horizontal={true}
              renderItem={({item}) => (
                <View
                  style={{
                    padding: 15,
                    margin: 10,
                    marginBottom: 20,
                    maxHeight: '95%',
                    flex: 1,
                    elevation: 10,
                    alignItems: 'center',
                    borderRadius: 10,
                    backgroundColor: '#FFF',
                  }}>
                  <Text
                    style={{
                      color: '#00bfff',
                      fontWeight: 'bold',
                      fontSize: 15,
                      letterSpacing: 2,
                    }}>
                    {item.name}
                  </Text>
                </View>
              )}></FlatList>

            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                margin: 15,
                marginBottom: 20,
                maxHeight: '95%',
                maxWidth: '35%',
                flex: 1,
                elevation: 10,
                alignItems: 'center',
                borderRadius: 10,
                backgroundColor: '#FFF',
              }}>
              <FontAwesomeIcon
                icon={faClock}
                size={28}
                style={{margin: 5, color: '#00bfff'}}
              />
              <Text style={{fontSize: 20, margin: 5, color: '#00bfff'}}>
                {this.state.data.runtime} mins
              </Text>
            </View>

            <View
              style={{
                margin: 5,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 24,
                  marginLeft: 10,
                }}>
                Overview
              </Text>
              <Text style={{fontSize: 16, margin: 10, textAlign: 'justify'}}>
                {this.state.data.overview}
              </Text>
            </View>

            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 22,
                marginLeft: 15,
                marginTop: 10,
                marginBottom: 10,
              }}>
              Productions
            </Text>
            <FlatList
              data={this.state.data.production_companies}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <View
                  style={{
                    padding: 15,
                    margin: 10,
                    marginBottom: 20,
                    maxHeight: '95%',
                    flex: 1,
                    elevation: 10,
                    alignItems: 'center',
                    borderRadius: 10,
                    backgroundColor: '#FFF',
                  }}>
                  <Text
                    style={{
                      color: '#00bfff',
                      fontWeight: 'bold',
                      fontSize: 15,
                    }}>
                    {item.name}
                  </Text>
                </View>
              )}></FlatList>

            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 22,
                marginLeft: 15,
                marginTop: 10,
                marginBottom: 10,
              }}>
              Gallery
            </Text>
            <View
              style={{
                margin: 10,
                padding: 10,
                flexDirection: 'row',
              }}>
              <Image
                style={{width: 100, height: 150, margin: 10}}
                source={{
                  uri: this.state.imgUrl + this.state.data.backdrop_path,
                }}
              />
              <Image
                style={{width: 100, height: 150, margin: 10}}
                source={{
                  uri: this.state.imgUrl + this.state.data.poster_path,
                }}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      );
  }
}

export default MovieDetails;
