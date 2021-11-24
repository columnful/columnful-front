<template>
  <div>
    <div class="video-container">
      <iframe :src="youtubeURL" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

        <!-- <div class="descriptionsContainer">
          <p class="movieTitle"> {{ movie.original_title }} </p>
          <div class="genreNrate">
            <div class="genreBadge">
              <div 
                v-for="(genre, idx) in movieDetail.genres"
                :key="idx"
                style="padding-top: 0.1em; padding-bottom: 0.1rem; width: 100px" 
                class="space-x-2 text-xs px-3 bg-gray-200 text-gray-800 rounded-full">
                {{ genre | findGenre }}
                </div>
            </div>
          </div>
        </div> -->
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed velit dignissim sodales ut eu sem integer vitae. Id aliquet lectus proin nibh nisl condimentum. Fringilla urna porttitor rhoncus dolor purus. Nam aliquam sem et tortor. Nisl vel pretium lectus quam id. Cras pulvinar mattis nunc sed. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Tristique magna sit amet purus. Fermentum et sollicitudin ac orci phasellus egestas tellus. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Felis eget nunc lobortis mattis aliquam faucibus. Tincidunt eget nullam non nisi est sit amet facilisis. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Nec nam aliquam sem et tortor consequat id. Commodo nulla facilisi nullam vehicula ipsum a. Elementum tempus egestas sed sed. Faucibus purus in massa tempor nec feugiat nisl pretium fusce.</p>
        <p>Arcu cursus vitae congue mauris rhoncus aenean. Tempor id eu nisl nunc mi. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Ut faucibus pulvinar elementum integer enim. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Eu non diam phasellus vestibulum lorem sed risus. Porttitor rhoncus dolor purus non enim praesent. Sit amet mauris commodo quis imperdiet. Lobortis feugiat vivamus at augue eget. Nibh tellus molestie nunc non blandit. Tellus mauris a diam maecenas sed enim ut. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Mattis aliquam faucibus purus in massa.</p>
        <div class="bg-grey-lighter text-base text-grey-darkest font-normal relative">
          <div class="h-2 bg-primary"></div>

          <div class="container mx-auto p-8">
              <div class="mx-auto max-w-sm">
                  <div class="py-10 text-center">
                      @include('logo', ['style' => 'max-width: 12rem;'])
                  </div>

                  <!-- ... -->

                  <div class="bg-white rounded shadow">
                      <div class="border-b py-8 font-bold text-black text-center text-xl tracking-widest uppercase">
                          Welcome back!
                      </div>

                      <form class="bg-grey-lightest px-10 py-10">
                          {{ csrf_field() }}

                          <div class="mb-3">
                              <input class="border w-full p-3" name="email" type="text" placeholder="E-Mail">
                          </div>
                          <div class="mb-6">
                              <input class="border w-full p-3" name="password" type="password" placeholder="**************">
                          </div>
                          <div class="flex">
                              <button class="bg-primary hover:bg-primary-dark w-full p-4 text-sm text-white uppercase font-bold tracking-wider">
                                  Login
                              </button>
                          </div>
                      </form>

                      <div class="border-t px-10 py-6">
                          <div class="flex justify-between">
                              <a href="/signup" class="font-bold text-primary hover:text-primary-dark no-underline">Don't have an account?</a>
                              <a href="#" class="text-grey-darkest hover:text-black no-underline">Forgot Password?</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <!-- ... -->
      </div>
  </div>
</template>

<script>
import axios from "axios"
const TMDB_API_KEY = process.env.VUE_APP_TMDB_API_KEY

export default {
  name: "Content",
  data: function() {
    return {
      movie: [],
      actors: [],
      backdrop_path:"",
      video_path:""
    }
  },
  created() {
    const {id} = this.$route.params;
    console.log(this.$route.params)
    axios.get(`https://api.themoviedb.org/2/movie/${id}`, {
      params: {
        api_key: TMDB_API_KEY,
        language: "ko-KR"
      }
    })
    .then((res) => {
      this.movie = res.data
      console.log(res.data)
      this.backdrop_path = `https://image.tmdb.org/t/p/original${this.movie.backdrop_path}`
    })
    .catch((err) => console.log(err))

    axios.get(`https://api.themoviedb.org/2/movie/${id}`, {
      params: {
        api_key: TMDB_API_KEY,
        language: "ko-KR"
      }
    })
    .then((res) => {
      this.movie = res.data
      this.backdrop_path = `https://image.tmdb.org/t/p/original${this.movie.backdrop_path}`
    })
    .catch((err) => console.log(err))
  }
}
</script>

<style>

</style>