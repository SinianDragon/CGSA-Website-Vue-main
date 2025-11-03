import { ref, computed } from 'vue';

const supportedLanguages = ['en', 'zh']; // Add more as needed
const defaultLanguage = 'zh';

const language = ref<string>(defaultLanguage);

export function useLanguage() {
    const setLanguage = (lang: string) => {
        if (supportedLanguages.includes(lang)) {
            language.value = lang;
        }
    };

    const currentLanguage = computed({
    get: () => language.value,
    set: (value: string) => {
      setLanguage(value);
    }
  });

    return {
        currentLanguage,
        setLanguage,
        supportedLanguages,
    };
}