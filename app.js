const { createApp, ref } = Vue;

createApp({
    setup() {
        const isMenuOpen = ref(false); // Default menu tertutup
        
        return {
            isMenuOpen
        };
    }
}).mount('body'); // Pastikan mount ke body atau div paling luar