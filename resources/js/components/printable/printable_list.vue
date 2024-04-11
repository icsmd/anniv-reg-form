<template>
    <div id="printableDiv">
        <div class="header">
            <h1>Registrants List</h1>
            <br><br><br>
        </div>
        <table class="table-container" id="tbl_records" cellspacing="0" width="100%" style="margin-top: 70px !important;">
            <thead style="border: 1px solid black !important;">
                <tr style="border: 1px solid black !important;">
                    <th style="text-align: center;border: 1px solid black !important;">Reg No.</th>
                    <th style="text-align: center;border: 1px solid black !important;">Date/Time Registered</th>
                    <th style="text-align: center;border: 1px solid black !important;">Last Name</th>
                    <th style="text-align: center;border: 1px solid black !important;">First Name</th>
                    <th style="text-align: center;border: 1px solid black !important;">Department/Agency</th>
                    <th style="text-align: center;border: 1px solid black !important;">Membership</th>
                    <th style="text-align: center;border: 1px solid black !important;">Email</th>
                    <th style="text-align: center;border: 1px solid black !important;">Contact No.</th>
                    <th style="text-align: center;border: 1px solid black !important;">Type</th>
                    <th style="text-align: center;border: 1px solid black !important;">ID Code</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in aRecordList">
                    <td style="text-align: center;"><p class="p-inside-table">{{ item.reg_no }}</p></td>
                    <td style="text-align: center;"><p class="p-inside-table">{{ nullCheck(item.date_created, 'date') }} </p> </td>
                    <td style="text-align: left;"><p class="p-inside-table">{{ item.last_name }}</p></td>
                    <td style="text-align: left;"><p class="p-inside-table">{{ item.first_name }}</p></td>
                    <td style="text-align: left;"><p class="p-inside-table">{{ item.department }}</p></td>
                    <td style="text-align: left;"><p class="p-inside-table">{{ item.membership }}</p></td>
                    <td style="text-align: left;"><p class="p-inside-table">{{ item.email }}</p></td>
                    <td style="text-align: left;"><p class="p-inside-table">{{ item.contact_number }}</p></td>
                    <td style="text-align: left;"><p class="p-inside-table">{{ item.guest_of }}</p></td>
                    <td style="text-align: left;"><p class="p-inside-table">{{ item.id_code }}</p></td>

                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import utilities from '../../libraries/utilities';
export default {
    mixins: [
        utilities
    ],
    data() {
        return {
            aRecordList: []
        }
    },
    created() {
        document.title = 'RFM | Print List';
        this.parseCompressedData();
    },
    mounted() {
        this.printReport();
    },
    methods: {
        /**
         * Parse compressed data from temp storage
         */
        parseCompressedData: function () {
            let sCompressedData = this.$root.getLocalStorageValue('forEx');
            this.aRecordList = JSON.parse(sCompressedData);
        },

        /**
         * Print report
         */
        printReport: function () {
            var printContents = document.getElementById('printableDiv').outerHTML;
            var originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;
        },
    }
}
</script>
<style scoped>
@media print {
    @page {
        size: A4 landscape !important;
    }

    #printableDiv {
        display: block !important;
    }

    .header {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 50px;
        /* Adjust as needed */
        text-align: center;
        padding: 1px;
        margin-bottom: 1%;
    }

    .table-container {
        margin-top: 1% !important;
        border: 1px solid black;
        /* Initial margin for first page */
    }

    .table-container:after {
        content: "";
        display: block;
        height: 0;
        /* Adjusted for spacing */
        margin-top: 1% !important;
        /* Space for subsequent pages */
        /* page-break-before: always; */
    }

    table {
        width: 100%;
        border: 1px solid black;
        /* border-collapse: collapse; */
    }

    thead,
    tbody,
    tr,
    td {
        border: 1px solid black;
        font-family: 'Arial';
    }

    tbody:after {
        margin-top: 50%;
        page-break-before: always;
    }

    tr:after {
        margin-top: 50%;
        page-break-before: always;
    }

    thead,
    thead:after {
        display: table-header-group !important;
    }

    .p-inside-table {
        margin: 3% !important;
        font-size: 12px !important;
    }

}
</style>