<template>
  <main class="page-login container main-body">
    <section class="box-auth">

      <div class="box-auth__form">
        <h1 class="main-title">Sign in</h1>
        <p class="auth-intro">Log in to your account.</p>

        <form>
          <div class="form-group">
            <label class="form-label" for="username">E-mail</label>
            <input placeholder="E-mail" type="email" id="email" class="form-control" v-model="email" />
          </div>
          <div class="form-group">
            <label class="form-label" for="password">Password</label>
            <input placeholder="Password" type="password" id="password" class="form-control" v-model="password" />
          </div>
          <button v-on:click="login" class="btn btn-primary btn-lg mt-3">
            Sign in
          </button>

        </form>

        <p class="auth-bottom">
          Not a member?
          <router-link to="/register" class="alink">Register</router-link>
        </p>

        <p v-if="error" class="auth-error">{{ error }}</p>
      </div>
    </section>
  </main>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    login() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User logged in correctly with the email:", user.email);
          // Realizar la redirección a la página de inicio aquí
        })
        .catch((error) => {
          this.error = error.message;
          console.error(error);
        });
    }
  }
};
</script>

<style scoped>
@import '../css/styles.css';
</style>