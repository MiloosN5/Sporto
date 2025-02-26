interface FormFieldProps {
  parent: string;
  label: string;
  id: string;
  name: string;
  type: string;
  placeholder?: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const FormField = ({
  parent,
  label,
  id,
  name,
  type,
  placeholder,
  value,
  handleChange
}: FormFieldProps) => {

  const baseType = type.split('-')[0];
  const directType = type.split('-')[1];

  return (
    <div className={`form__field ${parent}__field`}>
      {baseType === 'input' && (
        <>
          <label htmlFor={id}>{label}</label>
          <input
            id={id}
            type={directType}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
          />
        </>
      )}

      {baseType === 'textarea' && (
        <>
          <label htmlFor={id}>{label}</label>
          <textarea
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
          />
        </>
      )}
    </div>
  );
};

export default FormField;
