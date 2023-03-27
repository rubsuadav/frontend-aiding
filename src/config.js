/**
 * @description This module contains the configuration for the application.
 *      Configuration can be loaded from the environment variables.
 *      Environment variables are set in the .env file stored in the root
 *      directory of this project. The enviroment variables must be prefixed
 *      with REACT_APP_. Variables can be accessed using global.config.VARIABLE_NAME.
 * @version 0.1
 * @author José María Delgado Sánchez
 */

module.exports = global.config = {
  // Backend url
  backendUrl: process.env.REACT_APP_BACKEND_URL,
  userTimeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
};
