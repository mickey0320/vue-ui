<template>
    <div class="table-wrapper">
        <table class="table" :class="{bordered, striped, compact}">
            <thead>
                <tr>
                    <th v-if="indexVisible">#</th>
                    <th v-for="col in columns">{{col.title}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(rowData,index) in data">
                    <td v-if="indexVisible">{{index + 1}}</td>
                    <td v-for="col in columns">{{rowData[col.field]}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "yTable",
        props:{
            columns:{
                type: Array,
            },
            data: {
                type: Array,
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
        }
    }
</script>

<style lang="scss" scoped>
    @import "var";
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
            .table{
                border: 1px solid $table-border-color;
            }
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
    }
</style>