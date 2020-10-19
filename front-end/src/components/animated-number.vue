<template>
    <div>
        {{displayNumber.toFixed((change % 1) !== 0?change.toString().split('.')[1].length:0)}}
    </div>
</template>

<script>
    export default {
        name: "animated-number",
        props: {
            number: {default: 0},
            change: {default: 1},
            time:{default:500}
        },
        data() {
            return {
                displayNumber: 0,
                interval: false
            }
        },

        ready() {
            this.displayNumber = this.number ? this.number : 0;
        },

        watch: {
            number: function () {
                clearInterval(this.interval);
                if (this.number === this.displayNumber) {
                    return;
                }
                this.interval = window.setInterval(function () {
                    if (this.displayNumber < this.number) {
                        this.displayNumber = this.displayNumber < this.number ? this.displayNumber + this.change : this.number;
                    }
                }.bind(this), this.time);
            }
        }
    }
</script>

<style scoped>

</style>