import Swal from "sweetalert2";

const OrderDetailsMsg = ({ orderId }) => {
  const OrderMsg = () => {    
    Swal.fire({
      title: '¡GRACIAS POR SU COMPRA!',
      icon: 'success',
      html:
        `<p>Su compra ha sido registrada con exito. El código de orden es: ${ orderId }</p>`,
      showCloseButton: true,
      allowOutsideClick: true,
      confirmButtonColor: "#548cbc",
      iconColor: '#548cbc',
      customClass: {
        closeButton: 'close-sweetalert',
        confirmButton: 'btn-ok-sweetalert',
      }
    }).then(() => {
        window.location.href = `/`
    });
  }
  return (
    <div>
      <OrderMsg />
    </div>
  );
};

export default OrderDetailsMsg