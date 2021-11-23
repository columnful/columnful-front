<template>
  <div>  
    <ul>
      <li id="commentList">
        <div class="margin justify-content-between" 
          v-for="(comment, idx) in comments" 
          :key="idx"
        >
          <template  v-if="idx !== updateIdx">
            <span style="width: 5rem;" id="comment">
              {{ comment.username }} |
            </span>
              {{ comment.content }}
            <span>
              <!-- <i class="fas fa-pen-nib"></i>
              {{ comment.created_at | formatDate }}
              <i class="fas fa-hammer"></i>
              {{ comment.updated_at | formatDate }} -->
              <template v-if="comment.username == username">
                <button type="button" class="btn pull-right btn-light btn-sm" @click="commentIdx(comment, idx)">수정</button>
                <button
                type="button" class="btn pull-right btn-light btn-sm"
                @click="deleteComment(comment, idx)"
                style="margin-left:5px">삭제</button>
              </template>
            </span>
          </template>
          <template v-else>
            <form id="comment" @submit.prevent="updateComment">
              <input id="commentForm" type="text" v-model="updateCommentContent">
              <button>수정하기</button>
            </form>
          </template>
        </div>
        <form id="comment" @submit.prevent="createComment">
          <input id="commentForm" class="form-control form-control-sm" v-model="commentContent" type="text" placeholder="댓글을 입력해주세요.">
          <button>댓글 달기</button>
        </form>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
// import moment from 'moment'
export default {
  name: 'CommentList',
  data: function () {
    return {
        comments: [],
        updateIdx: -1,
        updateCommentIdx: 0,
        updateCommentContent: '',
        username: '',
        commentContent: '',
        newcreateComment: {},
    }
  },
  watch: {
    newComment: function (newVal) {
      // console.log(newVal)
      this.comments.push(newVal)
    },
    newcreateComment: function (newVal) {
      // console.log(newVal)
      this.comments.push(newVal)
    },
  },
  props: {
    reviewId: {
        type: [Number, String]
    },
    // newComment: {
    //     type: Object
    // },
  },
  // filters: {
  //   formatDate: function(value) {
  //     if (value) {
  //       return moment(String(value)).format('YY/MM/DD HH:MM')
  //     }
  //   }
  // },
  methods: {
    commentIdx: function (comment, idx) {
      this.updateIdx = idx
      this.updateCommentIdx = comment.id
      this.updateCommentContent = comment.content
    },
    setToken: function () {
      const token = localStorage.getItem('jwt')
      const config = {
        headers: {
        Authorization: `JWT ${token}`
        }
      }
      return config 
    },

    createComment: function () {
      const config = this.setToken()
      axios.post(`http://127.0.0.1:8000/reviews/reviews/${this.reviewId}/comment/`,{ content: this.commentContent },config)
        .then((res) => {
          this.newcreateComment = res.data
          this.commentContent = ''
        })
        .catch(err => { 
          console.log(err)
        })
    },
    
    getComment: function () {
      const config = this.setToken()
      axios.get(`http://127.0.0.1:8000/reviews/reviews/${this.reviewId}/comment/`, config)
      .then((res) => {
        this.comments = res.data
        // console.log(res.data)
        this.$emit('commentlist', res.data)
      })
      .catch(err => {
        console.log(err)
      })
    },

    deleteComment: function (comment, idx) {
      const config = this.setToken()
      axios.delete(`http://127.0.0.1:8000/reviews/reviews/${this.reviewId}/comment/${comment.id}`, config)
        .then(res => {
          console.log(res)
        })
        .catch(err=> console.log(err))
      this.comments.splice(idx,1)
    },

    updateComment: function () {
      const config = this.setToken()
      axios.put(`http://127.0.0.1:8000/reviews/reviews/${this.reviewId}/comment/${this.updateCommentIdx}/`,
        { 'content': this.updateCommentContent }, config)
          .then((res) => {
            this.comments[this.updateIdx] = res.data
            // console.log(res)
            this.updateIdx = -1
          })
          .catch(err => console.log(err))
    }
  },
  created: function () {
    this.username = localStorage.getItem('username')
    if (localStorage.getItem('jwt')) {
      this.getComment()
    } else {
      this.$router.push({name: 'Login'})
    }
  },
}
</script>

<style scoped>
  .margin {
    margin-left: 20px;
    margin-right: 20px;
  }

  label, input, textarea {
	transition: color 0.4s ease, background-color 0.1s ease-in-out;
  }
  label {
    color: lighten(#888888, 15);
    font-size: 70%;
    letter-spacing: 0.03em;
    text-transform: uppercase;

    position: absolute;
    top: 10px;
    left: 10px;

    /* input:focus+& {
      color: darken(#0074D9, 10);
      font-weight: bold;
      letter-spacing: -0.01em;
    } */
    }

  input, textarea {
    background-color: transparent;
    border: none;
    color: darken(#888888, 15);
    font-size: 14px;
    margin: 9px 0 7px 0;
    margin: 0;
    padding: 2em 10px 10px 10px;
    outline: none;
    width: 100%;

      /* &:focus {
        color: #000;
        background-color: lighten(#888888, 40);
        box-shadow: 0px 3px 4px -2px rgba(0,0,115,0.25) inset;
      } */
  }

  ul {
    background-color: #fffdfa;
    border: 5px solid #888888;
    list-style-type: none;
    margin: 1em auto;
    padding: 0;
    width: 800px;
  }
  li {
    border-bottom: 1px solid lighten(#888888, 25);
    margin-top: -1px;
    position: relative;
    margin: 10px 0 7px 0;
  }
  .justify-content-between {
    justify-content: space-between;
    text-align: left;
  }
  /* #comment {
    justify-content: space-between;
    justify-items: end;
    margin-top: 100px;
  } */
  #comment {
    display: inline-block;
    width: 100%;
  }
  #commentForm {
    width: 85%;
    padding: 10px 10px 10px 10px;
  }
</style>