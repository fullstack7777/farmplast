import { useState } from 'react';
import { send } from 'emailjs-com';

function EmailSend() {
    const [toSend, setToSend] = useState({
        from_name: 'noreply@farmplst.com',
        to_name: 'farmplst@gmail.com',
        message: '',
        reply_to: '',
    });
    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_c7pclcq',
            'template_pnj15fp',
            toSend,
            'noreply@farmplst.com'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    return (
        <div className="App">
            ...
        </div>
    );
}

export default EmailSend;