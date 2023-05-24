<template>
    <div class="auth">
        <template v-if="!isLoggedIn">
            <div class="nav-link dropdown">
                <i class="fas fa-user fa-xl"></i>
                <div class="dropdown-content">
                    <a href="#" class="nav-link" @click="handleSignInClick">Sign in</a>
                    <a href="#" class="nav-link" @click="handleRegisterClick">Register</a>
                </div>
            </div>
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
        handleRegisterClick() {
            this.$emit('auth-action', 'register'); // Emitir evento con acción "register"
        },
        handleSignInClick() {
            this.$emit('auth-action', 'signin'); // Emitir evento con acción "signin"
        },
    },
};
</script>
  
<style scoped>
@import '../css/styles.css';
</style>
