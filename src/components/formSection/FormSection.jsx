import {
  FormSectionContainer,
  FormSectionSizeControll,
  BringMuuras,
  FormContainer,
  FormRowTwoInputs,
  StyledPhoneInput,
} from './styleFormSection';

import 'react-phone-number-input/style.css';
import { useState } from 'react';

export default function FormSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    console.log({
      name,
      phone,
      email,
      message,
    });
  };

  alert('Form submitted successfully!');

  return (
    <FormSectionContainer>
      <FormSectionSizeControll>
        <BringMuuras>
          <h1>Bring Muuras to your project</h1>
          <span>
            Fill in the details below and our technical team will get back to
            you with an initial feasibility assessment (available facade area,
            plumbing, and performance goals).
          </span>
          <img src="../../../public/assets/formImage.png" alt="" />
        </BringMuuras>

        <FormContainer as="form" onSubmit={handleSubmit}>
          <h1>Contact us</h1>

          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />

          <FormRowTwoInputs>
            <StyledPhoneInput
              international
              defaultCountry="NL"
              value={phone}
              onChange={value => setPhone(value || '')}
            />

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </FormRowTwoInputs>

          <textarea
            placeholder="Tell us about your project and goals"
            value={message}
            rows={10}
            columns={50}
            onChange={e => setMessage(e.target.value)}
          />

          <button type="submit">Submit</button>
        </FormContainer>
      </FormSectionSizeControll>
    </FormSectionContainer>
  );
}
