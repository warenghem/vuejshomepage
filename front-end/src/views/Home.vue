<template>
    <div>
        <VideoSection></VideoSection>
        <MissionSection></MissionSection>
        <ProductSection></ProductSection>
        <we-plant-tree-map></we-plant-tree-map>
        <StudioSection></StudioSection>

    </div>
</template>

<script>
    import VideoSection from '../components/video-section';
    import MissionSection from '../components/mission-section';
    import ProductSection from '../components/product-section';
    import StudioSection from '../components/studio-section';
    import WePlantTreeMap from "../components/we-plant-tree-map";


    export default {
        name: 'Home',
        components: {ProductSection, WePlantTreeMap,VideoSection,StudioSection,MissionSection},
    }
</script>
