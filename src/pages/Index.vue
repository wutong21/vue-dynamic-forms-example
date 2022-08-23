<script lang="ts">
import { defineComponent, reactive } from 'vue';
import {
  TextField,
  EmailField,
  PasswordField,
  CheckboxField,
  pattern,
  Validator,
  required,
  email,
} from '@asigloo/vue-dynamic-forms';

export default defineComponent({
  name: 'Home',
  setup() {
    const formValues = reactive({});
    const form = reactive({
      id: 'example-id',
      fields: {
        username: TextField({
          label: 'Username',
          value: '',
        }),
        email: EmailField({
          label: 'Email',
          validations: [
            Validator({ validator: required, text: 'This field is required' }),
            Validator({
              validator: email,
              text: 'Format of email is incorrect',
            }),
          ],
        }),
        passoword: PasswordField({
          label: 'Passoword',
          Validations: [
            Validator({ validator: required, text: 'This field is required' }),
            Validator({
              validator: pattern(
                '^(?=.*[a-z])(?=.*[A-Z])(?=.*)(?=.*[#$^+=!*()@%&]).{8,10}$',
              ),
              text: 'Password must contain at least 1 Uppercase, 1 Lowercase, 1 number, 1 special character and min 8 characters max 10',
            }),
          ],
        }),
        remember: CheckboxField({
          label: 'Remember me',
        }),
        condition: CheckboxField({
          label: 'I agree with the terms and conditions',
          condition: 'remember',
        }),
      },
    });

    function onFormChange(values: any) {
      Object.assign(formValues, values);
    }
    function onFormSubmit(values: any) {
      console.log('Form submitted!', values);
    }

    return {
      form,
      formValues,
      onFormChange,
      onFormSubmit,
    };
  },
});
</script>

<template>
  <div class="container max-w-3xl mx-auto mt-60">
    <dynamic-form
      :form="form"
      @submitted="onFormSubmit"
      @change="onFormChange"
    />
    <button
      class="bg-teal-400 text-light-50 px-2.5 py-1.5 rounded font-bold text-xs"
      submit="true"
      :form="form.id"
    >
      Submit
    </button>
    <pre>{{ formValues }}</pre>
  </div>
</template>
