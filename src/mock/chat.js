const chats = {
    status: 200,
    data: {
      chats:[
        {
          id: 1,
          name: 'Friends Forever',
          icon: 'FF',
          createdAt: '2023-01-01T12:00:00Z',
          messages: [
            {
              id: 1,
              content: 'Hello Everyone, Happy Diwali!',
              sender: 'Ashish@yopmail.com',
              timestamp: '2023-01-01T12:05:00Z',
            },
            {
              id: 2,
              content: 'Happy Diwali Everyone, How is it going guys?',
              sender: 'John@yopmail.com',
              timestamp: '2023-01-01T12:05:00Z',
            },
            {
              id: 3,
              content: 'This Diwali is best one, spending some quality time with family after so long',
              sender: 'myself@yopmail.com',
              timestamp: '2023-01-01T12:05:00Z',
            },
          ],
        },
        {
          id: 2,
          name: 'Sports',
          icon: 'S',
          createdAt: '2023-01-01T12:00:00Z',
          messages: [
            {
              id: 1,
              content: 'Guys, Today we have a table tennis competition. Be ready!',
              sender: 'Ashish@yopmail.com',
              timestamp: '2023-01-01T12:05:00Z',
            },
            {
              id: 2,
              content: 'Ready Chief',
              sender: 'John@yopmail.com',
              timestamp: '2023-01-01T12:05:00Z',
            },
            {
              id: 3,
              content: 'Okay Sir.',
              sender: 'myself@yopmail.com',
              timestamp: '2023-01-01T12:05:00Z',
            },
          ],
        },
      ],
    }
  };
  const getUserInfo = {
    status: 200,
    data: {
      data: "Logged In Successfully"
    },
  };
  
  export { chats, getUserInfo };
  