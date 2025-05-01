import FormByFormik from "./FormByFormik"
import FormValidation from "./FormValidation"
import LoginSignUp from "./LoginSignup/LoginSignUp"
import UseRefDemo from "./useRefHook"

const MorePractice = () => {
  return (
    <>
   <h4> 1. Formik</h4>
    <FormByFormik />
   <h4> 2. Form Validation</h4>
    <FormValidation />
   <h4> 3. user Auth</h4>
    <LoginSignUp />
   <h4> 4. useRef hook</h4>
    <UseRefDemo />
    </>
  )
}

export default MorePractice