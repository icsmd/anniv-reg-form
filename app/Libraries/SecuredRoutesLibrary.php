<?php

namespace App\Libraries;

class SecuredRoutesLibrary
{
    const SECURED_ROUTES = [
        'sdor' => [
            '/user/session',
            '/front/sdor/home',

            '/front/sdor/add-entry/ps',
            '/front/sdor/add-entry/mooe',
            '/front/sdor/add-entry/sr',

            '/front/sdor/view-entry-summary/ps',
            '/front/sdor/view-entry-summary/mooe',
            '/front/sdor/view-entry-summary/sr',
            '/front/sdor/view-entry-details/',

            '/front/sdor/view-sheets/ps',
            '/front/sdor/view-sheets/mooe',
            '/front/sdor/view-sheets/sr',
            '/front/sdor/manage-tax',

            '/front/sdor/view-sheet-details/',
            '/front/sdor/report/cd/report',
            '/front/sdor/report/cd/register',
            '/front/sdor/report/cd/record',
            '/front/sdor/report/cash-balance',
            '/front/sdor/report/liquidation',
            '/front/sdor/report/withholding',
            '/front/sdor/report/expenses',

            '/front/sdor/report/cd/report/print',
            '/front/sdor/report/cd/record/print',
            '/front/sdor/report/cd/register/print',
            '/front/sdor/report/liquidation/print',

            '/front/sdor/lib/payee',
            '/front/sdor/notifications',

            '/sdor/get-cash-reg-entries',
            '/sdor/get-cash-reg-summary',
            '/sdor/get-entry-details/',
            '/sdor/get-sheets',
            '/sdor/create-sheet-ps',
            '/sdor/create-sheet-mooe',
            '/sdor/create-sheet-sr',
            '/sdor/update-sheet/',
            '/sdor/delete-sheet/',
            '/sdor/check-sheet-exist',
            '/sdor/validate-entry',
            '/sdor/save-entry',
            '/sdor/update-entry/',
            '/sdor/delete-entry',

            // Dashboard Endpoints
            '/sdor/dashboard/get-net-total',
            '/sdor/dashboard/get-sheet-status',
            '/sdor/dashboard/get-total-exp-date',
            '/sdor/dashboard/get-total-exp-date-uacs',

            '/fund-source/get-list',
            '/payee/get-list',
            '/payee/create',
            '/payee/update/',
            '/uacs/get-list',
            '/tax-code/get-list',
            '/tax-class/get-list',
            // Notifications
            '/notif/get-list',
            '/notif/update/',
            '/notif/mass/update',

            '/report/cashreg-report',
            '/report/cashreg-record-report',
            '/report/liquidation-report',

            '/cache/init-sdor-lib',
        ],
        'actg' => [
            '/user/session',
            '/front/actg/home',
            '/front/actg/view-sheets/ps',
            '/front/actg/view-sheets/mooe',
            '/front/actg/view-sheets/sr',

            '/front/actg/bdgt/ors/manage',
            '/front/actg/bdgt/ors/manage/details/',

            '/front/actg/view-sheet-details/',
            '/front/actg/report/cd/report',
            '/front/actg/report/cd/register',
            '/front/actg/report/cd/record',
            '/front/actg/report/cash-balance',
            '/front/actg/report/liquidation',
            '/front/actg/report/withholding',
            '/front/actg/report/expenses',
            '/front/actg/report/ors/list',

            '/front/actg/notifications',

            '/actg/get-sheets',
            '/actg/update-sheet/',
            '/actg/update-fund-source/',
            '/sdor/get-entry-details/',

            // Notifications
            '/notif/get-list',
            '/notif/update/',
            '/notif/mass/update',


            // Dashboard Endpoints
            '/actg/dashboard/get-net-total',
            '/actg/dashboard/get-sheet-status',
            '/actg/dashboard/get-total-exp-date',
            '/actg/dashboard/get-total-exp-date-uacs',
            '/bdgt/dashboard/get-ors-status-count',
            '/bdgt/dashboard/get-total-exp-region',
            '/bdgt/dashboard/get-total-exp-region-date',

            '/bdgt/get-fund-source',
            '/fund-source/get-list',
            '/payee/get-list',
            '/uacs/get-list',
            '/region/get-list',
            '/tax-code/get-list',
            '/tax-class/get-list',

            '/report/cashreg-report',
            '/report/cashreg-record-report',
            '/report/liquidation-report',

            '/front/sdor/report/cd/report/print',
            '/front/sdor/report/cd/record/print',
            '/front/sdor/report/cd/register/print',
            '/front/sdor/report/liquidation/print',
            '/front/bdgt/report/ors/list/print',

            '/cache/init-actg-lib',
        ],
        'bdgt' => [
            '/user/session',
            '/front/bdgt/home',
            '/front/bdgt/ors/add',
            '/front/bdgt/ors/view',
            '/front/bdgt/ors/view/details/',
            '/front/bdgt/notifications',

            '/bdgt/get-fund-source',
            '/bdgt/create-fund-source',
            '/bdgt/update-fund-source/',
            '/bdgt/dashboard/get-ors-status-count',
            '/bdgt/dashboard/get-ors-office-count',
            '/bdgt/dashboard/get-ors-date-count',
            '/bdgt/dashboard/get-total-exp-region',
            '/bdgt/dashboard/get-total-exp-region-date',
            '/front/bdgt/report/ors/list',
            '/front/bdgt/report/ors/list/print',

            '/uacs/get-list',
            '/fund-cluster/get-list',
            '/region/get-list',
            '/bdgt/get-fund-source',

            // Notifications
            '/notif/get-list',
            '/notif/update/',
            '/notif/mass/update',

            '/cache/init-bdgt-lib',
        ],
        'cash' => [
            '/user/session',
            '/front/cash/home',
            '/front/cash/payout/manage',
            '/front/cash/payout/manage/details/',
            '/front/cash/notifications',
            '/front/cash/report/ors/list',
            '/front/bdgt/report/ors/list/print',

            '/bdgt/dashboard/get-ors-status-count',
            '/bdgt/dashboard/get-ors-office-count',
            '/bdgt/dashboard/get-ors-date-count',
            '/bdgt/dashboard/get-total-exp-region',
            '/bdgt/dashboard/get-total-exp-region-date',



            '/cash/update-fund-source/',
            '/bdgt/get-fund-source',
            '/cpo/get-list',
            '/region/get-list',

            // Notifications
            '/notif/get-list',
            '/notif/update/',
            '/notif/mass/update',

            '/cache/init-cash-lib',
        ],
        'sysa' => [
            '/user/session',
            '/front/sysa/home',
            '/front/sysa/mgt/acc-mgt',
            '/front/sysa/mgt/setup/office',
            '/front/sysa/mgt/setup/uacs',
            '/front/sysa/mgt/setup/tax',
            '/front/sysa/mgt/user-logs',
            '/front/sysa/misc/help-desk',

            '/front/sysa/notifications',

            '/notif/get-list',
            '/notif/update/',
            '/notif/mass/update',

            '/region/get-list',
            '/region/create',
            '/region/update/',

            '/uacs/get-list',
            '/uacs/create',
            '/uacs/update/',

            '/tax-code/get-list',
            '/tax-code/create',
            '/tax-code/update/',

            '/tax-class/get-list',
            '/tax-class/create',
            '/tax-class/update/',
        ],
    ];
}