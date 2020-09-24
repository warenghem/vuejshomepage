<template>
    <div>
        <ProductSection></ProductSection>
        <we-plant-tree-map></we-plant-tree-map>
        <studio-section></studio-section>
    </div>
</template>

<script>
    import ProductSection from '../components/product-section';
    import WePlantTreeMap from "../components/we-plant-tree-map";
    import StudioSection from "../components/studio-section";

    export default {
        name: 'Home',
        components: {StudioSection, WePlantTreeMap,ProductSection},
    }
</script>
