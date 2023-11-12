import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
console.log(bootstrap)
export default defineNuxtPlugin(nuxtApp => {
    bootstrap.Toast.add = function (text) {
        const toastTemplate = document.getElementById('toastTemplate')
        const toast = toastTemplate.cloneNode(true)
        toast.id = 'toast' + document.getElementsByClassName('toast').length
        toast.querySelector('.toast-body').innerText = text
        document.getElementsByClassName('toast-container')[0].appendChild(toast)
        const myToast = useNuxtApp().$bootstrap.Toast.getOrCreateInstance(toast)
        myToast.show()
    }
    
    nuxtApp.provide('bootstrap', bootstrap)
})