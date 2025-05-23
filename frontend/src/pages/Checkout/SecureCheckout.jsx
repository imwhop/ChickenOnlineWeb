import axios from 'axios';

const SecureCheckout = () => {
  const handleCardPayment = async () => {
    const orderId = Date.now().toString(); // unique ID
    const amount = 100000; // in VND

    try {
      const response = await axios.post('http://localhost:5000/api/payment', {
        orderId,
        amount,
      });

      // Open VNPT-style pop-up window
      window.open(response.data.url, 'VNPT Payment', 'width=800,height=600');
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  return (
    <div>
      <h1>Secure Checkout</h1>
      {/* Other checkout elements */}
      <button onClick={handleCardPayment}>
        Pay by ATM and Visa/MasterCard
      </button>
    </div>
  );
};

export default SecureCheckout;
