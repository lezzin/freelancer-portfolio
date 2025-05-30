<template>
    <div class="fixed inset-0 pointer-events-none z-[-1] opacity-30">
        <div class="absolute top-20 left-20 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute top-40 right-32 w-96 h-96 bg-purple-500/25 rounded-full blur-3xl animate-bounce-slow"></div>
        <div class="absolute bottom-32 left-40 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl animate-float-reverse"></div>
        <div class="absolute bottom-20 right-20 w-64 h-64 bg-emerald-500/30 rounded-full blur-3xl animate-float"></div>
        <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-400/15 rounded-full blur-3xl animate-spin-slow"
        ></div>
    </div>
</template>

<style scoped>
@keyframes float {
    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
    }
    33% {
        transform: translateY(-10px) rotate(1deg);
    }
    66% {
        transform: translateY(5px) rotate(-1deg);
    }
}

@keyframes float-reverse {
    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
    }
    33% {
        transform: translateY(10px) rotate(-1deg);
    }
    66% {
        transform: translateY(-5px) rotate(1deg);
    }
}

@keyframes bounce-slow {
    0%,
    100% {
        transform: translateY(0px) scale(1);
    }
    50% {
        transform: translateY(-20px) scale(1.05);
    }
}

@keyframes spin-slow {
    from {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

.animate-float-reverse {
    animation: float-reverse 8s ease-in-out infinite;
}

.animate-bounce-slow {
    animation: bounce-slow 4s ease-in-out infinite;
}

.animate-spin-slow {
    animation: spin-slow 20s linear infinite;
}

.blur-3xl {
    filter: blur(64px);
}
</style>
