<template>
    <div>
        <VideoSection></VideoSection>
        <StudioSection></StudioSection>
        <we-plant-tree-map></we-plant-tree-map>
    </div>
</template>

<script>
    import VideoSection from '../components/video-section';
    import StudioSection from '../components/studio-section';
    import WePlantTreeMap from "../components/we-plant-tree-map";

    export default {
        name: 'Home',
        components: {WePlantTreeMap,VideoSection,StudioSection},
    }
</script>
