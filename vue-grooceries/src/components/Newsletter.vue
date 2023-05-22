<template>
    <section class="newsletter">
      <div class="container">
        <h2>NEWSLETTER</h2>
        <p>
          Receive a weekly email with new offers and recommendations and get a discount!
        </p>
        <form>
          <input class="form-control" type="email" placeholder="Your email address">
          <button class="btn btn-secondary" type="button">
            Subscribe
          </button>
        </form>
      </div>

    </section>
</template>

<script>
export default {
  name: 'Newsletter',
  
}
</script>

<style scoped>
@import '../css/styles.css';
</style>