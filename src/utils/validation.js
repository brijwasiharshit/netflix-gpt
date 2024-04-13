export const isEmailPasswordValid = (email,password,name)  => {
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    if(!isEmailValid) return "Invalid email ID";
    if(!isPasswordValid) return "Invalid password";

    return null;

}

export const isEmailPasswordNameValid = (email,password,name)  => {
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

    if(!isNameValid) return "Invalid Name";
    if(!isEmailValid) return "Invalid email ID";
    if(!isPasswordValid) return "Invalid password";

    return null;

}