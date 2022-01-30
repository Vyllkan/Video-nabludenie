import React, { useState } from "react";
import { sentEmail } from "../../helpers/email";

import "./style.css";

const OrderDialog = () => {

    const [state,setState] = useState({
        name: "",
        phone: "",
        description: ""
    })

    const [error, setError] = useState({
        nameError: false,
        phoneError: false
    })

    const sentData = () => {
        if (!state.name || !state.phone) {
            return
        }
        sentEmail(state.name, state.phone, state.description)
    }

    const handleInputs = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setState({...state, [event.currentTarget.name]: event.currentTarget.value})
    }
  return (
    <div className="order-container">
      <div className="order-title-container">
        <div className="order-title">Оставить Заявку</div>
        <div className="order-title order-close">×</div>
      </div>
      <div className="form-container">
        <div className="form-group">
          <input type="custom" name="name" className="form-field" placeholder="Имя" onChange={handleInputs} />
        </div>
        <div className="form-group">
          <input type="custom" name="phone" className="form-field" placeholder="Ваш телефон" onChange={handleInputs}/>
        </div>
        <div className="form-group">
            <textarea name="description" className="form-field text-area" placeholder="Ваш комментарий(необязательно)" onChange={handleInputs}/>
        </div>
      </div>
      <div className="modal-btn-container">
          <button className="order-btn" onClick={sentData}>Отправить</button>
      </div>
    </div>
  );
};

export default OrderDialog;
