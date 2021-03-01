function FormInput({type,name,placeholder}){
  return (
      <input type={type} name={name} placeholder={placeholder}
      class="w-full px-3 py-2 mb-5 placeholder-gray-500 border border-gray-300 rounded-md"/>
  );
}
export default FormInput;