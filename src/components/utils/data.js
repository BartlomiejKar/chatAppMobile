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

