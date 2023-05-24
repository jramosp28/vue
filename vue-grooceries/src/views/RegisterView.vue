<template>
  <main class="page-register container main-body">
    <section class="box-auth">
      <div class="box-auth__form">
        <h1 class="main-title">Register</h1>
        <p class="auth-intro">Not a member? sign up today</p>

        <form @submit.prevent="register">
          <div class="form-group">
            <label class="form-label" for="username">E-mail</label>
            <input placeholder="E-mail" type="email" id="email" class="form-control" v-model="email" />
          </div>
          <div class="form-group">
            <label class="form-label" for="password">Password</label>
            <input placeholder="Password" type="password" id="password" class="form-control" v-model="password" />
          </div>
          <button type="submit" class="btn btn-primary btn-lg mt-3">
            Register
          </button>
        </form>

        <p class="auth-bottom">
          Already have an account?
          <router-link to="/login" class="alink">Sign in</router-link>
        </p>

        <p v-if="error" class="auth-error error-message">{{ getErrorMessage(error) }}</p>
      </div>
    </section>
  </main>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import router from '../router';


export default {
  name: "RegisterView",
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    register() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("New user created with email:", user.email);
          // Realizar la redirección a la página de inicio aquí
          router.push("/login");
        })
        .catch((error) => {
          this.error = error;
          console.error(error);
        });
    },
    getErrorMessage(error) {
      switch (error.code) {
        case "auth/invalid-email":
          return "Invalid email address.";
        case "auth/email-already-in-use":
          return "The email address is already in use by another account.";
        case "auth/weak-password":
          return "The password is too weak.";
        default:
          return "An error occurred during registration. Please try again.";
      }
    },
  },
};
</script>

<style scoped>
@import '../css/styles.css';
</style>
