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
}

`;
