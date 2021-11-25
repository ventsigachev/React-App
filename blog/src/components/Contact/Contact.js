import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2uhf7gm', 'template_3z9c2tn', e.target, 'user_J06jEk0vjNA8YHBchFs2U')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      console.log(e.target);
      e.target.reset();
  };

  return (
    <form onSubmit={sendEmail}>
      <label htmlFor="first_name">
        Your First Name<span>*</span>
      </label>
      <input
        type="text"
        id="first_name"
        name="first_name"
        placeholder="Enter Your first name here"
        required
      />

      <label htmlFor="last_name">
        Your Last Name<span>*</span>
      </label>
      <input
        type="text"
        id="last_name"
        name="last_name"
        placeholder="Enter Your last name here"
        required
      />

      <label htmlFor="email">
        Your Email Address<span>*</span>
      </label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Enter Your email address here"
        required
      />

      <label htmlFor="country">Country</label>
      <select id="country" name="country">
        <option value="blank">------------</option>
        <option value="Bulgaria">BULGARIA</option>
        <option value="Germany">GERMANY</option>
        <option value="USA">USA</option>
      </select>

      <label htmlFor="subject">
        Your Subject<span>*</span>
      </label>
      <input
        type="text"
        id="subject"
        name="subject"
        placeholder="Enter Your subject here"
        required
      />

      <label htmlFor="message">
        Message<span>*</span>
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="Write something.."
        required
      ></textarea>

      <button className="btn btn-success" type="submit">
        Send Email
      </button>
    </form>
  );
};

export default Contact;
