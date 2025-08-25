import { useEffect, useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import Body from "../components/Body";
import InputField from "../components/InputField";
import { useApi } from '../contexts/ApiProvider';
import { useFlash } from '../contexts/FlashProvider';

export default function EditUserPage() {
  const [formErrors, setFormErrors] = useState({});
  const passwordField = useRef();
  const password2Field = useRef();
  const navigate = useNavigate();
  const { search } = useLocation();
  const api = useApi();
  const flash = useFlash();
  const token = new URLSearchParams(search).get('token');

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
    else {
      passwordField.current.focus();
    }
  }, [token, navigate]);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (passwordField.current.value !== password2Field.current.value) {
      setFormErrors({ password2Field: "New Password don't match" });
    }
    else {
      const response = await api.put('/tokens/reset', {
        token,
        new_password: passwordField.current.value
      });
      if (response.ok) {
        setFormErrors({});
        flash('Your password has been reset', 'success');
        navigate('login');
      }
      else {
        if (response.body.errors.json.new_password) {
          setFormErrors(response.body.errors.json);
        }
        else {
          flash('Password could not be reset. Please try again', 'danger');
          navigate('/reset-request');
        }
      }
    }
  };

  return (
    <Body>
      <h1>Reset Your Password</h1>
      <Form onSubmit={onSubmit}>
        <InputField
          name="password" label="New Password" type="password"
          error={formErrors.passwordField} fieldRef={passwordField} />
        <InputField
          name="password2" label="New Password Aain" type="password"
          error={formErrors.passwordField2} fieldRef={password2Field} />
        <Button variant="primary" type="submit">Reset Password</Button>
      </Form>
    </Body>
  )
}
