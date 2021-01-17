export class TMDBAPI {
  constructor() {
    this.apiKey = '?api_key=726c30666a1f4879c86318e5ed5472de';
  }

  async getApi(url) {
    console.log(url);
    try {
      let response = await fetch(url);
      let json = await response.json();
      return (json = {...json, isValid: true});
    } catch (error) {
      console.log(error);
      return {isValid: false};
    }
  }

  async getPopular() {
    return await this.getApi(
      'https://api.themoviedb.org/3/movie/popular' + this.apiKey + '&page=2',
    );
  }
  async getUpcoming() {
    return await this.getApi(
      'https://api.themoviedb.org/3/movie/upcoming' + this.apiKey + '&page=2',
    );
  }
  async getTopRated() {
    return await this.getApi(
      'https://api.themoviedb.org/3/movie/top_rated/' + this.apiKey + '&page=2',
    );
  }

  async getMovieDetails(movie_id) {
    return await this.getApi(
      'https://api.themoviedb.org/3/movie/' + movie_id.toString() + this.apiKey,
    );
  }
}
