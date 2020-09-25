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

    export default {
        name: 'Home',
        components: {WePlantTreeMap,VideoSection,StudioSection,MissionSection},
    }
</script>
