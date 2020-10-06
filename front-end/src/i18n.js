import Vue from 'vue'
import VueI18n from 'vue-i18n'
import getBrowserLocale from "./util/getBrowserLang"

Vue.use(VueI18n);

function loadLocaleMessages() {
    const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
    const messages = {};
    locales.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i);
        if (matched && matched.length > 1) {
            const locale = matched[1];
            messages[locale] = locales(key)
        }
    });
    return messages
}

function getStartingLocale() {
    const browserLocale = getBrowserLocale({countryCodeOnly: true});
    console.log(browserLocale);
    if (browserLocale === 'fr') {
        return 'fr'
    } else {
        return process.env.VUE_APP_I18N_LOCALE || "en"
    }
}

export default new VueI18n({
    locale: getStartingLocale(),
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
    silentTranslationWarn: true,
    messages: loadLocaleMessages()
})
