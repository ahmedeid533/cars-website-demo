import CustomDatePicker from './CustomDatePicker'
import CustomInput from './CustomInput'
import CustomPasswordInput from './CustomPasswordInput'

export const formFields = [
    { name: "firstName", component: CustomInput, label: "First Name *", type: "text", placeholder: "Ex: John" },
    { name: "lastName", component: CustomInput, label: "Last Name *", type: "text", placeholder: "Ex: Doe" },
    { name: "email", component: CustomInput, label: "Email *", type: "email", placeholder: "example@gmail.com" },
    { name: "password", component: CustomPasswordInput, label: "Password *" },
    { name: "confirmPassword", component: CustomPasswordInput, label: "Confirm Password *" },
    { name: "phone", component: CustomInput, label: "Phone *", type: "text", placeholder: "Ex: +201212121212" },
    { name: "dateOfBirth", component: CustomDatePicker, label: "Date of Birth", isDatePicker: true }, // ✅ Mark as a Date Picker
  ];