<template>
    <!-- Start: Sidebar -->
    <aside id="sidebar_left" class="nano nano-light affix custom_aside_bg_color">
        <!-- Start: Sidebar Left Content -->
        <div class="sidebar-left-content nano-content">
            <!-- Start: Sidebar Header -->
            <header class="sidebar-header">
                <!-- Sidebar Widget - Author -->
                <div class="sidebar-widget author-widget">
                    <div class="media">
                        <!-- IMG of USER (FOR REPLACEMENT)-->
                        
                        <a class="media-left">
                           <img src="../../../../img/user-profile.jpg" />
                        </a>
                        <div class="media-body">
                            <div class="media-author">{{ $root.aUserInfo.username}} </div>
                            <div class="media-links">
                                <a class="sidebar-menu">System Admin</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <!-- End: Sidebar Header -->

            <!-- Start: Sidebar Menu -->
            <ul class="nav sidebar-menu">
                <li class="sidebar-label pt20">Menu</li>
               
                <li class="active" data-comp="sidebar" :data-href="sHrefHome">
                    <a href="/front/sdor/home" data-comp="sidebar" :data-href="sHrefHome">
                        <span class="fa fa-group" data-comp="sidebar" :data-href="sHrefHome"></span>
                        <span class="sidebar-title" data-comp="sidebar" :data-href="sHrefHome">Manage Registrants</span>
                    </a>
                </li>
                <li class="active" data-comp="logout">
                    <a href="#" data-comp="logout">
                        <span class="fa fa-sign-out" data-comp="logout"></span>
                        <span class="sidebar-title" data-comp="logout">Log Out</span>
                    </a>
                </li>
            </ul>
            <!-- End: Sidebar Menu -->
        </div>
        <!-- End: Sidebar Left Content -->
    </aside>
    <!-- End: Sidebar Left -->
</template>
<script>
import Swal from 'sweetalert2'
import HttpRequest from '../../../libraries/request.js'
export default {
    mixins: [
        HttpRequest
    ],
    data() {
        return {
            sHrefHome: '/admin/home',
        }
    },
    mounted() { 
        this.initSidebarNav();
    },
    methods: {
        initSidebarNav: function () {
            // Event listener for page redirect
            let mSelf = this;
            document.body.addEventListener('click', function (event) {
                event.preventDefault();
                if (event.target.dataset.comp === 'sidebar') {
                    window.location.href = event.target.dataset.href;
                }
                if (event.target.dataset.comp === 'logout') {
                   mSelf.logout();
                }
            }, false);
        },

        logout: function () {
            let mSelf = this;
            Swal.fire({
                title: "Confirmation",
                text: "Are you sure you want to logout",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, log me out."
            }).then((result) => {
                if (result.isConfirmed) {
                    this.postRequest('auth/log-out', {}, () => {
                        mSelf.$root.clearLocalStorage();
                        window.location.replace('/admin');
                    });
                }
            });
        }
    }
}
</script>
<style scoped>
.custom_aside_bg_color {
    background-color: #2a2453 !important;
}

.sidebar-label {
    color: #54cfd8 !important;
}

.custom_aside_sub_li {
    background-color: #3c375f !important;
}

.hidden {
    display: none;
}
</style>