<template>

</template>
<script>
import HttpRequest from './../../../libraries/request.js'
export default {
    mixins: [
        HttpRequest
    ],
    mounted() {
        this.checkRoute();
    },
    methods: {
        checkRoute: function () {
            this.getRequest('auth/check-route', (mResponse) => {
                console.log(mResponse);
            });
        },
    }
}
</script>
<style>
.center {
    border: 5px solid;
    margin: auto;
    width: 50%;
    padding: 10px;
}
</style>