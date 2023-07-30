export const AuthenticateUser = async (email, password) => {
  try {
    // Check if the provided email and password match the ones defined in the environment variables.
    // The environment variables, REACT_APP_EMAIL and REACT_APP_PASSWORD, are used for comparison.
    if (
      email !== process.env.REACT_APP_EMAIL ||
      password !== process.env.REACT_APP_PASSWORD
    ) {
      return false;
    }

    return true;
  } catch (error) {
    throw new Error("An error occurred during authentication.");
  }
};
