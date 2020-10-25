<template>
  <Layout>
    <h1 class="my-4 mb-5">Articles</h1>
    <div v-for="edge in $page.allContentfulBlog.edges" :key="edge.node.id"></div>

    <g-link
      :to="edge.node.url"
      v-for="edge in $page.allContentfulBlog.edges"
      :key="edge.node.id"
      class="blog-post"
    >

    <div class="media my-5">
      <g-image immediate :src="item.node.image"
        class="mr-3" alt="image" />
      <div class="media-body">
        <h5 class="mt-0">{{item.node.title}}</h5>
        <p class="text-dark">{{item.node.excerpt}}</p>
      </div>
    </div>

    </g-link>
  </Layout>
</template>

<page-query>
  {
    allContentfulArticle {
      edges {
        node {
          id
          title
          createdAt
          body
          slug
          headerImage {
            title
            file {
              url
            }
          }
        }
      }
    }
  }
</page-query>

<style lang="scss" scoped>
.media {
  img {
    width: 120px;
    height: 120px;
  }
}

.media-body {
  margin: auto;
}
</style>
