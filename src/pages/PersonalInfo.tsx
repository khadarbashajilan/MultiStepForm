
const PersonalInfo = () => {
  return (
    <form>
      <h1>Personal Information</h1>

      <div>
        <label htmlFor="firstname">First Name</label>
        <input type="text" id="firstname" required/>
      </div>

      <div>
        <label htmlFor="lastname">Last Name</label>
        <input type="text" id="lastname" required/>
      </div>

      <div>
        <label htmlFor="email">Email</label>  
        <input type="email" id="email" required/>
      </div>

      <button type="submit">Next</button>
    </form>
  )
}

export default PersonalInfo
