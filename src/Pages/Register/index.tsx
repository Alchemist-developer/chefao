import React from 'react';
import FormRegister from '../../components/FormRegister';
import useUser from '../../hooks/useUser';


function Register(): JSX.Element {

  const handleCreateUser = useUser()


  return (
    <FormRegister createUser ={handleCreateUser} />
  );
}

export default Register;