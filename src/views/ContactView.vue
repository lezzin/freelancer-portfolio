<script setup lang="ts">
import { reactive, computed, ref, onMounted } from "vue";
import emailjs from "@emailjs/browser";

import "vue3-toastify/dist/index.css";
import { toast } from "vue3-toastify";

import SectionHeader from "../components/shared/SectionHeader.vue";
import PageSection from "../components/layout/PageSection.vue";
import type { HeaderTitle } from "@/interfaces/HeaderTitle";

interface ContactViewFields {
  name: string;
  email: string;
  message: string;
}

const isSending = ref(false);

const fields = reactive<ContactViewFields>({
  name: "",
  email: "",
  message: "",
});

const errors = reactive<ContactViewFields>({
  name: "",
  email: "",
  message: "",
});

const isValidEmail = computed<boolean>(() => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(fields.email);
});

const validateName = () => {
  if (!fields.name) {
    errors.name = "Preencha o campo nome.";
    return;
  }

  errors.name = "";
};

const validateEmail = () => {
  if (!fields.email) {
    errors.email = "Preencha o campo e-mail.";
    return;
  }

  if (!isValidEmail.value) {
    errors.email = "E-mail incorreto.";
    return;
  }

  errors.email = "";
};

const validateMessage = () => {
  if (!fields.message) {
    errors.message = "Preencha o campo mensagem.";
    return;
  }

  errors.message = "";
};

const isFormValid = computed(() => {
  return Boolean(
    fields.name &&
      fields.email &&
      fields.message &&
      !errors.name &&
      !errors.email &&
      !errors.message
  );
});

const handleSubmit = () => {
  if (!isFormValid.value) return;

  const params: Record<string, string> = {
    from_email: fields.email,
    from_name: fields.name,
    message: fields.message,
  };

  isSending.value = true;

  emailjs
    .send("service_svh7f4w", "template_12gipiu", params)
    .then(handleResponse)
    .catch(handleError)
    .finally(() => (isSending.value = false));
};

const resetForm = () => {
  fields.name = "";
  fields.email = "";
  fields.message = "";

  errors.name = "";
  errors.email = "";
  errors.message = "";
};

const handleResponse = () => {
  toast.success("Mensagem enviada com sucesso!", {
    position: "top-right",
  });

  resetForm();
};

const handleError = () => {
  toast.error("Erro ao enviar mensagem. Tente novamente mais tarde.", {
    position: "top-right",
  });
};

onMounted(() => {
  emailjs.init({
    publicKey: "iwzLyfgc_NAdfVZiN",
  });
});

const header: HeaderTitle = {
  title: "Entre em contato",
  description: "Tem alguma dúvida ou sugestão? Me envie sua mensagem!",
};
</script>

<template>
  <PageSection centered>
    <SectionHeader
      :section-title="header.title"
      :section-description="header.description"
    />

    <form
      @submit.prevent="handleSubmit"
      class="mx-auto mt-8 max-w-xl sm:mt-20 w-full"
      data-aos="zoom-in"
    >
      <div class="grid grid-cols-1 gap-y-4 sm:grid-cols-2">
        <div class="sm:col-span-2">
          <label for="name" class="block text-sm/6 font-semibold text-gray-900">
            Nome
          </label>
          <input
            type="text"
            id="name"
            v-model="fields.name"
            @input="validateName"
            placeholder="Digite seu nome completo"
            class="contact-field"
          />
          <p v-if="errors.name" class="text-red-500 text-sm">
            {{ errors.name }}
          </p>
        </div>

        <div class="sm:col-span-2">
          <label for="email" class="block text-sm/6 font-semibold text-gray-900"
            >E-mail</label
          >
          <input
            type="email"
            id="email"
            v-model="fields.email"
            @input="validateEmail"
            placeholder="Digite seu e-mail"
            class="contact-field"
          />
          <p v-if="errors.email" class="text-red-500 text-sm">
            {{ errors.email }}
          </p>
        </div>

        <div class="sm:col-span-2">
          <label
            for="message"
            class="block text-sm/6 font-semibold text-gray-900"
            >Mensagem</label
          >
          <textarea
            id="message"
            v-model="fields.message"
            @input="validateMessage"
            rows="4"
            placeholder="Escreva sua dúvida ou mensagem aqui"
            class="contact-field"
          ></textarea>
          <p v-if="errors.message" class="text-red-500 text-sm">
            {{ errors.message }}
          </p>
        </div>
      </div>

      <button
        type="submit"
        class="mt-10 block w-full rounded-md bg-yellow-600 text-white px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm disabled:opacity-80 disabled:cursor-not-allowed enabled:hover:bg-yellow-800 focus-button focus-visible:outline-yellow-600"
        :disabled="!isFormValid || isSending"
      >
        {{ isSending ? "Enviando..." : "🚀 Enviar mensagem" }}
      </button>
    </form>
  </PageSection>
</template>

<style scoped lang="postcss">
.contact-field {
  @apply mt-1 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm/6;
}
</style>
