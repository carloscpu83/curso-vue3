<template>
  <base-dialog :show="!!msgError" title="Error" @close="handlerError">
    <p>{{ msgError }}</p>
  </base-dialog>
  <base-dialog fixed :show="isLoading">
    <base-spinner></base-spinner>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="email">E-mail</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model.trim="password" />
      </div>
      <base-button>{{ submitButton }}</base-button>
      <base-button type="button" mode="flat" @click="switchMode">{{
        switchButton
      }}</base-button>
      <p v-if="isValidForm === false">
        Introduzca valores válidos para el email y la contraseña (al menos 6
        caracteres)
      </p>
      <p v-if="!!msgError">{{ msgError }}</p>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      BaseDialogmail: '',
      password: '',
      email: '',
      isValidForm: true,
      action: 'login',
      msgError: '',
      isLoading: false
    };
  },
  computed: {
    submitButton() {
      return this.action === 'login' ? 'Login' : 'Signup';
    },
    switchButton() {
      return this.action === 'login' ? 'Signup' : 'Login';
    }
  },
  methods: {
    validateForm() {
      this.isValidForm =
        this.email !== '' &&
        this.email.includes('@') &&
        this.password.length >= 6;
    },
    async submitForm() {
      this.isLoading = true;
      try {
        this.validateForm();
        if (this.isValidForm) {
          if (this.action === 'login') {
            await this.$store.dispatch({
              type: 'login',
              email: this.email,
              password: this.password
            });
          } else {
            await this.$store.dispatch({
              type: 'signup',
              email: this.email,
              password: this.password
            });
          }
        }
      } catch (error) {
        this.msgError = error.message;
      }
      this.isLoading = false;
    },
    switchMode() {
      if (this.action === 'login') {
        this.action = 'signup';
      } else {
        this.action = 'login';
      }
    },
    handlerError() {
      this.msgError = '';
    }
  }
};
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
