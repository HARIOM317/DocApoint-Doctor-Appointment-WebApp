
function Product() {
  const amount = 500;
  const currency = "INR";
  const receiptId = "qwsaq1";

  const paymentHandler = async (e) => {
    const response = await fetch(" http://localhost:5000/order", {
      method: "POST",
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const order = await response.json();
    console.log(order);

    var options = {
      key: "rzp_test_tsOXTyrWmubxpM", // Enter the Key ID generated from the Dashboard
      amount,                         // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      name: "HealtCare",             //your business name
      description: "Test Transaction",
      image: "",
      order_id: order.id,            //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        const body = {
          ...response,
        };
        const validateRes = await fetch("http://localhost:5000/order/validate",{
          method: "POST",
          body:JSON.stringify(body),
          headers:{
            "Content-Type": "application/json",
          },
        
        });

        // show the transection id 

        const jsonRes = await validateRes.json();
        alert(jsonRes);
        console.log(jsonRes);
        
        

      },
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number

        name: "Kapil Kumar", //your customer's name
        email: "kapilkumar@example.com",
        contact: "900000000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();
  };

  return ( 
    <div classname ="body"> 
      <button onClick={paymentHandler}>Pay</button>
    </div>  
  );
}

export default Product;
