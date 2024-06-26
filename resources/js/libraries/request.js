import axios from "axios";
import Utilities from './utilities.js'
export default {
    mixins: [
        Utilities
    ],
    data () {
        return {
            sActivePage: '',
            sActiveAction: '',
        }
    },
    methods: {

        /**
         * Axios Get Request
         * 
         * @param {*} sUrl 
         * @param {*} mThen 
         * @param {*} oParam 
         * @returns 
         */
        getRequest: function (sUrl, mThen, oParam = []) {
            sUrl = '/' + sUrl;
            return new Promise((mResolve) => {
                axios({
                    method: 'get',
                    url   : sUrl,
                    params: oParam
                })
                    .then((oResponse) => {
                        mThen(oResponse.data);
                    })
                    .catch(this.catchRequest);
                mResolve();
            });
        },


        /**
         * Axios POST request
         *
         * @param sUrl   string
         * @param oParam object
         * @param mThen  mixed
         * @return {Promise<any>}
         */
        postRequest: function (sUrl, oParam, mThen) {
            let oHeaders = {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            };
            sUrl = '/' + sUrl;
            return new Promise((mResolve) => {
                axios.post(sUrl, oParam, {headers: oHeaders})
                    .then((oResponse) => {
                        mThen(oResponse.data);
                    })
                    .catch(this.catchRequest);
                mResolve();
            });
        },

        /**
         * Catch error from http requests
         * @param {*} mResponse 
         */
        catchRequest: function (mResponse) {
            let sDefaultMsg = mResponse.message;
            let sResponseMsg = mResponse.response.data.message;
            let sFinalMessage = sResponseMsg === null ? sDefaultMsg : sResponseMsg;
            
            this.showErrorAlert(sFinalMessage);
            if (this.sActivePage === 'registration' && this.sActiveAction === 'email_verify') {
                this.sEmailValidStat = 'false';
            }
        }
    }
}