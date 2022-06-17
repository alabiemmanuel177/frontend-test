import React from 'react'
import { ErrorMessage, useField } from 'formik';
import "../views/appform.css"

export const TextArea = ({ label, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <div className='mb-2'>
            <label htmlFor={field.name}>{label}</label>
         <textarea className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
          {...field} {...props}></textarea>

          <ErrorMessage component='div' name={field.name}  className="error"/>
        </div>
  )
}