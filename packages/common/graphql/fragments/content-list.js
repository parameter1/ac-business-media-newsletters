const gql = require('graphql-tag');

module.exports = gql`

fragment NewsletterContentListFragment on Content {
  id
  type
  name(input: { mutation: Email })
  teaser(input: { mutation: Email, useFallback: false, maxLength: null })
  primaryImage {
    id
    src
    alt
  }
  primarySection {
    id
    name
    canonicalPath
    site {
      id
      host
    }
  }
  published
  ... on ContentPromotion {
    body(input: { mutation: Email })
    linkText
  }
  images(input:{ pagination: { limit: 100 }, sort: { order: values } }) {
    edges {
      node {
        id
        src
        alt
      }
    }
  }
  ... on Authorable {
    authors {
      edges {
        node {
          id
          name
          title
          primaryImage {
            id
            src(input: { options: { auto: "format", fillColor: "fff", fit: "fill", h: 185, w: 185, pad: 25, mask: "ellipse" } })
            alt
          }
        }
      }
    }
  }
}

`;
