import React from 'react'
import './Contact.css'  
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import dark_arrow from '../../assets/dark_Arrow.png'


const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "899a65b6-4ef1-4a3e-b8d7-d9c3f6433d85");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };





  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>If you're frustrated with the poor experience, inadequate facilities, or lack of support you've encountered, feel free to reach out through the contact form or find our contact information below. We recognize the ongoing issues but have yet to make any meaningful improvements. Your complaints, while likely to go unheard, are still important as we continue to struggle with basic competence.</p>
            <ul>
                <li><img src={mail_icon} alt="" />Contact@GobiStack.Guru</li>
                <li><img src={phone_icon} alt="" />+91 82969 49727</li>
                <li><img src={location_icon} alt="" />NH - 4,Opposite Police Samudhaya bhavan,Chitradurga,Karnataka 577501,India</li>
            </ul>
        </div>

        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name'required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                <label>Write your message here</label>
                <textarea name="message" rows= "6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={dark_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
        
      
    </div>
  )
}

export default Contact
