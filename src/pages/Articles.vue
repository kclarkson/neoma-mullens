<template>
  <layout>
    <h1>Articles</h1>
    <ul>
      <li v-for="edge in $page.allContentfulArticle.edges" :key="edge.node.id">
        <g-link
          :to="edge.node.path" class="blog-post"
        >
          <g-image
            :src="edge.node.headerImage.file.url"
            width="200" height="534" fit="contain"
            class="mw-100"
            :alt="edge.node.headerImage.title"
          />
          {{ edge.node.title }}
          {{ edge.node.excerpt }}

        </g-link>
      </li>
    </ul>

  </layout>
</template>
<page-query>
  {
    allContentfulArticle{
     edges {
       node {
         id
         title
         createdAt
         body
         path
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

<script>
export default {
  metaInfo: {
    title: "Articles",
    meta: [
      { charset: 'utf-8'},
      { name: "author", content: "Neoma Mullens, PhD" },
      { name: "description", content: "A collection of articles that written by Neoma Mullens on on various topics ranging from student engagement, community engagement, employee rights, education reform and nonprofit management."},
    ]
  }
};
</script>