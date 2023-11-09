import * as React from 'react';

export default function EmailTemplate({
  name,
  lastName,
  email,
  number,
  content,
}) {
  return (
    <div>
      <h1>
        Hola soy {`${name} ${lastName}`}, mi correo es {email} y mi número es{' '}
        {number}
      </h1>
      <h2>{content}</h2>
    </div>
  );
}
