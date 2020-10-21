const state = () => ({
    links: [
        {name: 'toolbar.mission', elId: 'missionSection', position: 'left'},
        {name: 'toolbar.product', elId: 'productSection', position: 'left'},
        {name: 'toolbar.reforest', elId: 'mapTreeSection', position: 'left'},
        {name: 'toolbar.studio', elId: 'studioSection', position: 'right'},
    ],
});
export default {
    namespaced: true,
    state,
}