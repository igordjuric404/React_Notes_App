import { useEffect } from "react";
import Swal from "sweetalert2";

const Notification = ({ type, message, onClose }) => {
  useEffect(() => {
    if (type === "error") {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: message,
        timerProgressBar: true,
        showConfirmButton: false,
        timer: 2500,
      }).then(onClose);
    } else if (type === "success") {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: message,
        timerProgressBar: true,
        showConfirmButton: false,
        timer: 2500,
      }).then(onClose);
    }
  }, [type, message, onClose]);

  return null;
};

export default Notification;
