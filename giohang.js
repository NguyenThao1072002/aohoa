const adressbtn =document.querySelector('#adress-form')
const adressclose =document.querySelector('#adress-form-close')
//console.log(adressclose)
adressbtn.addEventListener("click", function()
{
    document.querySelector('.adress-form').style.display="flex"
})
adressclose.addEventListener("click", function()
{
    document.querySelector('.adress-form').style.display="none"
})
const quantityInput = document.getElementById('quantity-input');
const subtotalValue = document.getElementById('subtotal-value');
const totalValue = document.getElementById('total-value');

quantityInput.addEventListener('change', () => {
  const quantity = parseInt(quantityInput.value);
  const price = 26490000; // Giá của sản phẩm
  const subtotal = quantity * price;
  const total = subtotal;
  subtotalValue.innerText = formatCurrency(subtotal) + '₫';
  totalValue.innerText = formatCurrency(total) + '₫';
});

function formatCurrency(value) {
  return new Intl.NumberFormat('vi-VN').format(value);
}
var button = document.querySelector('.center1');
button.addEventListener('click', function() {
  alert('Bạn đã mua hàng thành công!');
});