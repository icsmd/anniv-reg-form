import Swal from 'sweetalert2'
import HttpRequest from './request.js'
import Utilities from './utilities.js';
export default {
    mixins: [
        HttpRequest,
        Utilities
    ],
    data() {
        return {
            sFundType: '',
            aPayeeList: [],
            iSelectedPayee: 0,
            aUacsList: [],
            iSelectedUacs: 0,
            aFSList: [],
            iSelectedFs: 0,
            iNewPayee: false,
            aTaxCodes: [],
            aTaxClass: [],
            aFilteredTaxCodes: [],
            sSelectedTax: '',
            aTaxInputNo: [],
            fTaxVATValue: 1.12,
            bOrDuplicateCheck: false,
            bPayeeDuplicateCheck: false,
            bFormValid: false,
            bNoFormDuplicates: false,
        }
    },
    watch: {
        sSelectedTax(sVal) {
            this.computeTax(0);
            this.filterTaxCodes(sVal);
        }
    },
    mounted() {
        this.initializePlugins();
        this.initLibraries();


        this.initEventListener();
        document.getElementById("chkbxNewNatPay").checked = true;
        $('#inp_nature_payment').attr('readonly', true);
        this.initNatureOfPayment();
    },
    methods: {



        initLibraries: function () {
            let aParsedData = this.$root.parseLocalStorageLib();
            let aFsList = aParsedData.fund_source;
            let aUacsList = aParsedData.uacs;

            this.aFSList = aFsList.filter(fundSource => fundSource.fs_type == this.sFundType && fundSource.fs_status === 'RELEASED');
            this.aUacsList = aUacsList.filter(uacs => uacs.uacs_fund_type == this.sFundType);
            this.aPayeeList = aParsedData.payees;
            this.aTaxCodes = aParsedData.tax_code;
            this.aTaxClass = aParsedData.tax_class;

            this.sSelectedTax = 5;
            $(".tax-class-select").select2().val(5).trigger('change');
        },

        filterTaxValues: function (iTaxClassId) {
            this.filterTaxCodes(iTaxClassId);
            return this.aTaxClass.filter(taxClass => taxClass.tcl_id == iTaxClassId);
        },


        computeTax: function (bTaxOverride) {
            let aTaxTypeDetails = this.filterTaxValues($('#inp_tax_class').val());
            let sTaxGenType = aTaxTypeDetails[0] === undefined ? null : aTaxTypeDetails[0].tcl_type;
            let fInpGrossAmount = parseFloat($('#inp_gross_amount').val());
            let fTaxBase, fTWTax, fComputedNet, fComputedTax;

            if (sTaxGenType === null) {
                $('#inp_tax_amount').val('0.00');
                $('#inp_tax_amount').attr('readonly', true);
                $('#inp_net_amount').val(fInpGrossAmount.toFixed(2));
            } else {
                $('#inp_tax_amount').attr('readonly', false);
                fTaxBase = sTaxGenType === 'vat' ? fInpGrossAmount / this.fTaxVATValue : fInpGrossAmount;
                let fTaxP1 = this.aFilteredTaxCodes[0].tcd_percentage;
                let fTaxP2 = this.aFilteredTaxCodes[1].tcd_percentage;
                if (bTaxOverride === 0) {
                    fTWTax = (fTaxBase * fTaxP1) + (fTaxBase * fTaxP2);
                    $('#inp_tax_amount').val(fTWTax.toFixed(2));
                } else {
                    fTWTax = parseFloat($('#inp_tax_amount').val());
                }


                fComputedNet = fInpGrossAmount - fTWTax;
                $('#inp_net_amount').val(fComputedNet.toFixed(2));
            }
        },

        initNatureOfPayment: function () {
            let mSelf = this;
            $('#inp_uacs').on('select2:select', function (e) {
                if (document.getElementById("chkbxNewNatPay").checked === true) {
                    let sUacsId = $('#inp_uacs option:selected').val();
                    let sUacsDesc = mSelf.filterUacs(sUacsId);
                    $('#inp_nature_payment').val(sUacsDesc);
                    $('#inp_nature_payment').attr('readonly', true);
                }
            });

            document.body.addEventListener('click', function (event) {
                event.preventDefault();

                if (event.target.id === 'spanNewNatPay') {
                    if (document.getElementById("chkbxNewNatPay").checked == true) {
                        document.getElementById("chkbxNewNatPay").checked = false;
                        $('#inp_nature_payment').val('')
                        $('#inp_nature_payment').attr('readonly', false);

                    } else {
                        document.getElementById("chkbxNewNatPay").checked = true;
                        let sUacsId = $('#inp_uacs option:selected').val();
                        let sUacsDesc = mSelf.filterUacs(sUacsId);
                        $('#inp_nature_payment').val(sUacsDesc);
                        $('#inp_nature_payment').attr('readonly', true);
                    }
                }
            }, false);
        },

        filterUacs: function (iUacsId) {
            let aFilteredUacs = this.aUacsList.filter(uacs => uacs.uacs_id == iUacsId);
            return aFilteredUacs[0].uacs_acc_title;
        },


        // Initializing Plugins
        initializePlugins: function () {
            // Init Select2 - Basic Single
            $(".select2-single").select2();

            // Initialize datepicker
            $("#inpDateTransact").datepicker({
                prevText: '<i class="fa fa-chevron-left"></i>',
                nextText: '<i class="fa fa-chevron-right"></i>',
                showButtonPanel: false,
                beforeShow: function (input, inst) {
                    var newclass = 'admin-form';
                    var themeClass = $(this).parents('.admin-form').attr('class');
                    var smartpikr = inst.dpDiv.parent();
                    if (!smartpikr.hasClass(themeClass)) {
                        inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
                    }
                }
            });

            // Form Switcher
            $('#form-switcher > button').on('click', function () {
                var btnData = $(this).data('form-layout');
                var btnActive = $('#form-elements-pane .admin-form.active');

                // Remove any existing animations and then fade current form out
                btnActive.removeClass('slideInUp').addClass('animated fadeOutRight animated-shorter');
                // When above exit animation ends remove leftover classes and animate the new form in
                btnActive.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    btnActive.removeClass('active fadeOutRight animated-shorter');
                    $('#' + btnData).addClass('active animated slideInUp animated-shorter')
                });
            });

            // Cache several DOM elements
            var pageHeader = $('.content-header').find('b');
            var adminForm = $('.admin-form');
            var options = adminForm.find('.option');
            var switches = adminForm.find('.switch');
            var buttons = adminForm.find('.button');
            var Panel = adminForm.find('.panel');

            // Form Skin Switcher
            $('#skin-switcher a').on('click', function () {
                var btnData = $(this).data('form-skin');

                $('#skin-switcher a').removeClass('item-active');
                $(this).addClass('item-active')

                adminForm.each(function (i, e) {
                    var skins = 'theme-primary theme-info theme-success theme-warning theme-danger theme-alert theme-system theme-dark';
                    var panelSkins = 'panel-primary panel-info panel-success panel-warning panel-danger panel-alert panel-system panel-dark';
                    $(e).removeClass(skins).addClass('theme-' + btnData);
                    Panel.removeClass(panelSkins).addClass('panel-' + btnData);
                    pageHeader.removeClass().addClass('text-' + btnData);
                });

                $(options).each(function (i, e) {
                    if ($(e).hasClass('block')) {
                        $(e).removeClass().addClass('block mt15 option option-' + btnData);
                    } else {
                        $(e).removeClass().addClass('option option-' + btnData);
                    }
                });
                $(switches).each(function (i, ele) {
                    if ($(ele).hasClass('switch-round')) {
                        if ($(ele).hasClass('block')) {
                            $(ele).removeClass().addClass('block mt15 switch switch-round switch-' + btnData);
                        } else {
                            $(ele).removeClass().addClass('switch switch-round switch-' + btnData);
                        }
                    } else {
                        if ($(ele).hasClass('block')) {
                            $(ele).removeClass().addClass('block mt15 switch switch-' + btnData);
                        } else {
                            $(ele).removeClass().addClass('switch switch-' + btnData);
                        }
                    }

                });
                buttons.removeClass().addClass('button btn-' + btnData);
            });

            setTimeout(function () {
                adminForm.addClass('theme-primary');
                Panel.addClass('panel-primary');
                pageHeader.addClass('text-primary');

                $(options).each(function (i, e) {
                    if ($(e).hasClass('block')) {
                        $(e).removeClass().addClass('block mt15 option option-primary');
                    } else {
                        $(e).removeClass().addClass('option option-primary');
                    }
                });
                $(switches).each(function (i, ele) {

                    if ($(ele).hasClass('switch-round')) {
                        if ($(ele).hasClass('block')) {
                            $(ele).removeClass().addClass('block mt15 switch switch-round switch-primary');
                        } else {
                            $(ele).removeClass().addClass('switch switch-round switch-primary');
                        }
                    } else {
                        if ($(ele).hasClass('block')) {
                            $(ele).removeClass().addClass('block mt15 switch switch-primary');
                        } else {
                            $(ele).removeClass().addClass('switch switch-primary');
                        }
                    }
                });
                buttons.removeClass().addClass('button btn-primary');
            }, 800);
        },

        initEventListener: function () {
            let mSelf = this;
            $('#inp_tax_class').on('select2:select', function (e) {
                mSelf.computeTax(0);
                let iTaxClassId = e.params.data.id;
                mSelf.filterTaxCodes(iTaxClassId);
            });

            document.body.addEventListener('click', function (event) {
                event.preventDefault();

                if (event.target.id === 'spanNewPayee') {
                    if (document.getElementById("chkbxNewPayee").checked == true) {
                        document.getElementById("chkbxNewPayee").checked = false;
                        $('#inp_new_payee').val('');
                        $('#divNewPayee').css('display', 'none');
                    } else {
                        document.getElementById("chkbxNewPayee").checked = true;
                        $('#divNewPayee').css('display', '');
                    }
                }
            }, false);

            this.setFieldAutoCompute('#inp_gross_amount', 0);
            this.setFieldAutoCompute('#inp_tax_amount', 1);
            this.setFieldAutoCompute('#inp_net_amount', 1);

            $('#inp_or_number').keyup(function (event) {
                event.preventDefault();
                mSelf.bFormValid = false;
                mSelf.bOrDuplicateCheck = false;
                mSelf.bNoFormDuplicates = false;
            });
            $('#inp_new_payee').keyup(function (event) {
                event.preventDefault();
                mSelf.bFormValid = false;
                mSelf.bPayeeDuplicateCheck = false;
                mSelf.bNoFormDuplicates = false;
            });
        },

        setFieldAutoCompute: function (sElementId, bTaxOverride) {
            let mSelf = this;
            $(sElementId).keyup(function (event) {
                event.preventDefault();
                mSelf.computeTax(bTaxOverride);
            });
        },

        filterTaxCodes: function (sTaxType) {
            const filteredTaxCodes = this.aTaxCodes.filter(taxCode => taxCode.tcl_id == sTaxType);
            this.aFilteredTaxCodes = filteredTaxCodes;
        },

        filterParams: function () {

            let oParams = {
                fund_type: this.sFundType,
                or_number: $('#inp_or_number').val(),
                fs_id: $('#inp_fund_source').val(),
                tcl_id: $('#inp_tax_class').val(),
                transact_date: $('#inpDateTransact').val(),
                uacs_id: $('#inp_uacs').val(),
                nature_payment: $('#inp_nature_payment').val(),
                gross_amount: $('#inp_gross_amount').val(),
                tax_amount: $('#inp_tax_amount').val(),
                net_amount: $('#inp_net_amount').val()
            }

            // Filter Payee Details
            if (document.getElementById("chkbxNewPayee").checked === false) {
                oParams = Object.assign({}, oParams, { payee_id: $('#inp_payee').val() });
            } else {
                oParams = Object.assign({}, oParams, { payee_name: $('#inp_new_payee').val() });
            }

            return oParams;
        },

        validateEntries: function () {
            let bResult = true;

            let fs_id = $('#inp_fund_source').val();
            if (fs_id === null) {
                $('#p_fund_source').css('display', '');
                bResult = false;
            }
            let or_number = $('#inp_or_number').val();
            if (or_number === '') {
                $('#p_or_number').css('display', '');
                bResult = false;
            }

            let transact_date = $('#inpDateTransact').val();
            if (transact_date === '') {
                $('#p_transact_date').css('display', '');
                bResult = false;
            }

            let uacs_id = $('#inp_uacs').val();
            if (uacs_id === null) {
                $('#p_uacs').css('display', '');
                bResult = false;
            }

            if (document.getElementById("chkbxNewPayee").checked === true) {
                let new_payee = $('#inp_new_payee').val();
                if (new_payee === '') {
                    $('#p_new_payee').css('display', '');
                    bResult = false;
                }
            } else {
                let payee_id = $('#inp_payee').val();
                if (payee_id === null) {
                    $('#p_payee').css('display', '');
                    bResult = false;
                }
            }

            let gross_amount = $('#inp_gross_amount').val();
            if (gross_amount === '') {
                $('#p_gross_amount').css('display', '');
                bResult = false;
            }

            if (parseFloat(gross_amount) <= 0) {
                $('#p_gross_amount').css('display', '');
                $('#p_gross_amount').text('Gross amount must not be less than or equal to zero!');
            }

            let tax_amount = $('#inp_tax_amount').val();
            if (tax_amount === '') {

                $('#p_tax_amount').css('display', '');
                bResult = false;
            }

            if (parseFloat(tax_amount) < 0) {
                $('#p_tax_amount').css('display', '');
                $('#p_tax_amount').text('Vat amount must not be less than zero!');
            }

            let net_amount = $('#inp_net_amount').val();
            if (net_amount === '') {
                $('#p_net_amount').css('display', '');
                bResult = false;
            }

            this.bFormValid = bResult;
        },

        processEntries: function () {
            let mSelf = this;
            let oParams = this.filterParams();
            $('.error_msg').css('display', 'none');
            this.validateEntries();


            if (this.bFormValid === true) {
                this.checkDuplicates(oParams);
                setTimeout(function () {
                    console.log('no form duplicates: ' + mSelf.bNoFormDuplicates);
                    if (mSelf.bNoFormDuplicates === true) {
                        mSelf.saveEntries();
                    }
                }, 1000);

            } else {
                this.showErrorAlert('Please double check and correct all your entries!')
            }
        },

        saveEntries: function () {
            let oParams = this.filterParams();
            this.postRequest('sdor/save-entry', oParams, (mResponse) => {
                this.showSuccessAlert('Successfully saved your entry');
                setTimeout(function () { window.location.reload(); }, 1000);
            });
        },

        checkDuplicates: async function (oParams) {
            let mSelf = this;

            if (mSelf.bOrDuplicateCheck === false) {
                oParams = Object.assign({}, oParams, { field: 'or_number' });
                this.postRequest('sdor/validate-entry', oParams, (mResponse) => {

                    if (mResponse.data === false) {
                        mSelf.bNoFormDuplicates = false;
                        Swal.fire({
                            title: 'Duplicate Check!',
                            html: mResponse.message,
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, Proceed."
                        }).then((result) => {
                            if (result.isConfirmed) {
                                mSelf.bOrDuplicateCheck = true;
                                mSelf.processEntries();
                            }
                        });
                    } else {
                        mSelf.bNoFormDuplicates = true;
                    }
                });
            } else {
                mSelf.bNoFormDuplicates = true;
            }



            if (document.getElementById("chkbxNewPayee").checked === true) {
                oParams = Object.assign({}, oParams, { field: 'payee' });
                this.postRequest('sdor/validate-entry', oParams, (mResponse) => {

                    if (mResponse.data === false) {
                        mSelf.bNoFormDuplicates = false;
                        Swal.fire({
                            title: 'Duplicate Check!',
                            html: mResponse.message,
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Okay I Understand."
                        }).then((result) => {
                            if (result.isConfirmed) {
                                mSelf.bFormValid = false;
                                mSelf.bNoFormDuplicates = false;
                            }
                        });
                    } else {
                        mSelf.bFormValid = true;
                        mSelf.bNoFormDuplicates = true;
                    }
                });
            }

        }
    }
}