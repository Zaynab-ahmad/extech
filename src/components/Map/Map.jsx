import './Map.css';

export default function FormMap() {
  return (
    <div className='formMap'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12987.998739634395!2d35.7831738041092!3d35.52900546086062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1526ada7c38f8879%3A0x5f66e4e99dbb7a47!2sfocal%20X%20agency!5e0!3m2!1sen!2sjp!4v1731686198490!5m2!1sen!2sjp&scrollwheel=0"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

