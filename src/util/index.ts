export default {
    handleInception() {
        const date = new Date('2018/05/19 09:00:00').getTime()
        if (!window.vConsole && (new Date().getTime() < date)) {
            this.$router.replace('/interception')
        }
    }
}