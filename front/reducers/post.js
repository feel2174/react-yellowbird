export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "개밍두",
      },
      content: "첫번째 게시글 #해시태그 #익스프레스",
      Images: [
        {
          src:
            "https://i.pinimg.com/originals/8b/10/30/8b1030d543debb94705830c14f005893.jpg",
        },
        {
          src:
            "https://i.pinimg.com/originals/d3/f2/e6/d3f2e6f4da4bfc47a96a0e8aae1fffd4.jpg",
        },
        {
          src:
            "https://i.pinimg.com/originals/84/7f/1b/847f1b9a5d591cdc4a7855e4479de128.jpg",
        },
      ],
      Comments: [{
          User: {
              nickname: 'nero'
          },
          content: '사랑해요'
      }, {
          User: {
              nickname: 'niro'
          },
          content: '대박이에요'
      }],
    }],
    imagePaths: [],
    postAdded: false,
};

export const ADD_POST = 'ADD_POST'
export const addPost = {
    type: ADD_POST,
};
const dummyPost = {
    id: 2,
    content: '더미 데이터 입니다.',
    User: {
        id: 1,
        nickname: 'devzucca'
    },
    Images: [],
    Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case ADD_POST:
          return {
              ...state,
              mainPosts: [dummyPost, ...state.mainPosts],
              postAdded: true,
          }
    default:
      return state;
  }
};

export default reducer;
