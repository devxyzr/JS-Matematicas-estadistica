const inputPrice = document.querySelector("#price");
const inputCoupon = document.querySelector("#coupon");
const btn = document.querySelector("#calcular");
const pResult = document.querySelector("#result");

btn.addEventListener("click", CalcularPrecioConDescuento);

// Desceunto con objeto, llave - valor

// const couponObj = {
//     "descuento1": 30,
//     "descuento2": 35,
//     "descuento3": 40,
// }

const couponList = [];
couponList.push({
  name: "descuento1",
  discount: 30,
});
couponList.push({
  name: "descuento2",
  discount: 20,
});
couponList.push({
  name: "descuento3",
  discount: 15,
});

function CalcularPrecioConDescuento() {
  const price = Number(inputPrice.value);
  const coupon = inputCoupon.value;

  if (!price || !coupon) {
    pResult.innerHTML = "Por favor llena el formulario";
    return;
  }

  let discount;

  function isCouponInArray(couponElement) {
    return couponElement.name == coupon;
  }

  const couponInArray = couponList.find(isCouponInArray);

  if (couponInArray) {
    discount = couponInArray.discount;
  } else {
    pResult.innerHTML = "El cupon no es valido";
    return;
  }

  //  Logica del condicional con los objetos

  //   if (couponsObj[coupon]) {
  //     discount = couponsObj[coupon];
  //   } else {
  //     pResult.innerHTML = "El cupon no es valido";
  //     return;
  //   }

  // Verificar cupon con Swicth

  //   switch (coupon) {
  //     case "descuento1":
  //       discount = 30;
  //       break;
  //     case "descuento2":
  //       discount = 10;
  //       break;
  //     case "descuento3":
  //       discount = 5;
  //       break;

  //     default:
  //       pResult.innerHTML = "El cupo no es valido";
  //       return;
  //   }

  // Verificar cupon son IF

  //   if (coupon == "descuento1") {
  //     discount = 30;
  //   } else if (coupon == "descuento2") {
  //     discount = 25;
  //   } else {
  //     pResult.innerText = "El cupon no es valido";
  //     return;
  //   }

  const newPrice = (price * (100 - discount)) / 100;

  pResult.innerHTML = "El nuevo precio con descuento es $" + newPrice;
}
