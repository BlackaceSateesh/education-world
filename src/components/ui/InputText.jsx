/* eslint-disable react/prop-types */
const InputText = ({labelName, type, placeholder}) => {
  return (
    <>
      <div className="InputText inputBox">
        <label htmlFor="">{labelName}</label>
        <input type={type ? type : 'text'} placeholder={placeholder}/>
      </div>
    </>
  )
}

export default InputText
