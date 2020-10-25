<template>
  <footer class="page-footer font-small teal py-4">
    <div class="footer-copyright text-center">Copyright {{ getCurrentYear }} by
      <a target="_blank" rel="noopener" href="https://www.neomamullens.com"> Neoma Mullens</a>
    </div>
  </footer>
</template>

<script>
export default {
  data: () => ( {
    href: 'http://www.neomamullens.com'
  }),
  computed: {
    getCurrentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss">
footer {
  width: 100%;
  margin-top: 6rem;
  background-color: #f5f5f5;
}
</style>
