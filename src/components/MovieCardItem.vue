<template>
  <div id="mcard">
		<div class="container">
			<div class="columns">
				<div class="column col-6 col-md-8 col-mx-auto">
					<card>
						<img slot="image" :src="`https://image.tmdb.org/t/p/original`+ recommendation.backdrop_path">

            <div slot="body">
              <div class="rec_content">
                <div class="d-flex m-2">
                  <div 
                    class="detail__genres d-flex p-1"
                    v-for="genre in genres"
                    :key="genre.id">
                    <div class="detail__genre-badge text-xs px-3 rounded-full">{{genre.name}}</div>
                  </div>
                </div>
                <p class="reco_title text-left mx-4"> {{ recommendation.title }} </p>
                <div class="ml-3">
                  <div class="d-flex">
                    <div 
                      class="keywords p-1"
                      v-for="(keyword, idx) in keywords"
                      :key="idx">
                        <div v-if="idx<2">#{{keyword.name}}</div>
                    </div>
                  </div>
                  <div class="d-flex">
                    <div 
                      class="keywords"
                      v-for="(keyword, idx) in keywords"
                      :key="idx">
                        <div class="px-1 mb-2" v-if="1<idx & idx<5">#{{keyword.name}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
						<!-- <button slot="button" class="btn btn-primary" @click="onClick">Click me</button> -->
					</card>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import Card from '@/components/Card'

const TMDB_API_KEY = process.env.VUE_APP_TMDB_API_KEY

export default {
  name: "MovieCardItem",
  components: {
    Card,
  },
  props:{
    recommendation: [],
  },
  data() {
    return {
      genres: [],
      keywords: [],
    }
  },
  created: function () {
    axios.get('https://api.themoviedb.org/3/movie/' + this.recommendation.id, {
        params: {
          api_key: TMDB_API_KEY,
        }
      })
      .then((res) =>{
        this.genres = res.data.genres
        // console.log(this.genres)
      })
      .catch(err => console.log(err))

      axios.get('https://api.themoviedb.org/3/movie/' + this.recommendation.id + '/keywords', {
        params: {
          api_key: TMDB_API_KEY,
        }
      })
      .then((res) =>{
        this.keywords = res.data.keywords
        console.log(this.keywords)
      })
      .catch(err => console.log(err))
  },
  
}
</script>

<style scoped>
  #mcard {
    background-color: rgba(58, 58, 58, 0.7);
    color: rgb(218, 218, 218);
    width: 100%;
  }
  .detail__genre-badge {
    background-color: rgba(172, 172, 172, 0.4);
    padding-top: 0.1em; 
    padding-bottom: 0.1rem;
    color: rgb(222, 222, 222);
  }
  .reco_title {
    font-size: 25px;
  }
</style>