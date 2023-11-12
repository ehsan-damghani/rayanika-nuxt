<template>
    <div class="d-flex w-100 my-auto h-100">
        <div class="side-container">
            <Icon name="ic:baseline-play-arrow" style="-webkit-transform: rotate(90deg);" class="mt-auto fs-32" />
            <span class="mt-5 fs-32 fw-bold mb-5">ثبت فناوری ها، محصولات و ایده‌ها برای شرکت در برنامه ملی حمایت از نوآوری های رایانیکی</span>
            <a href="https://rayanika1402.ir/register" class="mb-5 register-link">
                <span>فرم های ثبت مشخصات محصولات و ایده‌ها را در اینجا پیدا کنید</span>
            </a>
            <Icon name="ic:baseline-play-arrow" style="-webkit-transform: rotate(-90deg);" class="mb-auto fs-32" />
        </div>
        <div class="w-100 d-flex position-relative">
            <a href="/poster.jpg" target="_blank" class="poster-link">فراخوان برنامه</a>
            <img src="~/assets/img/landing-banner.svg" class="w-100 my-auto" style="max-height: 767px;">
        </div>
    </div>
</template>

<style scoped>
.side-container {
    background-color: #190e8e;
    color: white;
    width: 680px;
    min-width: 680px;
    max-width: 680px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.register-link {
    background-color: white;
    color: #190e8e;
    text-decoration: none;
    font-size: 18px;
    font-weight: 600;
    padding: 8px 16px;
    border-radius: 16px;
    height: 32px;
    display: flex;
    align-items: center;
}
.poster-link {
    color: white;
    background-color: #190e8e;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    padding: 8px 24px;
    border-radius: 16px;
    height: 32px;
    display: flex;
    align-items: center;
    position: absolute;
    white-space: nowrap;
    top: 16px;
    right: 16px;
}


.register-link:hover {
    background-color: rgba(255, 255, 255, 0.8);
}
</style>