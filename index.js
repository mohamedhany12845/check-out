document.addEventListener("DOMContentLoaded", () => {
const placeOrderBtn = document.querySelector(".place-order");

placeOrderBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // جلب القيم من الحقول
    const firstName = document.querySelector("#first_name").value;
    const lastName = document.querySelector("#last_name").value;
    const phone = document.querySelector("#phone").value;
    const email = document.querySelector("#email").value;
    const country = document.querySelector("#country").value;
    const city = document.querySelector("#city").value;
    const street = document.querySelector("#street").value;
    const district = document.querySelector("#district").value;
    const paymentMethod = document.querySelector('input[name="payment_method"]:checked')?.value;

    // تحقق من الحقول المطلوبة
    if (!firstName || !phone || !email || !paymentMethod) {
    alert("Please fill in all required fields.");
    return;
    }

    // تجهيز البيانات للتخزين
    const orderData = {
    firstName,
    lastName,
    phone,
    email,
    country,
    city,
    street,
    district,
    paymentMethod,
    date: new Date().toLocaleString()
    };

    // تخزين البيانات في localStorage
    localStorage.setItem("checkoutData", JSON.stringify(orderData));

    // تأكيد الحفظ
    alert("Order placed and data saved successfully in localStorage!");
});
});
