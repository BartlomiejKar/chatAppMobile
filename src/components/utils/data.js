import { gql } from "@apollo/client"


export const DataRooms = gql`
query {
    usersRooms {
      rooms {
        id
        name
        roomPic
      }
      user {
        id
        firstName
        profilePic
      }
    }
  }
`

export const MessagesRoom = gql`
  query ($id: String!) {
    room(id: $id) {
      id
      messages {
        id
        body
        insertedAt
        user {
          id
          firstName
          profilePic
        }
      }
      name
      roomPic
      user {
        id
      }
    }
  }
`;

export const sendMessages = gql`
mutation SendMessage($roomId:String!, $body:String!) {
  SendMessage(roomId:$roomId, body:$body ) {
    body
  }
}
`