<template>
    <div class="login-main-container">
        <!-- <div class="login-form-container">
            <span class="d-block mb-3 fs-18 fw-bold">ورود</span>
            <div class="mb-2">
                <span class="mb-1">کدملی:</span>
                <input class="form-control d-ltr" type="text">
            </div>
            <div class="mb-2">
                <span class="mb-1">تلفن همراه:</span>
                <input class="form-control d-ltr" type="text">
            </div>
            <div class="mb-2">
                <span class="mb-1">کد پژوهشی:</span>
                <input class="form-control d-ltr" type="text">
            </div>
            <button class="btn btn-primary mt-3 mx-auto">ورود</button>
        </div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
        </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div> -->
    </div>
</template>

<script>
// export default {
//   data () {
//     return {
//       patient: [],
//       address: [],
//       requestIsLoading: true,
//       showRefServicesList: false,
//       serviceTime: ''
//     }
//   },
//   mounted () {
//     this.requestServiceDetails()

//     const myModalEl = document.getElementById('exampleModal')
//     myModalEl.addEventListener('hidden.bs.modal', event => {
//         useNuxtApp().$bootstrap.Toast.add('salam')
//     })
//   },
//   methods: {
//     requestServiceDetails () {
//       $fetch('https://randomuser.me/api/').then((response) => {
//         console.log(response.results[0])
//         const userCookie = useCookie('user')
//         userCookie.value = response.results[0].id.value
//       }).catch((error) => {
//         console.log(error)
//       })
//     }
//   }
// }
</script>


<style scoped>
.login-main-container {
    background-color: white;
}
.login-form-container {
    min-width: 480px;
    width: min-content;
    border-radius: 8px;
    background-color: white;
    border: 1px solid #c7c7c7;
    margin: 24px auto;
    padding: 16px;
    display: flex;
    flex-direction: column;
}
</style>