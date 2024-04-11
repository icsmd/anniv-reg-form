import moment from 'moment'
import Swal from 'sweetalert2'
export default {
    data() {
        return {

        }
    },
    methods: {
        /**
         * Null checker
         * @param {*} mValue 
         * @param {*} sType 
         * @param {*} sDateFormat 
         * @returns 
         */
        nullCheck: function (mValue, sType = '', sDateFormat = 'DD-MMM-YYYY HH:mm:ss') {
            let sCheckedValue = '';
            if (sType === 'number') {
                mValue = mValue == undefined ? 0 : mValue;
                sCheckedValue = mValue === null ? '---' : this.convertNumberFormat(mValue);
            } else if (sType === 'date') {
                sCheckedValue = mValue === null ? '---' : this.convertDateFormat(mValue, sDateFormat);
            } else {
                sCheckedValue = mValue === null ? '---' : mValue;
            }
            return sCheckedValue;
        },

        /**
         * Convert number format
         * @param {*} fNumber 
         * @returns 
         */
        convertNumberFormat: function (fNumber) {
            return parseFloat(fNumber).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        },

        /**
         * Convert date format
         * @param {*} sDate 
         * @param {*} sFormat 
         * @returns 
         */
        convertDateFormat: function (sDate, sFormat) {
            return moment(sDate).format(sFormat);
        },

        /**
         * SHow success alert (General Swal)
         * @param {*} sDescription 
         * @param {*} sBtnText 
         */
        showSuccessAlert: function (sDescription, sBtnText = 'Okay got it') {
            Swal.fire({
                title: 'Success!',
                text: sDescription,
                icon: 'success',
                confirmButtonText: sBtnText
            });
        },

        /**
         * Show error alert (General Swal)
         * @param {*} sErrorDescription 
         * @param {*} sBtnText 
         */
        showErrorAlert: function (sErrorDescription, sBtnText = 'Okay got it') {
            Swal.fire({
                title: 'Error!',
                text: sErrorDescription,
                icon: 'error',
                confirmButtonText: sBtnText
            });
        }
    }
}