<script setup lang="ts">
import { watch } from 'vue';

const props = defineProps<{
    currentHoverIndex: number,
}>()

function getRoomCssClasses(roomIndex: number) {
    let classes = ['transition-300-out'];
    if (roomIndex == 2 || roomIndex == 4 || roomIndex == 6) {
        classes.push('cls-1');
    } else {
        classes.push('cls-2');
    }

    if (props.currentHoverIndex == roomIndex) {
        classes.push('cls-hover');
    }

    return classes;
}

watch(() => props.currentHoverIndex, (newValue, oldValue) => {
    // 在這裡觸發重新渲染或其他相關操作

});

</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1872.24 1661.77">
        <g id="圖層_2" data-name="圖層 2">
            <g id="圖層_1-2" data-name="圖層 1">
                <polygon :class="getRoomCssClasses(1)" points="164.42 1120.27 655.5 1120.27 655.5 1606.97 295.96 1606.97 295.96 1659.58 103.04 1659.58 103.04 1602.58 0 1602.58 0 1440.35 103.04 1440.35 103.04 1223.31 166.62 1223.31 164.42 1120.27" />
                <rect :class="getRoomCssClasses(1)" x="456" y="1606.97" width="166.62" height="54.81" />

                <polygon :class="getRoomCssClasses(2)" points="1135.62 1120.27 644.54 1120.27 644.54 1606.97 1004.08 1606.97 1004.08 1659.58 1197 1659.58 1197 1602.58 1300.04 1602.58 1300.04 1440.35 1197 1440.35 1197 1223.31 1133.43 1223.31 1135.62 1120.27" />
                
                <polygon :class="getRoomCssClasses(3)" points="1291.27 572.19 1690.27 572.19 1690.27 677.42 1769.2 677.42 1769.2 778.27 1859.08 778.27 1859.08 1111.5 1637.66 1111.5 1637.66 1080.81 1291.27 1080.81 1291.27 572.19" />
                <rect :class="getRoomCssClasses(3)" x="1306.62" y="1083" width="166.62" height="54.81" />
                
                <polygon :class="getRoomCssClasses(4)" points="1286.89 171 1385.54 171 1385.54 85.5 1503.93 85.5 1503.93 0 1554.35 0 1617.93 0 1617.93 35.08 1832.77 35.08 1832.77 221.42 1802.08 221.42 1802.08 355.15 1802.08 401.19 1872.24 401.19 1872.24 552.46 1802.08 552.46 1802.08 572.19 1291.27 572.19 1286.89 171" />
                
                <polygon :class="getRoomCssClasses(5)" points="738.81 32.88 940.5 32.88 940.5 6.58 1074.23 6.58 1074.23 89.89 1188.23 89.89 1188.23 173.19 1286.89 173.19 1286.89 473.45 1177.27 473.45 1177.27 556.85 782.66 556.85 697.16 556.85 697.16 403.39 776.08 403.39 776.08 225.81 734.42 225.81 734.42 30.69 738.81 32.88" />
                
                <polyline :class="getRoomCssClasses(6)" points="436.27 629.19 545.89 629.19 545.89 719.08 651.12 719.08 651.12 1008.46 561.23 1008.46 561.23 1117.57 138.12 1117.57 138.12 778.27 92.08 778.27 103.04 572.19 313.5 572.19 313.5 543.69 440.65 543.69" />
            </g>
        </g>
    </svg>
</template>

<style scoped>
.cls-1 {
    fill: #9d9e9e;
    opacity: 0.38;
}
.cls-2 {
    fill: #00465a;
    opacity: 0.6;
}
.cls-hover {
    opacity: 0.25;
}
</style>