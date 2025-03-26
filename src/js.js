const arrow1 = document.getElementById('arrow1');
const gh = document.getElementById('gh');
const bish = document.getElementById('bish')
///////////////////////////////// مگا منوی محصولات
arrow1.addEventListener('click', () => {
    const existingMenu = document.getElementById('menu-list');
    const fg = document.getElementById('qw')

    if (existingMenu)   existingMenu.remove();
    else {
         if (fg) {
             fg.remove()
         }
       
        const div = document.createElement('div');
        div.id = 'menu-list'; // برای مدیریت بهتر
        div.classList.add(
            "absolute", "top-full", "right-0", "bg-white", "shadow-lg","flex","gap-10", 
            "rounded-lg",  "p-4", "mt-2", "mr-[400px]","border-t-4"
        );

        div.innerHTML = `
            <ul class="  rounded-lg shadow-2xl bg-white w-2/4 *:px-2">
                <li class="py-2 hover:bg-gray-100  rounded-md cursor-pointer w-full flex-wrap flex">درگاه پرداخت<span class="text-[12px] w-full py-2">مهندسی شده برای فروش بیش‌تر</span> </li>
                <li class="py-2 hover:bg-gray-100  rounded-md cursor-pointer w-full flex-wrap flex">عیان<span class="text-[12px] w-full py-2">احراز هویت واقعی خریدار</span></li>
                <li class="py-2 hover:bg-gray-100  rounded-md cursor-pointer w-full flex-wrap flex">زرین لینک<span class="text-[12px] w-full py-2">لینک پرداخت در شبکه‌های اجتماعی</span></li>
                <li class="py-2 hover:bg-gray-100  rounded-md cursor-pointer w-full flex-wrap flex">زرین پلاس<span class="text-[12px] w-full py-2">ابزار هوشمند سوددهی</span></li>
            </ul> 
            <ul class=" p-4 mt-2 rounded-lg shadow-2xl bg-white w-3/4 *:px-2 "> 
                <li class="py-2 hover:bg-gray-100  rounded-md cursor-pointer w-full flex-wrap flex">زرین کارت<span class="text-[12px] w-full py-2">طلایی‌ترین کارتِ بانکی</span></li>
                <li class="py-2 hover:bg-gray-100  rounded-md cursor-pointer w-full flex-wrap flex">استرداد وجه<span class="text-[12px] w-full py-2">مبلغ تراکنش را در لحظه برگشت بزنید</span></li>
                <li class="py-2 hover:bg-gray-100  rounded-md cursor-pointer w-full flex-wrap flex">تسویه پیش از موعد<span class="text-[12px] w-full py-2">دریافت موجودی قابل تسویه در سریع‌ترین زمان</span></li>
                <li class="py-2 hover:bg-gray-100  rounded-md cursor-pointer w-full flex-wrap flex">تسهیم فردایی<span class="text-[12px] w-full py-2">تقسیم و واریز مبلغ به شرکای تجاری</span></li>
            </ul>
        `;

        gh.appendChild(div);
    }
});/////////////////////////////////// مگا منوی بیشتر 
bish.addEventListener('click',()=>{
    const fg = document.getElementById('qw')
    const existingMenu = document.getElementById('menu-list');

    if (fg) fg.remove()
        else{
        if (existingMenu) {
            existingMenu.remove()
        }
       const zx = document.createElement('div')
       zx.id='qw'
       zx.classList.add(
        "border-t-4","absolute","top-full","mt-2","rounded-2xl","bg-white",
       )
       zx.innerHTML=`<ul class="*:py-5 *:px-10  rounded-2xl shadow-2xl py  mx-2">
       <li class="hover:bg-gray-100 cursor-pointer">وبلاگ</li>
       <li class="hover:bg-gray-100 cursor-pointer"> دریافت شماره شبا</li>
       <li class="hover:bg-gray-100 cursor-pointer">سوالات متداول</li>
       <li class="hover:bg-gray-100 cursor-pointer">اپلیکیشن</li>
       <li class="hover:bg-gray-100 cursor-pointer">زرین بین</li>
       </ul>`
    
       bish.appendChild(zx)
   }
   
})
window.addEventListener('scroll',()=>{

})
