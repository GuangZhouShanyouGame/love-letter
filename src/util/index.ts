export default {
    handleInception() {
        if (!window.vConsole) {
            this.$router.replace('/interception')
        }
    }
}