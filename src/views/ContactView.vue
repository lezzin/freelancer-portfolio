<script setup>
import { reactive, computed, ref, onMounted } from "vue";
import emailjs from "@emailjs/browser";

import "vue3-toastify/dist/index.css";
import { toast } from "vue3-toastify";

import SectionHeader from "../components/shared/SectionHeader.vue";
import PageSection from "../components/layout/PageSection.vue";

const isSending = ref(false);

const fields = reactive({
    name: "",
    email: "",
    message: "",
});

const errors = reactive({
    name: "",
    email: "",
    message: "",
});

const isValidEmail = computed(() => {
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

const isFormInvalid = computed(() => {
    return fields.name && fields.email && fields.message && !!errors.name && !!errors.email && !!errors.message;
});

const handleSubmit = () => {
    if (isFormInvalid.value) return;

    const params = {
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

const handleResponse = () => {
    toast.success("Mensagem enviada com sucesso!", {
        duration: 5000,
        position: "top-right",
    });

    fields.name = "";
    fields.email = "";
    fields.message = "";
};

const handleError = (e) => {
    toast.error("Erro ao enviar mensagem. Tente novamente mais tarde.", {
        duration: 5000,
        position: "top-right",
    });
};

const header = {
    title: "Entre em contato",
    description: "Tem alguma dúvida ou sugestão? Me envie sua mensagem!",
};

onMounted(() => {
    emailjs.init({
        publicKey: "iwzLyfgc_NAdfVZiN",
    });
});
</script>

<template>
    <PageSection centered>
        <SectionHeader :section-title="header.title" :section-description="header.description" />

        <form @submit.prevent="handleSubmit" class="mx-auto mt-8 max-w-xl sm:mt-20 w-full" data-aos="zoom-in">
            <div class="grid grid-cols-1 gap-y-4 sm:grid-cols-2">
                <div class="sm:col-span-2">
                    <label for="name" class="block text-sm/6 font-semibold text-gray-900">Nome</label>
                    <input
                        type="text"
                        id="name"
                        v-model="fields.name"
                        @input="validateName"
                        placeholder="Digite seu nome completo"
                        class="mt-1 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm/6"
                    />
                    <p v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</p>
                </div>

                <div class="sm:col-span-2">
                    <label for="email" class="block text-sm/6 font-semibold text-gray-900">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        v-model="fields.email"
                        @input="validateEmail"
                        placeholder="Digite seu e-mail"
                        class="mt-1 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm/6"
                    />
                    <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>
                </div>

                <div class="sm:col-span-2">
                    <label for="message" class="block text-sm/6 font-semibold text-gray-900">Mensagem</label>
                    <textarea
                        id="message"
                        v-model="fields.message"
                        @input="validateMessage"
                        rows="4"
                        placeholder="Escreva sua dúvida ou mensagem aqui"
                        class="mt-1 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm/6"
                    ></textarea>
                    <p v-if="errors.message" class="text-red-500 text-sm">{{ errors.message }}</p>
                </div>
            </div>

            <button
                type="submit"
                :disabled="isFormInvalid"
                class="mt-10 block w-full rounded-md bg-red-600 text-white px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm hover:bg-red-800 focus-button focus-visible:outline-red-600"
            >
                {{ isSending ? "Enviando..." : "🚀 Enviar mensagem" }}
            </button>
        </form>
    </PageSection>
</template>
