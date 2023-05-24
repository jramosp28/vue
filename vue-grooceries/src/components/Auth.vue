<template>
    <div class="auth">
        <template v-if="!isLoggedIn">
            <a href="#" class="nav-link">Register</a>
            <a href="#" class="nav-link">Sign in</a>
        </template>
        <template v-else>
            <span class="nav-link">{{ getUsername() }}</span>
        </template>
    </div>
</template>
  
<script>

export default {
    name: 'Auth',
    data() {
        return {
            isLoggedIn: false, // Coloca aquí la lógica para verificar si el usuario ha iniciado sesión
            username: 'example@example.com', // Coloca aquí el email del usuario logueado
        };
    },
    methods: {
        getUsername() {
            // Lógica para mostrar solo el usuario del email sin el "@" y lo que sigue
            const atIndex = this.username.indexOf('@');
            return this.username.slice(0, atIndex);
        },
    },
};
</script>
  
<style scoped>
@import '../css/styles.css';
</style>
