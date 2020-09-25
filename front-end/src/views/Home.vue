<template>
    <div>
        <VideoSection></VideoSection>
        <MissionSection></MissionSection>
        <we-plant-tree-map></we-plant-tree-map>
        <StudioSection></StudioSection>

    </div>
</template>

<script>
    import VideoSection from '../components/video-section';
    import MissionSection from '../components/mission-section';
    import StudioSection from '../components/studio-section';
    import WePlantTreeMap from "../components/we-plant-tree-map";
    import slide from "../components/slide";

    export default {
        name: 'Home',
        components: {slide,WePlantTreeMap,VideoSection,StudioSection,MissionSection},
    }
</script>
