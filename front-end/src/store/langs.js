const state = () => ({
    items: [
        {img: require('../assets/images/flag.jpg'), path: '/fr/', lang: 'fr', full: 'Francais'},
        {img: require('../assets/images/united-kingdom.svg'), path: '/en/', lang: 'en', full: 'English'}
    ]
});
export default {
    namespaced: true,
    state,
}