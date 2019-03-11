<template>
	<div style="width: 100%; height: 100%;" ref="echarts"></div>
</template>

<script lang="ts">
    import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
    import EVueEchartsService from './e-vue-echarts.service'

    @Component({
        name: 'EVueEcharts'
    })
    export default class EVueEcharts extends Vue {
        es: any;
        echartsIntance: any;
        @Prop() options: any;
        @Prop() theme: any;
        @Prop() initOpts: any;
        @Emit('ready') ready(val?: any) {}
        @Emit('chartClick') chartClick(val?: any) {}
        @Emit('chartDblClick') chartDblClick(val?: any) {}
        @Emit('chartMouseDown') chartMouseDown(val?: any) {}
        @Emit('chartMouseMove') chartMouseMove(val?: any) {}
        @Emit('chartMouseUp') chartMouseUp(val?: any) {}
        @Emit('chartMouseOver') chartMouseOver(val?: any) {}
        @Emit('chartMouseOut') chartMouseOut(val?: any) {}
        @Emit('chartDataZoom') chartDataZoom(val?: any) {}


        constructor() {
            super()
            this.es = new EVueEchartsService()
            
        };

        mounted() {
            this.echartsIntance = this.es.init(this.$refs.echarts, this.theme, this.initOpts);
            this.echartsIntance.setOption(this.options);
            this.initEvents();
            this.ready(this)
        }

        destroyed() {
            this.es.dispose(this.$refs.echarts)
        }

        // 初始化事件
        initEvents() {
            this.echartsIntance.on('click', (params: any) => {
                this.chartClick(params);
            });
            this.echartsIntance.on('dblclick', (params: any) => {
                this.chartDblClick(params);
            });
            this.echartsIntance.on('mousedown', (params: any) => {
                this.chartMouseDown(params);
            });
            this.echartsIntance.on('mousemove', (params: any) => {
                this.chartMouseMove(params);
            });
            this.echartsIntance.on('mouseup', (params: any) => {
                this.chartMouseUp(params);
            });
            this.echartsIntance.on('mouseover', (params: any) => {
                this.chartMouseOver(params);
            });
            this.echartsIntance.on('mouseout', (params: any) => {
                this.chartMouseOut(params);
            });
            this.echartsIntance.on('dataZoom', (params: any) => {
                this.chartDataZoom(params);
            });
	}
    }

</script>

<style scoped lang="scss">

</style>