import React from "react";
import './index.css';
import {useState, useEffect} from "react";
import{v4 as uuidv4} from "uuid";
import CryptoJS from "crypto-js";



function Index() {

    const [formData, setFormData] = useState({
        amount: "10",
        tax_amount: "0",
        total_amount: "10",
        transaction_uuid: uuidv4(),
        product_code: "EPAYTEST",
        product_service_charge: "0",
        product_delivery_charge: "0",
        success_url: "http://localhost:5173/success",
        failure_url: "http://localhost:5173/failure",
        signed_field_names: "total_amount,transaction_uuid,product_code",
        signature: "",
        secret: "8gBm/:&EnhH.1/q"
    })

    const generateSignature = (
        total_amount,
        transaction_uuid,
        product_code,
        secret
      ) => {
        const hashString = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`;
        const hash = CryptoJS.HmacSHA256(hashString, secret);
        const hashedSignature = CryptoJS.enc.Base64.stringify(hash);
        return hashedSignature;
      };
    
      // useeffect
      useEffect(() => {
        const { total_amount, transaction_uuid, product_code, secret } = formData;
        const hashedSignature = generateSignature(
          total_amount,
          transaction_uuid,
          product_code,
          secret
        );
    
        setFormData({ ...formData, signature: hashedSignature });
      }, [formData.amount]);
  return (
    <>
        <div className="main-buy-container flex bg-red-500">
          <form
            action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
            method="POST"
          >
            <h1>Donate your amount</h1>
            <input type="text" id="amount" 
            name="amount" 
            autoComplete="off"
            value={formData.amount}
          onChange={({ target }) =>
            setFormData({
              ...formData,
              amount: target.value,
              total_amount: target.value,
            })}
            required />
            <input
              type="hidden"
              id="tax_amount"
              name="tax_amount"
              value={formData.tax_amount}
              onChange={(e) => setFormData({...formData, tax_amount: e.target.value})}
              required
            />
            <input
              type="hidden"
              id="total_amount"
              name="total_amount"
              value={formData.total_amount}
                onChange={(e) => setFormData({...formData, total_amount: e.target.value})}
              required
            />
            <input
              type="hidden"
              id="transaction_uuid"
              name="transaction_uuid"
              value={formData.transaction_uuid}
              required
            />
            <input
              type="hidden"
              id="product_code"
              name="product_code"
              value={formData.product_code}
              required
            />
            <input
              type="hidden"
              id="product_service_charge"
              name="product_service_charge"
              value={formData.product_service_charge}
              required
            />
            <input
              type="hidden"
              id="product_delivery_charge"
              name="product_delivery_charge"
              value={formData.product_delivery_charge}
              required
            />
            <input
              type="hidden"
              id="success_url"
              name="success_url"
              value={formData.success_url}
              required
            />
            <input
              type="hidden"
              id="failure_url"
              name="failure_url"
              value={formData.failure_url}
              required
            />
            <input
              type="hidden"
              id="signed_field_names"
              name="signed_field_names"
              value={formData.signed_field_names}
              required
            />
            <input
              type="hidden"
              id="signature"
              name="signature"
              value={formData.signature}
              required
            />
            <input className="buy" value="Pay with esewa" type="submit" />
          </form>
        </div>
    </>
  );
}

export default Index;
