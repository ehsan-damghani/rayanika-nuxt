<template>
    <div style="height: 100vh;">
        <Head>
            <Title>رایانیکی</Title>
        </Head>
        <!-- <header class="navbar sticky-top bg-white border-bottom">
            <nav class="container-xxl bd-gutter flex-wrap flex-lg-nowrap">
                <NuxtLink class="ms-2" to="/">خانه</NuxtLink>
                <NuxtLink class="ms-auto" to="/about">درباره ما</NuxtLink>
                <NuxtLink to="/login">ورود</NuxtLink>
            </nav>
        </header> -->
        <slot />

        <div class="toast-container position-fixed bottom-0 start-0 p-3">
            <div id="toastTemplate" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="d-flex px-2">
                    <div class="toast-body w-100">
                    Hello, world! This is a toast message.
                    </div>
                    <button type="button" class="btn-close btn-close-black me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        </div>
    </div>
</template>