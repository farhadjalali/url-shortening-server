# Example Queries

Get list of authors (*it will return only first 10 authors!*):

```graphql
query {
  authors {
    edges {
      node {
        id
        _id
        firstName
        lastName
      }
    }
  }
}
```



Create new author:

```GraphQL
mutation {
  createAuthor(input:{
    firstName:"Kent"
    lastName:"Beck"
  }) {
    id
    _id
    firstName
    lastName
  }
}
```
