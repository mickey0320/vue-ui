<template>
    <div class="table-wrapper">
        <table class="table" :class="{bordered, striped, compact}">
            <thead>
                <tr>
                    <input type="checkbox" ref="allChecked" :checked="allCheckedStatus"  @click="onClickAll" />
                    <th v-if="indexVisible">#</th>
                    <th v-for="col in columns">
                        <div class="order-by-wrapper">
                            {{col.title}}
                            <span class="order-by" v-if="col.field in orderBy" @click="changeSort(col.field)">
                                <y-icon name="asc" :class="{active: orderBy[col.field] === 'asc'}"></y-icon>
                                <y-icon name="desc" :class="{active: orderBy[col.field] === 'desc'}"></y-icon>
                            </span>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(rowData,index) in data">
                    <input type="checkbox" :checked="getCheckedStatus(rowData)" @click="onClickItem($event,rowData)" />
                    <td v-if="indexVisible">{{index + 1}}</td>
                    <td v-for="col in columns">{{rowData[col.field]}}</td>
                </tr>
            </tbody>
        </table>
        <div class="table-loading" v-if="loading">
           <y-icon name="loading"></y-icon>
        </div>
    </div>
</template>

<script>
    import Icon from '../icon/icon'
    export default {
        name: "yTable",
        components: {
            yIcon: Icon,
        },
        props:{
            columns:{
                type: Array,
            },
            data: {
                type: Array,
            },
            loading: {
                type: Boolean,
                default: false,
            },
            // 排序规则
            orderBy: {
                type: Object,
                default: () => {},
            },
            // 选中的项
            selected:{
                type: Array,
                default: () => []
            },
            // 是否显示边框
            bordered:{
                type: Boolean,
                default: false,
            },
            // 是否显示第一列(索引)
            indexVisible:{
                type: Boolean,
                default: false,
            },
            // 是否显示条纹(各行变色)
            striped: {
                type: Boolean,
                default: true,
            },
            // 是否紧凑
            compact: {
                type: Boolean,
                default: false,
            }
        },
        computed:{
            allCheckedStatus(){
                return this.selected.length === this.data.length;
            }
        },
        watch:{
            selected(){
                const { allChecked } = this.$refs
                const { length: selectedLen} = this.selected
                const { length: dataLen} = this.data
                if (selectedLen === 0 || selectedLen === dataLen){
                    allChecked.indeterminate = false
                } else {
                    allChecked.indeterminate = true
                }
            }
        },
        methods: {
            getCheckedStatus(rowData){
                return this.selected.findIndex(item => item.id === rowData.id) > -1
            },
            onClickAll(e){
                const { checked } = e.target
                if (checked) {
                   this.$emit("update:selected", this.data)
                } else {
                   this.$emit('update:selected', [])
                }
            },
            onClickItem(e, item){
                const selectedCopy = JSON.parse(JSON.stringify(this.selected))
                const { checked } = e.target
                if (checked){
                    selectedCopy.push(item)
                } else {
                    const removingIndex = selectedCopy.findIndex(selected => selected.id === item.id)
                    selectedCopy.splice(removingIndex, 1)
                }

                this.$emit('update:selected', selectedCopy)
            },
            changeSort(field){
               const orderByClone = JSON.parse(JSON.stringify(this.orderBy))
                if (orderByClone[field] === 'desc') {
                    orderByClone[field] = 'asc'
                } else if(orderByClone[field] === 'asc'){
                    orderByClone[field] = true
                } else {
                    orderByClone[field] = 'desc'
                }
                this.$emit('update:orderBy', orderByClone)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../var";
    @keyframes spin {
        0%{transform: rotate(0deg);}
        100%{transform: rotate(360deg);}
    }
    .table-wrapper{
        position: relative;
        .table-loading{
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: rgba(255,255,255,.6);
            display: flex;
            align-items: center;
            justify-content: center;
            svg{
                font-size: 30px;
                animation: spin 1.5s infinite linear;
            }
        }
    }
    .table{
        font-size: $font-size;
        color: #606266;
        border-collapse: collapse;
        width: 100%;
        text-align: left;
        tr{
            background-color: #fff;
            border-bottom: 1px solid $table-border-color;
        }
        th{
            color: #909399;
            font-weight: normal;
        }
        td,th{
            padding: 8px;
        }

        &.bordered{
            border: 1px solid $table-border-color;
            td,th{
                border: 1px solid $table-border-color;
            }
        }
        &.striped{
           tr{
               &:nth-child(even){
                  background: #f5f7fa;
               }
           }
        }
        &.compact{
            th,td{
                padding: 4px;
            }
        }
        .order-by-wrapper{
            display: flex;
            align-items: center;
            .order-by{
                margin-left: 5px;
                display: inline-flex;
                flex-direction: column;
                svg{
                    font-size: 12px;
                    fill: #c0c4cc;
                    &.active{
                        fill: #409eff;
                    }
                }
            }
        }

    }
</style>