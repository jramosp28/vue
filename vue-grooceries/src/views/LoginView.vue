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

        <p class="auth-bottom error-message">
          Not a member?
          <router-link to="/register" class="alink">Register</router-link>
        </p>

        <p v-if="error" class="auth-error">{{ getErrorMessage(error) }}</p>
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
      error: "",
    };
  },
  methods: {
    login() {
      console.log("Starting login process...");
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          console.log("User logged in correctly with the email:", userCredential.user.email);
          router.push('/');
        })
        .catch((error) => {
          console.error("Login error:", error);
          this.error = error;
        });
    }
    ,
    getErrorMessage(error) {
      switch (error.code) {
        case "auth/invalid-email":
          return "Invalid email address.";
        case "auth/user-disabled":
          return "Your account has been disabled.";
        case "auth/user-not-found":
        case "auth/wrong-password":
          return "Invalid email or password.";
        default:
          return "An error occurred during login. Please try again.";
      }
    },
  },
};
</script>

<style scoped>
@import '../css/styles.css';
</style>
