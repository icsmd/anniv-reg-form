<template>
    <div id="printableDiv">
        <div class="header">

        </div>
        <table class="table-container" id="tbl_cash_reg_summary" cellspacing="0" width="100%"
            style="font-family: Muli !important;">
            <thead class="custom-table-header">
                <tr style="border: solid 1px white !important">
                    <td colspan="3" style="border: solid 1px white !important">&nbsp;</td>
                </tr>
                <tr
                    style="border-top: solid 1px white !important; border-left: solid 1px rgb(255, 255, 255);  border-right: solid 1px rgb(255, 255, 255);">
                    <td colspan="3"
                        style="border: solid 1px white !important; border-bottom: 1px solid black !important;">
                        &nbsp;</td>
                </tr>
                <tr>
                    <th colspan="2" style="border: solid 1px rgb(13, 0, 0); text-align: center;">
                        <p style="margin-top: 20px" class="p-inside-table"><b>LIQUIDATION REPORT</b>
                            <br>Period Covered {{ sTitleDate }}
                        </p>
                        <p class="p-inside-table pull-left" style="margin: 10px !important;">Entity Name:
                            _____________________________________________________</p>
                        <p class="p-inside-table pull-left" style="margin: 10px !important;">Fund Cluster: <u>{{
                                aSheetSummary.fund_desc }} ({{
                                aSheetSummary.fund_code }})</u></p>

                    </th>
                    <th style="border: solid 1px rgb(13, 0, 0); text-align: left;">
                        <p style="margin-top: 20px" class="p-inside-table">Serial No.: <u>{{ aSheetSummary.sheet_no
                                }}</u></p>
                        <p style="margin-top: 20px" class="p-inside-table">Date: _______________________</p>
                        <p style="margin-top: 20px" class="p-inside-table">Responsibility Center Code: <u>{{
                                aSheetSummary.office_code }}</u></p>
                    </th>
                </tr>
                <tr>
                    <th colspan="2" style="border: solid 1px rgb(13, 0, 0); text-align: center;">
                        <p class="p-inside-table">PARTICULARS</p>
                    </th>
                    <th style="border: solid 1px rgb(13, 0, 0); text-align: center;">
                        <p class="p-inside-table">AMOUNT</p>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colspan="2" style="text-align: left;">
                        <p id="content" class="p-inside-table">
                            <br><br><br>
                            {{ sPartDesc }}
                        </p>
                    </td>
                    <td style="font-size: 20px !important; text-align: right;">
                        <p class="p-inside-table"><br><br><br><br><span class="pull-left">Php</span> &nbsp;{{
                                convertNumberFormat(aSheetSummary.total_expenses) }}<br><br><br><br></p>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="text-align: left;">
                        <p class="p-inside-table">TOTAL AMOUNT SPENT</p>
                    </td>
                    <td style="font-size: 20px !important; text-align: right;">
                        <p class="p-inside-table"><span class="pull-left">Php</span>&nbsp;{{
                                convertNumberFormat(aSheetSummary.total_expenses) }}</p>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="text-align: left;">
                        <p class="p-inside-table">AMOUNT OF CASH ADVANCE PER DV NO. {{ aSheetSummary.dv_no }} DTD._____
                        </p>
                    </td>
                    <td style="font-size: 20px !important; text-align: right;">
                        <p class="p-inside-table"><span class="pull-left">Php</span> &nbsp;{{
                                convertNumberFormat(aSheetSummary.total_cash) }}</p>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="text-align: left;">
                        <p class="p-inside-table">AMOUNT REFUNDED PER OR NO. ______ DTD. _______</p>
                    </td>
                    <td style="font-size: 20px !important; text-align: right;">
                        <p class="p-inside-table"><span class="pull-left">Php</span>&nbsp;{{
                                convertNumberFormat(aSheetSummary.total_coh) }}</p>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="text-align: left;">
                        <p class="p-inside-table">AMOUNT TO BE REIMBURSED</p>
                    </td>
                    <td style="font-size: 20px !important; text-align: right;">
                        <p class="p-inside-table"><span class="pull-left">Php</span>&nbsp;{{
                                convertNumberFormat(aSheetSummary.total_reimburse) }}</p>
                    </td>
                </tr>
                <tr>
                    <td width="33%">
                        <div style="margin: 2%">
                            <p>A. Certified: Correctness of the above data</p>
                            <p>_________________________</p>
                            <p>Signature over Printed Name<br>Claimant</p><br><br>
                            <p>Date: ________________</p>
                        </div>
                    </td>
                    <td width="33%">
                        <div style="margin: 2%">
                            <p>B. Certified: Purpose of travel / cash advance duly accomplished</p>
                            <p>_________________________</p>
                            <p>Signature over Printed Name<br>Immediate Supervisor</p><br><br>
                            <p>Date: ________________</p>
                        </div>

                    </td>
                    <td width="33%">
                        <div style="margin: 2%">
                            <p>C. Certified: Supporting documents complete and proper</p>
                            <p>_________________________</p>
                            <p>Signature over Printed Name<br>Head, Accounting Division Unit</p><br>
                            <p>JEV No.: ________________</p>
                            <p>Date: ________________</p>
                        </div>

                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import GenReportGenerator from '../../libraries/gen_report_generate.js';
export default {
    mixins: [
        GenReportGenerator
    ],
    created() {
        document.title = 'SCMS | Print Liquidation Form';
        this.sReportType = 'cash-reg-liquidation';
        this.parseCompressedData();
    },
    mounted() {
        this.printReport();
        this.adjustSpace();
    },
    methods: {
        adjustSpace: function () {
            var contentElement = document.getElementById('content');
            var lineHeight = parseFloat(window.getComputedStyle(contentElement).lineHeight); // Get the line height of the text
            var textHeight = contentElement.clientHeight; // Height of the text content

            // Calculate the number of additional lines required
            var lines = Math.ceil((textHeight / lineHeight))
            var additionalLines = 12;
            if (lines === 11) {
                additionalLines = 8;
            } else if (lines === 12) {
                additionalLines = 8;
            } else if (lines === 13) {
                additionalLines = 6;
            } else if (lines === 14) {
                additionalLines = 4;
            } else if (lines >= 15) {
                additionalLines = 1;
            }
            var brElements = '';
            for (var i = 0; i < additionalLines; i++) {
                brElements += '<br>';
            }
            contentElement.innerHTML += brElements;
        }
    }
}
</script>
<style scoped>
@media print {
    @page {
        size: A4 portrait !important;
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
</style>../../libraries/utilities