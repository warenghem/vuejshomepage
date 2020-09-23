<template>
    <div>
        <ProductSection></ProductSection>
        <we-plant-tree-map></we-plant-tree-map>
    </div>
</template>

<script>
    import ProductSection from '../components/product-section';
    import WePlantTreeMap from "../components/we-plant-tree-map";

    export default {
        name: 'Home',
        components: {WePlantTreeMap,ProductSection},
    }
</script>
